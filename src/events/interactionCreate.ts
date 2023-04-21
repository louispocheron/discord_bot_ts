import { Events, Interaction } from "discord.js";
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.InteractionCreate,
    once: false,
    execute(interaction: Interaction) {
        if (!interaction.isChatInputCommand) return

        const command = interaction.client;
    }

}

export default event;