const express = require("express")
const mongoose = require("mongoose")
const app = express()
const config = require('./config.json')
const authRoute = require('./routes/auth')
const User = require("./models/users");
const moment = require('moment');
const { prefix, token } = require("./config.json");
const  dbURI = "" //your collection url here! register on mongodb.com and make a free db connect your application and paste url with your username and password inside the params in the url
app.use(express.json())
app.use('/api', authRoute)
const { Client, Intents, Collection } = require('discord.js');
const bot = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ] 
});

bot.login(token);

moment.suppressDeprecationWarnings = true;

var dateInPast = function(firstDate, secondDate) {
    if (firstDate.getTime() < secondDate.getTime()) {
      return true;
    }
  
    return false;
  };

setInterval(async function() {
    const db = await User.find();
    for (let index = 0; index < db.length; index++) {
        const element = db[index];
       var temp = moment().format();
        if(element.expiretime && dateInPast(new Date( moment(element.expiretime).valueOf()),new Date()) ){
           let server = bot.guilds.cache.get(config['guildId']);
           console.log(server)
           console.log(element)
           console.log(element.userid)
           if(element.userid){
           let player = await server.members.fetch(element.userid);
           player.roles.remove(config['customerRoleId']);
           }
        }
    
    }
}, 5 * 60 * 1000); // 60 * 1000 milsec

mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

app.listen(2400, () => {console.log("Server started: 2400")})