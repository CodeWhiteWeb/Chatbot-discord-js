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
if (message.channel.id == process.env.channel) {
if (message.author.bot) return;
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`http://api.brainshop.ai/get?bid=164757&key=ajEOfoBjQ7pjKAVM&uid=1&msg=${encodeURIComponent(message.content)}`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
})

client.login(process.env.token); // login
/* It will help me a lot if u give credits to Me(owner)*/
/* better version :- https://dsc.gg/chatari */