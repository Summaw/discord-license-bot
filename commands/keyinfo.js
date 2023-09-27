const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const config = require('../config.json')

module.exports = {
    config: {
        name: 'keyinfo',
        description: 'Check license to see the user that has claimed it.',
        usage: `$keyinfo`,
    },
    async run(bot, message, args) {
        if (message.member.roles.cache.some(role => role.name === 'Owner')) {
        const response = await fetch(`http://localhost:2400/api/userInfo?key=${args[0]}`)
        var obj =  await response.json();
            if (response.ok) {
            const successfulEmbed = new MessageEmbed()
                .setColor(0x00FF00)
                .setTitle('User info command')
                .setDescription(`**Key information:**\n **License:**\n> ${obj.key}\n **Username:**\n> ${obj.user}\n **User Id:**\n> ${obj.userid}\n **ExpireTime:**\n> ${obj.expiretime}`);
            message.channel.send({ embeds: [successfulEmbed] });
            }
        } else {
            const invalidEmbed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('**You are not an admin!**')
                .setDescription('You need Administrator to access this !');
            message.channel.send({ embeds: [invalidEmbed] });
        }
    }
}
