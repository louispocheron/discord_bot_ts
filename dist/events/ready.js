"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const event = {
    name: discord_js_1.Events.ClientReady,
    once: true,
    execute(client) {
        var _a;
        console.log(`connecté en tant que ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}`);
    }
};
exports.default = event;
