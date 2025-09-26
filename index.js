const TelegramBot = require('node-telegram-bot-api');

const token = "8139910653:AAGZCGorGIeDpApHBabm4oAZ0F9eDtskCUU"; // التوكن تبعك

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "أهلا 👋 هذا البوت شغال!");
});

bot.on('message', (msg) => {
  console.log("رسالة جديدة:", msg.text);
});
