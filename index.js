const TelegramBot = require('node-telegram-bot-api');

const token = "8139910653:AAGZCGorGIeDpApHBabm4oAZ0F9eDtskCUU"; // مؤقتاً فقط

if (!token) {
  console.error('Missing TELEGRAM_TOKEN');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'أهلاً، البوت شغال ✅');
});

bot.onText(/\/student/, (msg) => {
  bot.sendMessage(msg.chat.id, '📚 ارسل: الاسم | الجامعة | التخصص');
});

bot.onText(/\/employee/, (msg) => {
  bot.sendMessage(msg.chat.id, '👨‍💼 ارسل: الاسم | العمر | التخصص | الوظائف الممكنة');
});

bot.on('message', (msg) => {
  console.log('MSG:', msg.from?.username, msg.text);
});

// خادم HTTP بسيط ليُرضي Render (فتح بورت)
const express = require('express');
const app = express();
app.get('/', (_req, res) => res.send('Bot OK'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('HTTP server on', PORT));
