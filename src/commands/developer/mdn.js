const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  try {
  if (args.length < 1) throw 'Please specify the key to search!';
  
  const query = args.join('+').replace(/#/g, '.prototype.');
  
    const { body } = await require('superagent')
    .get('https://developer.mozilla.org/en-US/search.json')
    .query({
      q: query, 
      locale: 'en-US', 
      highlight: false
    })
    if (!body.documents.length) throw '🚫 | No results found.';
    const data = body.documents[0];
    
    let embed = new RichEmbed() 
    .setColor('#066FAD')
    .setAuthor('MDN', 'https://i.imgur.com/DFGXabG.png', 'https://developer.mozilla.org/')
	  .setTitle(data.title)
	  .setURL(data.url)
   	.setDescription(data.excerpt);
    return message.channel.send(embed);

  } catch (error) {
    if (typeof error === 'string') return message.channel.send(error);
    else return message.channel.send('Something error happened: ' + error.message)
  }
  
}

exports.conf = {
   aliases: [], 
   cooldown: '' 
}

exports.help = {
  name: 'mdn',
  description: 'Mozilla Developer Network',
  usage: 'mdn <query>'
};