import { Telegraf } from 'telegraf';
import { getEntryNowSignal } from '../ai/shmuckbro.js';

export function startTelegramBot() {
  const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

  bot.start((ctx) => ctx.reply('Welcome to ShmuckBot 📈'));

  bot.command('entry', async (ctx) => {
    const signal = await getEntryNowSignal("BTC/USDT");
    ctx.reply(`🚀 ENTRY NOW SIGNAL:
${signal}`);
  });

  bot.launch();
  console.log('✅ Telegram bot is running');
}
