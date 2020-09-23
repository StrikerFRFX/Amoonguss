const { Command } = require('discord-akairo');

class MuteCommand extends Command {
    constructor() {
        super('mute', {
            category: 'general',
            aliases: ['mute', 'm'],
            typing: true,
            ownerOnly: true
        });
    }

    async exec(msg) {
        msg.member.voice.channel.members.each(user => {
            msg.guild.member(user).voice.setMute(true)
        })
    }
}

module.exports = MuteCommand;
