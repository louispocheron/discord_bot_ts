import { SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../types";
import { EmbedBuilder, RGBTuple } from "@discordjs/builders";

export const command: SlashCommand = {
    name: 'ping',
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('affiche le ping du bot'),
    execute: async (interaction) => {
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({
                        name: 'popoch'
                    })
                    .setDescription(`Pong\nPing: ${interaction.client.ws.ping}`)
            ]
        })
    }
}