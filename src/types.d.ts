import { CommandInteraction, SlashCommandBuilder } from "discord.js"

declare global {
    namespace NODEJS {
        interface ProcessEnv {
            CLIENT_ID: string,
            TOKEN: string
        }
    }
}

declare module 'discord.js' {
    export interface Client {
        slashCommands: Collecttion<string, SlashCommand>
    }
}
export interface BotEvent {
    name: string,
    once?: Boolean | false
    execute: (...args) => void
}

export interface SlashCommand {
    name: string,
    data: SlashCommandBuilder,
    async execute: (interaction: CommandInteraction) => Promise<void>
}

export { }