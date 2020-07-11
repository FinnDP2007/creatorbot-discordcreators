const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
var trEmbed = new discord.MessageEmbed()
.setTitle("🎫 Ticket Regels 🎫")
.setDescription("-Blijf actief reageren, zodat we er snel door kunnen\n-Niet onnodig taggen\n-Je mag maar 1 ticket hebben openstaan\n-Alleen staff mag een ticket sluiten\n-Alle regels van de server gelden ook in tickets\n \nWanneer je deze regels niet naleeft dan kan je ticket gesloten worden of je krijgt een mute/kick/ban/...\nDe regels kunnen op elk moment veranderd worden!")
.setColor("#78A2D2")

.setThumbnail('https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand')
.setTimestamp()
.setFooter('Discord Creators', 'https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand');

return message.channel.send(trEmbed);

}

module.exports.help = {
    name:("infotr")
}