import { Client, Collection, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { readdirSync } from 'fs';
import { join } from 'path';
import { SlashCommand } from './types';

dotenv.config();
const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
    ]
}); 

client.slashCommands = new Collection<string, SlashCommand>();

const handleDirs = join(__dirname, './handlers');

readdirSync(handleDirs).forEach(file => {
    require(`${handleDirs}/${file}`)(client);
})

client.login(process.env.TOKEN);
