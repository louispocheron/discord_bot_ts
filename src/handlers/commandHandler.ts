import { Client, REST, Routes } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { SlashCommand } from "../types";
import { command } from "../slashCommands/ping";

module.exports = async (client: Client) => {
    const token: string | undefined = process.env.TOKEN;
    const clientId: string | undefined = process.env.CLIENT_ID
    const guildId: string | undefined = process.env.GUILD_ID

    if(!clientId) return 
    if(!token) return 
    if(!guildId) return

    const body: any = [];
    const slashCommandsDir = join(__dirname, '../slashCommands');

    readdirSync(slashCommandsDir).forEach(file => {
        if (!file.endsWith('.js')) return

        const command: SlashCommand = require(`${slashCommandsDir}/${file}`).command;
        body.push(command.data.toJSON());
        client.slashCommands.set(command.name, command);
    })

        console.log('lebody' + body)
        const rest: REST = new REST({ version: '10' }).setToken(token);
    try {
        await rest.put(
            Routes.applicationCommand(clientId, guildId),
            { body: body }
        );
    } catch (error) {
        console.error(error);
    }
}