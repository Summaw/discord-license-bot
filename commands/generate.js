const Generator = require("license-key-generator");
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const config = require('../config.json')

const options = {
    type: "random", // default "random"
    length: 16, // default 16
    group: 4, // default 4
    split: "-", // default "-"
    splitStatus: true // default true
}

module.exports = {
    config: {
        name: 'generate',
        description: 'generate licenses for users',
        usage: `$generate`,
    },
    async run(bot, message, args) {
        if (message.member.roles.cache.some(role => role.name === 'Owner')) {
            const code = new Generator(options);
        code.get( async (error, code) => {
            const response = await fetch(`http://localhost:2400/api/addKey?key=${code}&type=${args[0]}`)
            if (response.ok) {
                const generatorEmbed = new MessageEmbed()
                .setColor(0x00FF00)
                .setTitle('Successfully Generated A License')
                .setDescription(`> ${code}`)
                message.channel.send({ embeds: [generatorEmbed] });
            } else {
            const FailedEmbed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('Failed to Generate license!')
                .setDescription(`> ${error}`)
            message.channel.send({ embeds: [FailedEmbed] });
            }
        }) 
        } else {
            const notadminEmbed = new MessageEmbed()
                .setColor(0xff0000)
                .setTitle('You are not an admin.')
                .setDescription(`> Sorry, you don't have permission to use this command!`)
            message.channel.send({ embeds: [notadminEmbed] });
        }
    }
}
