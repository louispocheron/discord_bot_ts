import { Client, Collection, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { readdirSync } from 'fs';
import { join } from 'path';
import { SlashCommand } from './types';

dotenv.config();
const token: string | undefined = process.env.TOKEN;
const clientId: string | undefined = process.env.CLIENT_ID


const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
    ]
}); 

client.on('ready', () => {
    const guild = client.guilds.cache.first();
    process.env['GUILD_ID'] = guild?.id;
})  

client.slashCommands = new Collection<string, SlashCommand>();

const handleDirs = join(__dirname, './handlers');

readdirSync(handleDirs).forEach(file => {
    require(`${handleDirs}/${file}`)(client);
})

client.login(token);
