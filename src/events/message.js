const config = require('../config.json');
let cooldown = new Set();
let cdseconds = 5;
const db = require('../handle/database.js');
const defaultSettings = {
  prefix: config.bot_prefix,
}

module.exports = async (client, message) => {
  
  // - - - - - - - - - - - 
  if (message.author.bot || !message.guild) return;
    if(!db.userprof.has(message.author.id)){
     db.userprof.set(message.author.id, {
  tag: message.author.id,
  rep: 0,
  level: 0,
  xp: 0,
  money: 0
});
  } 

    if(!db.setguild.has(msg.guild.id)) {
    db.util.newGuild(msg.guild.id);
  }

    const guildConf = db.setguild.get(msg.guild.id) || defaultSettings;
  
      if(msg.guild){
    if(msg.author.bot) return;
    let currentPoints = db.userprof.getProp(msg.author.id, 'xp');
    db.userprof.setProp(msg.author.id, 'xp', ++currentPoints);
    const curLevel = Math.floor(0.1 * Math.sqrt(currentPoints));
    if (db.userprof.getProp(msg.author.id, 'level') < curLevel) {
      msg.reply(`You've leveled up to level **${curLevel}**! `);
      db.userprof.setProp(msg.author.id, 'level', curLevel);
    }
  }
  const mention = `<@${client.user.id}>`;
  const chat = msg.content.slice(mention.length).split(' ');
  if(msg.content.startsWith(`${mention}`)){
    if(chat.join(' ')){
      msg.channel.startTyping();
      const body = await client.req({url:`https://some-random-api.ml/chatbot/?message=${chat.join(' ')}`, json:true});
      msg.reply(body.response).then(()=> msg.channel.stopTyping());
    }
    return;

    let msg = message.content.toLowerCase();
    
    if (msg.startsWith(guildConf.prefix) || msg.startsWith(`${client.user.toString()} `)) return require('../handle/command')(client, message);
  
    if (msg == `<@${client.user.id}>` || msg == `<@!${client.user.id}>`) {
        message.channel.send(`Hi ${message.author}, my prefix is \`${guildConf.prefix}\``);
    }
  
}