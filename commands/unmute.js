const { Command } = require('discord-akairo');
const admins = ['558694503964475430', '215509157837537280', '254707488744538113'];

class UnmuteCommand extends Command {
    constructor() {
        super('unmute', {
            category: 'general',
            aliases: ['unmute', 'um'],
            typing: true
        });
    }

    async exec(msg) {
        if (admins.includes(msg.member.id)) {
            msg.member.voice.channel.members.each(user => {
                msg.guild.member(user).voice.setMute(false)
            })
        }
    }
}

module.exports = UnmuteCommand;