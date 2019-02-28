const Discord = require('discord.js');
const client = new Discord.Client();

client.login (process.env.TOKEN);

const activities_list = [
  "Hectonia",
  "Serveur Minecraft",
  "PvP/Faction",
  "WWW.HECTONIA.COM",
  "PLAY.HECTONIA.COM",
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
