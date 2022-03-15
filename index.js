const Discord = require('discord.js');
const fetch = require("node-fetch");
const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res) => res.send('Created By CodeWhiteWeb'))

app.listen(port, () =>
    console.log(`Your app is listening to http://localhost:${port}`)
)

const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Created By CodeWhiteWeb`);
});
client.on("message", async message => {
if (message.channel.name == process.env.channel) {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
    let msg = message.content
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${msg}`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});

/* It will help me a lot if u give credits to Me(owner)*/
/* better version :- https://dsc.gg/chatari */