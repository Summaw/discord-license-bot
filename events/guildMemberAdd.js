module.exports = {
    name: 'guildMemberAdd',
    execute(member, bot) {
        console.log('User ' + member.user.tag + ' has joined the server!');

        member.guild.channels.cache.find(c => c.name === "welcome").send('Welcome '+ member.user.username)
    }
}