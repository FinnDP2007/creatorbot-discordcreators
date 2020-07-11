const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
 
const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});

client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get("723617443976839199")
    if(!role) return;

    member.roles.add(role);

    var channel = memver.guild.channel.cache.get("723617444530225221")

    if(!channel) return;

    channel.send(`Welkom bij de server ${member} 🎉🎉!`)
})

client.login(process.env.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("in development", { type: "PLAYING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");

    if(!message.content.startWith(prefix)) return;
     
    var command = messageArray[0];



    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);

});