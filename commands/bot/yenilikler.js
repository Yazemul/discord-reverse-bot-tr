const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = class NewsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'yenilikler',
			group: 'bot',
			memberName: 'yenilikler',
			description: 'Bot ile ilgili yeni özellikleri gösterir.',
			guildOnly: false,
			throttling: {
				usages: 1,
				duration: 10
			}
		});
	}

	async run(message) {
		if (message.guild) {
			var embed = new RichEmbed()
			.setAuthor('Reverse Bot | Yenilikler', this.client.user.avatarURL)
			.setDescription(`Tüm komutları görmek için \`${this.client.commandPrefix}yardım\` yazabilirsiniz.`, this.client.user.avatarURL)
			.addField(`Yenilikler | v0.0.1`, stripIndents`
			+ Resimli giriş çıkış mesajı eklendi.
			+ \`espri\` komutu eklendi.
			+ Müzik Komutları Güncellendi.
			+ \`oynat\` komutu düzenlendi.
			+ \`dur\` komutu düzenlendi.
			+ \`geç\` komutu düzenlendi.
			+ \`ses\` komutu eklendi.
			+ \`şarkı-listesi\` komutu eklendi.
			+ Bazı hatalar giderildi.
			`)
			.addField(`Bağlantılar/Linkler`, stripIndents`
			• **Reverse Bot'u** sunucularınıza eklemek isterseniz [bana](https://discordapp.com/oauth2/authorize?client_id=537303372794167306&scope=bot&permissions=805314622) tıklayarak ekleyebilirsiniz.
			• Bir sorun var ise [bana](https://discord.gg/uWabtYM) tıklayarak **Destek Sunucum'a** gelip yardım alabilirsiniz.
			• **Reverse Bot'a** oy vermek için [bana]() tıkla! Reverse Bota oy vermeyi unutmayın !
			• **Reverse Bot'un** sitesine [bana]() tıklayarak bakabilirsiniz.
			`)
			.setColor("RANDOM")
			.setFooter('©' + (new Date()).getFullYear() + ' Reverse Bot', this.client.user.avatarURL)
			.setTimestamp()
			message.channel.send({embed});
		}
	}
};