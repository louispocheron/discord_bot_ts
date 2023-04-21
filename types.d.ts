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

export {}