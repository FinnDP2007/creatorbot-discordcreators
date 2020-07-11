const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    var helpEmbed = new discord.MessageEmbed()
    .setTitle('🧭 Help 🧭')
    .setDescription("**Algemeen**\n!help - zie een overzicht van alle commands\n!hallo - Hallo!\n!serverinfo - zie de info over de server\n!botinfo - bekijk info over de Creator Bot\n!infoir - zie de invites rewards\n!infopr - bekijk de prijzen\n!infotr - krijg een overzicht van de ticket regels")
    .setColor("#78A2D2")

    .setThumbnail('https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand')
    .setTimestamp()
    .setFooter('Discord Creators', 'https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand');

return message.channel.send(helpEmbed);

}

module.exports.help = {
    name:("help")
}