const TelegramBot = require('node-telegram-bot-api');

const token = '6250287816:AAHAlTac4TNrvm05O7YH87kDo9gl1YoetjA';
const webAppUrl = 'https://peaceful-axolotl-1e9281.netlify.app'

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/keyboard') {
        await bot.sendMessage(chatId, 'Заполните форму', {
            reply_markup: {
                keyboard: [
                    [{text: 'Заполнить Форму', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }

    if (text === '/inline') {
        await bot.sendMessage(chatId, 'Заполните форму', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Заполнить Форму', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }

    bot.sendMessage(chatId, 'Вот так вот' + ' ' + msg.chat.first_name);
});
