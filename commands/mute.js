const { Command } = require('discord-akairo');
const admins = ['558694503964475430', '215509157837537280', '254707488744538113'];

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

class MuteCommand extends Command {
    constructor() {
        super('mute', {
            category: 'general',
            aliases: ['mute', 'm'],
            typing: true
        });
    }

    async exec(msg) {
        if (admins.includes(msg.member.id)) {
            msg.member.voice.channel.members.each(async user => {
                msg.guild.member(user).voice.setMute(true)
                await sleep(200)
            })
        }
    }
}

module.exports = MuteCommand;