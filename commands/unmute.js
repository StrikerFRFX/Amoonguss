const { Command } = require('discord-akairo');

class UnmuteCommand extends Command {
    constructor() {
        super('unmute', {
            category: 'general',
            aliases: ['unmute', 'um'],
            typing: true,
            ownerOnly: true
        });
    }

    async exec(msg) {
        msg.member.voice.channel.members.each(user => {
            msg.guild.member(user).voice.unmute()
        })
    }
}

module.exports = UnmuteCommand;
