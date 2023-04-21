import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { readdirSync } from 'fs';
import { join } from 'path';

dotenv.config();
console.log(process.env.TOKEN);
const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
    ]
}); 

const handleDirs = join(__dirname, './handlers');

readdirSync(handleDirs).forEach(file => {
    require(`${handleDirs}/${file}`)(client);
})

client.login(process.env.TOKEN);
