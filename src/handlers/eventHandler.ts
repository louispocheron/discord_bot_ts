import { Client } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { BotEvent } from "../types";

module.exports = (client: Client) => {
    const eventDir = join(__dirname, '../events');
    readdirSync(eventDir).forEach(file => {
        if (!file.endsWith('.js')) return

        const event: BotEvent = require(`${eventDir}/${file}`).default;

        event.once ? client.once(event.name, (...args) => event.execute(...args)) : client.on(event.name, (...args) => event.execute(...args));

        console.log(`events ${event.name} successfully loaded`);
    });
}
