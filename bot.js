//bot invite link
//https://discord.com/oauth2/authorize?client_id=922257030230704238&scope=bot


const Discord = require("discord.js");
const { Client, Intents } = require('discord.js');
// Create a new client instance
//need to fix intents issue
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//need to switch token to .env
client.login('OTIyMjU3MDMwMjMwNzA0MjM4.Yb-0yg.lpWWthBbW8Kf-4tqcyyuPM4c0pw');
client.on('ready', readyDiscord);
function readyDiscord(){
    console.log('Server Running');
}




