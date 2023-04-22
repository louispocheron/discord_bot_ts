import { Events, Interaction } from "discord.js";
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction: Interaction) {
        if (!interaction.isChatInputCommand) return

        if(!interaction.isChatInputCommand()) return;

        const command = interaction.client.slashCommands.get(interaction.commandName);

        await command.execute(interaction);
    }

}

export default event;