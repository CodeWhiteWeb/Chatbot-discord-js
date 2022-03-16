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
client.login(process.env.token);
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
let uid = message.author.id
let msg = message.content
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`http://api.brainshop.ai/get?bid=${bid}&key=${key}&uid=${uid}&msg=${msg}`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.cnt}`);
    });
      message.channel.stopTyping();
}
});

/* It will help me a lot if u give credits to Me(owner)*/
/* better version :- https://dsc.gg/chatari */