const Discord = require('discord.js');
const { embed_color } = require('../config.json');

module.exports = (client, guild, user) => {
  
     let bembed = new Discord.RichEmbed()
    .setAuthor(`${user.tag} | User Banned`, user.displayAvatarURL)
    .setFooter(`ID: ${user.id}`) 
    .setColor(embed_color).setTimestamp()
  
  let key = user.guild.id;
  let channel = user.guild.channels.get(client.lDB.get(key,"loggingChannel"));
  if(channel) return;
  
     
    channel.send(bembed); 
};