const Discord = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {

 if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '') return message.reply(`**${message.author.username}**, Sorry, You need permission \`ADMINISTRATOR\` to use this command!`);
const key = message.guild.id;
var guild = message.guild;  
var option = args.join(" ")
            if (!option) {
              var embed1 = new Discord.RichEmbed()
              .setAuthor(`${client.user.username} Logging`, client.user.displayAvatarURL)
              .setColor('RANDOM')
              .setDescription(`
**Proper Usage:**
• ${prefix}logging setup
• ${prefix}logging on
• ${prefix}logging off

**Example:**
• ${prefix}logging setup

**After do that, do again:**
• ${prefix}logging on
`)
              .setFooter("Logging Usage")
              .setTimestamp()
              message.channel.send(embed1);
            } else {
              if (option.match("setup")) {
                
          
await guild.createChannel('Inspirus Logs', 'category', [{
 
 id: guild.id,
 deny: ['MANAGE_MESSAGES'],
 allow: ['SEND_MESSAGES']      

}]);

await guild.createChannel('channel-logs', 'text')
.then(channel =>{
    channel.setParrent(guild.channels.find(c => c.name === "Inspirus Logs"))
});

await guild.createChannel('member-logs', 'text')
.then(channel =>{
    channel.setParrent(guild.channels.find(c => c.name === "Inspirus Logs"))
});

await guild.createChannel('message-logs', 'text')
.then(channel =>{
    channel.setParrent(guild.channels.find(c => c.name === "Inspirus Logs"))
});

              
      var embed2 = new Discord.RichEmbed()
                       .setColor(color)
                       .setDescription(`Logging channels setup complete`)
                       .setTimestamp();     
                       message.channel.send(embed2);
            }
            if(options.match("on")) {
               client.loDB.setProp(key,"LoggingOnOff","on");
               
               var embed3 = new Discord.RichEmbed()
                       .setColor(color)
                       .setDescription(`Logging has been enabled`)
                       .setTimestamp();      
                       message.channel.send(embed3);

            }
            if(options.match("off")) {
               client.loDB.setProp(key,"LoggingOnOff","off");

               var embed4 = new Discord.RichEmbed()
                       .setColor(color)
                       .setDescription(`Logging has been disabled`)
                       .setTimestamp();  
                       message.channel.send(embed2);
            }
            }
          
}

exports.conf = {
  aliases: ['log'], 
  cooldown: '5'
} 
exports.help = {
  name: 'logging', 
  description: 'Set the logging to the channel like \`Message Edited\`, \`Message Deleted\` and more!', 
  usage: 'logging'
} 