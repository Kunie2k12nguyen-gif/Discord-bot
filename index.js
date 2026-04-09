const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const TOKEN = process.env.TOKEN;

client.on("ready", () => {
  console.log("Bot online!");
});

client.on("messageCreate", (message) => {
  if (message.content === "!test") {
    message.reply("Bot chạy rồi!");
  }
});

client.login(TOKEN);
