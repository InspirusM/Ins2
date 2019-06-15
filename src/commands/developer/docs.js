const { get } = require ("node-superfetch")

exports.run = async (client, message, args) => {
  
      if(args.length < 1) return msg.channel.send('No code was provided');
    let branch = args[1] || 'stable'
    let project = 'main';
    if (branch === 'commando' || branch === 'rpc') {
        project = branch;
        branch = 'master';
    }
    try{
        const { body } = await get(`https://djsdocs.sorta.moe/${project}/${branch}/embed`)
        .query({q: args[0]});
        return msg.channel.send({embed: body});
    }catch(e){
        return console.log(e.message);
    }

  
 }

exports.conf = {
   aliases: [], 
   cooldown: '' 
}

exports.help = {
  name: 'docs',
  description: 'Docs for Discord.js.',
  usage: 'docs <property> <branch>'
};