const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    var gcEmbed = new discord.MessageEmbed()
    .setTitle('🎉 Giveaway Creator Bot 🎉')
    .setDescription("Type g?help om een overzicht te krijgen van alle commands\n \n**Botinfo**\nPubliekelijk op: 15/07/2020 BRUSSELS:12:00\nServers: ±1\n \nOm een support rol te krijgen klik dan op de emoji hieronder!")
    .setColor("#78A2D2")

    .setTimestamp()
    .setFooter('Giveaway Creator', 'https://i.imgur.com/5IbmU3W_d.webp?maxwidth=728&fidelity=grand');

return message.channel.send(gcEmbed);

}

module.exports.help = {
    name:("infogc")
}