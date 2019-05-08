const Discord = require('discord.js');
const client = new Discord.Client();

client.login (process.env.TOKEN);

const activities_list = [
  "𝑤𝑆𝑐𝑎𝑚_",
  "𝑤𝑆𝑐𝑎𝑚_",
  "𝑤𝑆𝑐𝑎𝑚_",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index],{
            type: "STREAMING",
            url: "https://www.twitch.tv/wScam"});
 
    }, 3000); // Runs this every 10 seconds. 1000 = 1seconde
    console.log('Connecté');
});
