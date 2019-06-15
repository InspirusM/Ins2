const db = require('../handle/database.js');

exports.run = async (client, message, args, color) => {
 
   if(!args[0]){
    return message.channel.send('**The current prefix in this guild is** `' + db.setguild.getProp(message.guild.id, 'prefix') + '`');
  }else{
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('❌**You don\'t have permission \`MANAGE_GUILD\` to change prefix.**');
    const old = db.setguild.getProp(message.guild.id, 'prefix');
    db.setguild.setProp(message.guild.id, 'prefix', args[0]);
    message.channel.send('**Prefix changed** ' + '`' + old + '`' + 'to `' + args[0] + '`');
  }
 

}

exports.conf = {
    aliases: [],
    cooldown:
}

exports.help = {
    name: "prefix",
    description: "Changes the bot prefix",
    usage: "prefix <new-prefix>"
}
