const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'help',
        description: 'Displays the list of help commands',
        usage: `$help`,
    },
    async run(bot, message, args) {
            const helpEmbed = new MessageEmbed()
            .setTitle('License Management Bot')
            .setColor(0x00FF00)
            .setThumbnail('https://cdn.discordapp.com/attachments/977781100514508800/1012167777248870410/108118445_105980337853286_29859195312188809_n.jpg')
            .setDescription('License Management Commands')
            .addField('$help','Shows All Available Commands')
            .addField('$check','`$check <key>` Searches the database for the provided license.')
            .addField('$keyinfo','`$keyinfo <key>` Searches the database for the license provided and returns the binded user.')
            .addField('$generate','`$generate <length>` Generates a key for a user to claim')
            .addField('$redeem', '`$redeem <key>` gives you access to the subscription related to your key')
            .setFooter('License Management Bot | Made By Summaw')
            message.channel.send({ embeds: [helpEmbed] });
    }
}
