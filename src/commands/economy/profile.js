const db = require('../handle/database.js');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args = []) => {
	let user;
    if (message.mentions.users.size) { user = message.mentions.users.first(); }
    else if (args[0]) { user = await message.guild.fetchMember(args[0]);
      if (user) { user = user.user; } }
    if (!user) { user = message.author; }
    if(user.bot) return message.channel.send('**Bot doesn\'t have profile**');
    if(!db.userprof.has(user.id)) {
    	db.userprof.set(user.id, {
      tag: user.id,
    	rep: 0,
    	level: 0,
    	xp: 0,
        money: 0
    });
   }
	const procfile = db.userprof.get(user.id);
	const pi = parseInt(procfile.xp, 10);
  let strlvltoint = parseInt(procfile.level, 10);
	const nextLev = (++strlvltoint)*10;
  const endpi = nextLev*nextLev;
	const piPercent = Math.floor((pi/endpi)*9);
	
	const embed = new RichEmbed()
  .setColor('#0071FF')
	.setTitle('📜 User Profile Card for ' + user.tag)
  .setThumbnail(user.avatarURL)
	.addField('Reputation', procfile.rep, true)
	.addField('Level', procfile.level, true)
	.addField('XP', `${progresBar(piPercent)} (${procfile.xp})`, true)
	.addField('Money', `💵${procfile.money}`, true)
	msg.channel.send({embed});
}

const barW = ['<:w1:588949274163806221>', '<:w2:588950185007251495>', '<:w3:588950227592019989>' ];
const barG = ['<:g1:588951169133576204>', '<:g2:588951219729334288>', '<:g3:588951292135866381>'];

function progresBar(init){
	if(init === 1){
		return `${barG[0]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[2]}`;
	}else if(init === 2){
		return `${barG[0]}${barG[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[2]}`;
	}else if(init === 3){
		return `${barG[0]}${barG[1]}${barG[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[2]}`;
	}else if(init === 4){
		return `${barG[0]}${barG[1]}${barG[1]}${barG[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[2]}`;
	}else if(init === 5){
		return `${barG[0]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barW[1]}${barW[1]}${barW[1]}${barW[2]}`;
	}else if(init === 6){
		return `${barG[0]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barW[1]}${barW[1]}${barW[2]}`;
	}else if(init === 7){
		return `${barG[0]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barW[1]}${barW[2]}`;
	}else if(init === 8){
		return `${barG[0]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barW[2]}`;
	}else if(init === 9){
		return `${barG[0]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[1]}${barG[2]}`;
	}else{
		return `${barW[0]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[1]}${barW[2]}`;
	}
}

exports.conf = {
    aliases: ['prfl'],
    cooldown: 
}

exports.help = {
  name : "profile",
  description: "Returns your profile or mention user",
  usage: "profile"
};
