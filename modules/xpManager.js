import fs from 'fs';

const XP_PATH = process.env.XP_STORAGE_PATH;

export function addXP(userId, amount) {
  const db = load();
  db[userId] = (db[userId] || 0) + amount;
  save(db);
  return db[userId];
}

function load() {
  try {
    return JSON.parse(fs.readFileSync(XP_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function save(data) {
  fs.writeFileSync(XP_PATH, JSON.stringify(data, null, 2));
}
