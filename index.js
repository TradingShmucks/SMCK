import dotenv from 'dotenv';
dotenv.config();

import './express.js';
import { startTelegramBot } from './modules/notifier.js';

startTelegramBot();
