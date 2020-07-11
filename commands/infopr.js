const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
var prEmbed = new discord.MessageEmbed()
.setTitle("💵 Prijzen 💵")
.setDescription("𝘿𝙄𝙎𝘾𝙊𝙍𝘿 𝙎𝙀𝙍𝙑𝙀𝙍𝙎\n━━━━━━━━━\nNormale Discord Server: €1,50\nUitgebreide Discord Server: €2,50\n \n𝘿𝙄𝙎𝘾𝙊𝙍𝘿 𝘽𝙊𝙏𝙎\n━━━━━━━━━\n#soon\n \n𝙇𝙊𝙂𝙊\n━━━━━━━━━\n#soon\n \n✓ Wij accepteren alleen Paypal!")
.setColor("#78A2D2")

.setTimestamp()
.setFooter('Discord Creators', 'https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand');

return message.channel.send(prEmbed);

}

module.exports.help = {
    name:("infopr")
}