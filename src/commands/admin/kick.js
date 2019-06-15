const { RichEmbed } = require('discord.js');
exports.run = async (client, message, args, color, prefix) => {

  if (!message.member.hasPermission("KICK_MEMBERS")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("You don't have permission to kick users!");
return message.channel.send(embed);
  }

     if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("Sorry, I don't have permission to kick users!");
return message.channel.send(embed);
  }

  let toKick = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toKick) return message.channel.sendMessage("Can\'t find the mentioned user! Usage: ```kick <@user> <reason>```");
  let reason = args.join(" ").slice(22);
  if (toKick.hasPermission("KICK_MEMBERS")) return message.channel.send("I can't kick this member.").then(msg => msg.delete(3000));
  
  if (toKick.highestRole.position < message.guild.member(client.user).highestRole.position) {
   message.guild.member(toKick).kick(reason);
  try {

  message.channel.send(`***User kicked successfully***.`)  
  } catch (e) {
    console.log(e.message)
  }
  } else {
   message.channel.send(` I can't kick **${toKick.user.tag}** Because his role is higher than me.`)
  }

}

exports.conf = {
  aliases: [], 
  cooldown:
} 
exports.help = {
  name: 'kick', 
  description: 'To kick the user from the server.', 
  usage: 'kick <@user> <reason>'
} 