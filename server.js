//  Test OpenShift sample Node application
var TeleBot = require('telebot');
var bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);
bot.on('text', (msg) => msg.reply.text(msg.text));
bot.start();
