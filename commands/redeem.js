const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const config = require('../config.json')

module.exports = {
    config: {
        name: 'redeem',
        description: 'Redeem a key to gain access to the proper channel.',
        usage: `$redeem`,
    },
    async run(bot, message, args) {
            const user = message.author.username;
            const dis = message.author.discriminator;
            const userid = message.author.id;
            const response = await fetch(`http://localhost:2400/api/addUser?key=${args[0]}&user=${user}${dis}&userid=${userid}`)
            if (response.ok) {
                let server = bot.guilds.cache.get(config['guildId']);
                let player = await server.members.fetch(userid);
                player.roles.add(config['customerRoleId']);
                const successfulEmbed = new MessageEmbed()
                    .setColor(0x00FF00)
                    .setTitle('Successfully used redeem command!')
                    .setDescription(`**Status:**\n> Successfully Claimed Key\n **Binded User:**\n> ${user}#${dis}\n **User ID:**\n> ${userid}`);
                message.channel.send({ embeds: [successfulEmbed] });
        } else {
            const invalidEmbed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('Failed to use redeem command!')
                .setDescription('Your License is not valid!');
            message.channel.send({ embeds: [invalidEmbed] });
        }
    }
}
