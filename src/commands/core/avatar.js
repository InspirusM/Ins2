const Discord = require("discord.js")

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  .setAuthor(`${user.username}'s Avatar`)
  .setTitle("Your Profile Picture Link")
  .setURL(user.displayAvatarURL)
  .setImage(user.displayAvatarURL)
  .setColor("#0096ff")
 return message.channel.send(embed);

}

exports.conf = {
    aliases: ['avtr','pfp'],
    cooldown: "2"
}

exports.help = {
    name: "avatar",
    description: "Shows your profile picture.",
    usage: "avatar"
}