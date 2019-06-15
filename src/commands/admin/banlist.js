const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');

exports.run = async (client, message, args, color, prefix) => {
      
        let ban = await message.guild.fetchBans().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view the banned users!');
    });

    ban = ban.array();
    let users = message.guild.fetchBans().id;

    arraySort(ban, 'size', {
        reverse: true
    });

    let possiblebans = [
        ['Users', 'ID']
    ];
    ban.forEach(function(ban) {
        possiblebans.push([ban.username, ban.id]);
    })

    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .addField('Bans', `\`\`\`${table.table(possiblebans)}\`\`\``);
    message.channel.send(embed);

}

exports.conf = {
  aliases: [], 
  cooldown:
} 
exports.help = {
  name: 'ban', 
  description: 'To ban the user from the server.', 
  usage: 'ban <@user>'
} 