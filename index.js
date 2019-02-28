const Discord = require('discord.js');
const client = new Discord.Client();

client.login (process.env.TOKEN);

const activities_list = [
  "𝗛𝗲𝗰𝘁𝗼𝗻𝗶𝗮",
  "𝗦𝗲𝗿𝘃𝗲𝘂𝗿 𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁",
  "𝗣𝘃𝗣/𝗙𝗮𝗰𝘁𝗶𝗼𝗻",
  "𝗪𝗪𝗪.𝗛𝗘𝗖𝗧𝗢𝗡𝗜𝗔.𝗖𝗢𝗠",
  "𝗣𝗟𝗔𝗬.𝗛𝗘𝗖𝗧𝗢𝗡𝗜𝗔.𝗖𝗢𝗠",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index],{
            type: "STREAMING",
            url: "https://www.twitch.tv/evil"});
 
    }, 3000); // Runs this every 10 seconds. 1000 = 1seconde
    console.log('Connecté');
});
