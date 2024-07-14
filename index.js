import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";


dotenv.config();

const bot = new TelegramBot(process.env.API_KEY_BOT, {
  polling: {
    interval: 200,
    autoStart: true,
  },
});

async function main() {
  bot.on("polling_error", (err) => console.log(err.data.error.message));

  bot.on("text", async (msg) => {
    if (msg.text === "/start") {
      await bot.sendMessage(msg.chat.id, `Это первое сообщение`);
      await bot.sendPhoto(msg.chat.id, "./public/message.jpg", {caption: "*You are welcome!*\nWe would like to introduce you our new", parse_mode: 'Markdown' })
    }
  });

  
}

main();