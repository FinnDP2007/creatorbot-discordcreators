const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var serverinfoEmbed = new discord.MessageEmbed()
    .setTitle("📊 Server Info 📊")
    .setDescription("Bekijk hier de server informatie.")
    .setColor("#78A2D2")
    .addField("Je bent deze server gejoind op", message.member.joinedAt)
    .addField("Totaal memebers", message.guild.memberCount)

    .setFooter('Discord Creators', 'https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand');

return message.channel.send(serverinfoEmbed);


}

module.exports.help = {
    name:("serverinfo")
}