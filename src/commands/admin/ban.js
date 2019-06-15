const Discord = require('discord.js');
exports.run = async (client, message, args, color, prefix) => {

  if (!message.member.hasPermission("BAN_MEMBERS")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("You don't have permission to ban users!");
return message.channel.send(embed);
  }

     if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("Sorry, I don't have permission to ban users!");
return message.channel.send(embed);
  }

    let user = message.mentions.users.first();
  if(!user) return message.reply("Please mention a user to ban.");

  let reason = args.join(" ");
  if(!reason) reason = "No reason has been given.";

   if (user.highestRole.position < message.guild.member(client.user).highestRole.position) {
      message.guild.member(user).ban(reason);
  try {

  message.channel.send(`***User banned successfully***.`)  
  } catch (e) {
    console.log(e.message)
  }
  } else {
   message.channel.send(` I can't ban **${user.tag}** Because his role is higher than me.`)
  }
          
}

exports.conf = {
  aliases: [], 
  cooldown:
} 
exports.help = {
  name: 'ban', 
  description: 'To ban the user from the server.', 
  usage: 'ban <@user> <reason>'
} 