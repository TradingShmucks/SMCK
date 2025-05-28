import express from 'express';
const app = express();
app.get('/', (_, res) => res.send('🤖 ShmuckBot is alive!'));
app.listen(3000, () => console.log('✅ Express ping server running on port 3000'));
