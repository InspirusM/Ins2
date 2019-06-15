const Discord = require('discord.js');
const { embed_color } = require('../config.json');

module.exports = async (client, oldChannel, newChannel) => {
  var color = embed_color;
  var Changes = {
    unknown: 0,
    topic: 1,
    name: 2
  };
  var change = Changes.unknown;
  
  if(newChannel.name != oldChannel.name)
    change = Changes.name;
  
  if(newChannel.topic != oldChannel.topic)
    change = Changes.topic;
  
  let channel = newChannel.guild.channels.find(c => c.name === 'channel-logs');
  if(channel) return;
  
  
    
          let embed2 = new Discord.RichEmbed() 
          .setColor(color)
          .setAuthor(`Channel Name Updated`)
          .setDescription(`Channel: ${newChannel}`) 
          .addField('Before', `${oldChannel.name}` || 'No name')
          .addField('After', `${newChannel.name}` || 'No name')
          .setFooter(`ID: ${newChannel.id}`).setTimestamp()
          channel.send(embed2)

};