const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  
if(args.length < 1) return message.channel.send('No hexadecimal provided.')
  try{
    const int = parseInt(args.join('').replace('#', ''), 16);
    const embed = new RichEmbed()
    .setColor(int)
    .setDescription(`Here is the converted hex to int:\nHexadecimal: ${args[0]}\nInteger: ${int}`);
    return message.channel.send(embed);
  }catch(e){
    return message.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
  }

 }

exports.conf = {
   aliases: ['hti'], 
   cooldown: '' 
}

exports.help = {
  name: 'hex-to-int',
  description: 'Hexadecimal to int converter',
  usage: 'hex-to-int <#hexcode>'
};