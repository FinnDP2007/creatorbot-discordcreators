const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    var irEmbed = new discord.MessageEmbed()
    .setTitle('🏆 Invite Rewards 🏆')
    .setThumbnail(this.client.user.displayAvatarURL({ format: "png" }))
    .setDescription("2 invites ➜ €1000 economy money \n3 invites ➜ 1x Simpele Logo \n6 invites ➜ 1x Normale Discord Server \n12 invites ➜ 1x Uitgebreide Discord Server \n24 invites ➜ 1x Normaal Discord Bot (volledig custom) \n50 invites ➜ 1x Pakket #SOON")
    .setColor("#78A2D2")

    .setThumbnail('https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand')
    .setTimestamp()
    .setFooter('Discord Creators', 'https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand');

return message.channel.send(irEmbed);

}

module.exports.help = {
    name:("infoir")
}