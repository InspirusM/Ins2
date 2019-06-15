const db = require('../handle/database.js');
const moment = require('moment');

exports.run = (client, message, args) => {
  if(!db.userprof.has(message.author.id)){
    db.userprof.set(message.author.id, {
      tag: message.author.id,
      rep: 0,
      level: 0,
      xp: 0,
      money: 0,
    });
  }
  if(db.userprof.getProp(message.author.id, 'lastDay') !== moment().format('L')){
    db.userprof.setProp(message.author.id, 'lastDay', moment().format('L'));
    const dailay = parseInt(db.userprof.getProp(msessage.author.id, 'money'), 10);
    db.userprof.setProp(message.author.id, 'money', dailay+10);
    message.channel.send(`💵 | ${message.author}, You got $10.`);
  }else{
    message.channel.send(`❗ | You can get daily again **${moment().endOf('day').fromNow()}**`);
  }
};

exports.conf = {
    aliases: ['dly','dl'],
    cooldown: 
}

exports.help = {
    name: "daily",
    description: "Get daily $10 money",
    usage: "daily"
}