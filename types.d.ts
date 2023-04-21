import { CommandInteraction, SlashCommandBuilder } from "discord.js"

declare global {
    namespace NODEJS {
        interface ProcessEnv {
            CLIENT_ID: string,
            TOKEN: string
        }
    }
}
export interface BotEvent {
    name: string,
    once?: Boolean | false
    execute: (...args) => void
}

export interface slashCommand {
    name: string,
    data: SlashCommandBuilder,
    async execute: (interaction: CommandInteraction) => Promise<void>
}
export {}