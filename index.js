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
      await bot.sendPhoto(msg.chat.id, "./public/message.jpg", {caption: "*Почему ты так мало продаешь?* \n\nПочти из каждого угла я слышу, как сотни селлеров сливают свои товары *за бесценок*, просто потому, что они *не знают как правильно преподносить свой продукт\\.*\n\nА ведь ключ к решению такой проблемы прост — ||внешняя рекламa\\.||\n\n*Ты только задумайся: всего один рилс, может принести тысячи продаж, хотя его стоимость будет не больше 3 000 рублей\\. А что с твоей прибылью? Посчитай сам\\.*\n\nКак бы прекрасно не был настроен твой рекламный кабинет или подобрана инфографика, все это нечто, по сравнению с возможностями *настоящей социальной рекламы\\.*\n\nЯ являюсь специалистом в этой сфере и знаю о *всё* внешней рекламе маркетплейсов\\. Недавно я начал давать *бесплатные [личные консультации](https://clck.ru/3BX2nJ)*, которые уже принесли своим владельцам миллионы прибыли\\.", parse_mode: "MarkdownV2", reply_markup: {inline_keyboard: [[{ text: 'Написать (47/50)', url: "https://t.me/RyslanNovikov" }], [{ text: 'Канал', url: "https://t.me/marketPati" }], [{ text: 'Отзывы', url: "https://t.me/OtzivRuslanNovikov" }]]}})
    
  }});

  
}

main();