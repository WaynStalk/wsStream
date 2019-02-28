const Discord = require('discord.js');
const client = new Discord.Client();

client.login (process.env.TOKEN);

const activities_list = [
    "𝙃𝙚𝙘𝙩𝙤𝙣𝙞𝙖", 
    "𝙎𝙚𝙧𝙫𝙚𝙪𝙧 𝙈𝙞𝙣𝙚𝙘𝙧𝙖𝙛𝙩", 
    "𝙋𝙫𝙋/𝙁𝙖𝙘𝙩𝙞𝙤𝙣",  
    "𝙒𝙒𝙒.𝙃𝙀𝘾𝙏𝙊𝙉𝙄𝘼.𝘾𝙊𝙈",
    "𝙋𝙇𝘼𝙔.𝙃𝙀𝘾𝙏𝙊𝙉𝙄𝘼.𝘾𝙊𝙈",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = 5000
        client.user.setActivity(activities_list[index],{
            type: "STREAMING",
            url: "https://www.hectonia.com/"});
 
    }, 3000); // Runs this every 10 seconds. 1000 = 1seconde
});
