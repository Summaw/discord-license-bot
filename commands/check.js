const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: 'check',
        description: 'Check license to see if its a valid license',
        usage: `$check`,
    },
    async run(bot, message, args) {
        const response = await fetch(`http://localhost:2400/api/check?key=${args[0]}`)
        if (response.ok) {
            const successfulEmbed = new MessageEmbed()
                .setColor(0x00FF00)
                .setTitle('Check Key Command')
                .setDescription('Key is valid!');
            message.channel.send({ embeds: [successfulEmbed] });
        } else {
            const invalidEmbed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('Check Key Command')
                .setDescription('Key is invalid!');
            message.channel.send({ embeds: [invalidEmbed] });
        }
    }
}
