![image](https://github.com/Summaw/discord-license-bot/assets/98126132/bc82063e-b76c-4b67-9fb3-0700a62aea39)
                                                       
                                                        &
![image](https://github.com/Summaw/discord-license-bot/assets/98126132/3f779c7b-126a-4f18-b1ec-3aac1b2b3cef)


# What you need to add in Config.json
- Discord bot token | https://discord.com/developers/applications
- Your discord guildId
- Your discord clientId(Bot ID)
- A customer role (create a customer role)
- A Owner role (name must be Owner)
- A MongoDB Account and database.
- Once you have setup the mongo db properly naviagte to server.js and input your connection uri here **const  dbURI = "HERE"**

# Requirements | Needed packages
- express | npm install express
- mongoose | npm install mongoose
- moment | npm install moment
- discord.js | npm install discord.js
- license-key-generator | npm install license-key-generator
- 
```javascript
//You can make changes to the options object for specific key requirements
//See here https://www.npmjs.com/package/license-key-generator for more options
const options = {
    type: "random", // default "random"
    length: 16, // default 16
    group: 4, // default 4
    split: "-", // default "-"
    splitStatus: true // default true
}
```

# Start up
- Start server.bat
- Start bot.bat
- Done
- Make sure you run server.bat before you try to run commands for the bot in the server.


