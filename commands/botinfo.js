const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    var botinfoEmbed = new discord.MessageEmbed()
    .setTitle('🤖 Bot Info 🤖')
    .setDescription("Bekijk hier alle bot info")
    .setColor("#78A2D2")
    .addField("Bot naam", client.user.username)
    .addField("Invite", "SOON")
    .setTimestamp()
    .setFooter('Discord Creators', 'https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand');

return message.channel.send(botinfoEmbed);

}

module.exports.help = {
    name:("botinfo")
}