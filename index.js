const Discord = require('discord.js');
const client = new Discord.Client();

client.login (process.env.TOKEN);

const activities_list = [
  "𝗹𝗮 𝗹𝘂𝗻𝗲",
  "𝗹𝗮 𝗹𝘂𝗻𝗲",
  "𝗹𝗮 𝗹𝘂𝗻𝗲",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index],{
            type: "WATCHING",
            url: "https://www.twitch.tv/wScam"});
 
    }, 3000); // Runs this every 10 seconds. 1000 = 1seconde
    console.log('Connecté');
});
