const enmap = require('enmap');
const sql = require('enmap-sqlite');
const config = require('../config').prefix;

exports.setguild = new enmap({provider: new sql({name: "guilds"})});
exports.pguild = new enmap({provider: new sql({name: "pointguild"})});
exports.userprof = new enmap({provider: new sql({name: "user"})});
exports.feed = new enmap({provider: new sql({name: "rssfeed"})});

const setguild = this.setguild;
const userprof = this.userprof;

class util {
  static add(db, newprop, value){
    db.keyArray().forEach(x => db.setProp(x, newprop, value))
  }
  static newGuild(key){
    setguild.set(key, {
      prefix: config
    });
  }
  static newUser(key){
    userprof.set(key, {
      tag: key,
      rep: 0,
      level: 0,
      xp: 0,
      money: 0,
    });
  }
}
exports.util = util;