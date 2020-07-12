const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    var paEmbed = new discord.MessageEmbed()
    .setTitle('🤝 Hoe word je partner 🤝')
    .setDescription("Ten eerste moet je aan de eisen voldoen die hieronder zijn opgesomd.\nAls je aan die eisen voldoet maak je een ticket aan en daar helpen wij jou verder\n \n**Eisen:**\n-Discord server met +15 leden (exclusief bot)\n-Net reclame bericht (met permanente link)\n-Geen discord server met dezelfde aanbiedingen als 𝘿𝙄𝙎𝘾𝙊𝙍𝘿 𝘾𝙍𝙀𝘼𝙏𝙊𝙍𝙎\n-Een actieve Discord server")
    .setColor("#78A2D2")

    .setThumbnail('https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand')
    .setTimestamp()
    .setFooter('Discord Creators', 'https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand');

return message.channel.send(paEmbed);

}

module.exports.help = {
    name:("infopa")
}