import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen3;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, estrellas, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
 m.react('🧃')
const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `*♡･ﾟ:*｡.:*･ﾟﾟ･*:.｡*:ﾟ･♡

“Hola *Nosw*, mi nombre es *NilouBot*, Cómo se encuentra el día de hoy?”

*╭──⬣「 𝐈𝐧𝐟𝐨 𝐔𝐬𝐞𝐫 」⬣*
*│* ✰ 🌸 *TEAM* https://chat.whatsapp.com/DFpCyH1mOJM9TxbCdYTwvv
*│* ✰ 💌 *𝐂𝐥𝐢𝐞𝐧𝐭𝐞:* %taguser
*│* ✰ ⚡️ *𝐄𝐱𝐩:* ${exp}
*│* ✰ 🌟 *𝐄𝐬𝐭𝐫𝐞𝐥𝐥𝐚𝐬:* 30
*│* ✰ 📌 *𝐍𝐢𝐯𝐞𝐥:* 0
*│* ✰ 🪷 *𝑹𝒂𝒏𝒈𝒐:* *𝗡𝗼𝘃𝗮𝘁𝗼 V* 🍷
*╰──⬣*

*╭──⬣「 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕 」⬣*
*│* ✰ 💥 *𝑩𝒐𝒕:* Nilou Bot - MD 
*│* ✰ ✨ *𝑴𝒐𝒅𝒐* Público
*│* ✰ 🌆 *𝑩𝒂𝒊𝒍𝒆𝒚𝒔:* Multi Device
*│* ✰ ⏰ *𝑻𝒊𝒆𝒎𝒑𝒐 Activo:* 00:03:11:53
*│* ✰ 🌹 *𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔:* 
*╰──⬣*

‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*♡･ﾟ:*｡.:*･ﾟﾟ･*:.｡*:ﾟ･♡

	*L I S T  -  C O M M A N D S* 

*╭━━━━━━ • ✿「 𝗜𝗻𝗳𝗼 📌 」✿ • ━━━━━━╮*
*│* ਊ➻ .flarex
*│* ਊ➻ .afk [alasan]
*│* ਊ➻ .botreglas
*│* ਊ➻ .editartext <nuevo texto>
*│* ਊ➻ .grupos
*│* ਊ➻ .hornymenu
*│* ਊ➻ .menu
*│* ਊ➻ .menu2
*│* ਊ➻ .runtime
*│* ਊ➻ .script
*│* ਊ➻ .blocklist
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗕𝘂𝘀𝗾𝘂𝗲𝗱𝗮𝘀 💫 」✿ • ━━━━━━╮*
*│* ਊ➻ .tiktoksearch <txt>
*│* ਊ➻ .ytsearch
*│* ਊ➻ .gimage <query>
*│* ਊ➻ .imagen <query>
*│* ਊ➻ .pinterest
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗝𝘂𝗲𝗴𝗼𝘀 🎮 」✿ • ━━━━━━╮*
*│* ਊ➻ .acertijo
*│* ਊ➻ .gay <@tag> | <nombre>
*│* ਊ➻ .lesbiana <@tag> | <nombre>
*│* ਊ➻ .pajero <@tag> | <nombre>
*│* ਊ➻ .pajera <@tag> | <nombre>
*│* ਊ➻ .puto <@tag> | <nombre>
*│* ਊ➻ .puta <@tag> | <nombre>
*│* ਊ➻ .manco <@tag> | <nombre>
*│* ਊ➻ .manca <@tag> | <nombre>
*│* ਊ➻ .rata <@tag> | <nombre>
*│* ਊ➻ .prostituta <@tag> | <nombre>
*│* ਊ➻ .prostituto <@tag> | <nombre>
*│* ਊ➻ .nombreninja *<texto>*
*│* ਊ➻ .personalidad
*│* ਊ➻ .piropo
*│* ਊ➻ .pregunta
*│* ਊ➻ .reto
*│* ਊ➻ .ruleta *<cantidad> <color>*
*│* ਊ➻ .ship
*│* ਊ➻ .love
*│* ਊ➻ .top *<texto>*
*│* ਊ➻ .zodiac *2002 02 25*
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗦𝘂𝗯 𝗕𝗼𝘁𝘀 🤖 」✿ • ━━━━━━╮*
*│* ਊ➻ .code
*│* ਊ➻ .deletebot
*│* ਊ➻ .stop
*│* ਊ➻ .byebot
*│* ਊ➻ .bots
*│* ਊ➻ .serbot
*│* ਊ➻ .token
*│* ਊ➻ .gettoken
*│* ਊ➻ .serbottoken
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗥𝗣𝗚 🌠 」✿ • ━━━━━━╮*
*│* ਊ➻ .addprem [@user] <days>
*│* ਊ➻ .slot
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗼 ✍🏻 」✿ • ━━━━━━╮*
*│* ਊ➻ .profile
*│* ਊ➻ .unreg
*│* ਊ➻ .reg
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗘𝘅𝗽 💥 」✿ • ━━━━━━╮*
*│* ਊ➻ .bal
*│* ਊ➻ .daily
*│* ਊ➻ .Buy
*│* ਊ➻ .Buyall
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗦𝘁𝗶𝗰𝗸𝗲𝗿𝘀 ✨ 」✿ • ━━━━━━╮*
*│* ਊ➻ .stiker <img>
*│* ਊ➻ .sticker <url>
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 💌 」✿ • ━━━━━━╮*
*│* ਊ➻ .delvn <text>
*│* ਊ➻ .delmsg <text>
*│* ਊ➻ .delvideo <text>
*│* ਊ➻ .delaudio <text>
*│* ਊ➻ .delimg <text>
*│* ਊ➻ .delsticker <text>
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗙𝗶𝘅𝗺𝘀𝗴𝗲𝘀𝗽𝗲𝗿𝗮 🌹 」✿ • ━━━━━━╮*
*│* ਊ➻ .dsowner
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗚𝗿𝘂𝗽𝗼𝘀 👥 」✿ • ━━━━━━╮*
*│* ਊ➻ .group abrir / cerrar
*│* ਊ➻ .delete
*│* ਊ➻ .encuesta <text|text2>
*│* ਊ➻ .infogrupo
*│* ਊ➻ .kick
*│* ਊ➻ .tagall *<mesaje>*
*│* ਊ➻ .invocar *<mesaje>*
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗢𝗻 ❎ / 𝗢𝗳𝗳 ✅ 」✿ • ━━━━━━╮*
*│* ਊ➻ .enable <option>
*│* ਊ➻ .disable <option>
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝘀 📥 」✿ • ━━━━━━╮*
*│* ਊ➻ .fb
*│* ਊ➻ .gitclone *<url git>*
*│* ਊ➻ .gimage <query>
*│* ਊ➻ .imagen <query>
*│* ਊ➻ .mediafire <url>
*│* ਊ➻ .apkmod
*│* ਊ➻ .play3
*│* ਊ➻ .play4
*│* ਊ➻ .spotify
*│* ਊ➻ .tiktok
*│* ਊ➻ Audio
*│* ਊ➻ .play *<búsqueda>*
*│* ਊ➻ .play2 *<busqueda>*
*│* ਊ➻ Video
*│* ਊ➻ .ytmp4 *<url youtube>*
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗣𝗹𝗮𝘆 📥 」✿ • ━━━━━━╮*
*│* ਊ➻ .play *<búsqueda>*
*│* ਊ➻ .play2 *<busqueda>*
*│* ਊ➻ Video
*│* ਊ➻ .ytmp4 *<url youtube>*
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗛𝗲𝗿𝗿𝗮𝗺𝗶𝗲𝗻𝘁𝗮𝘀 ⚒️ 」✿ • ━━━━━━╮*
*│* ਊ➻ .toanime
*│* ਊ➻ .tts <lang> <teks>
*│* ਊ➻ .gimage <query>
*│* ਊ➻ .imagen <query>
*│* ਊ➻ .remini
*│* ਊ➻ .hd
*│* ਊ➻ .enhance
*│* ਊ➻ .encript <texto>
*│* ਊ➻ .spamwa <number>|<mesage>|<no of messages>
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 👨🏻‍💻 」✿ • ━━━━━━╮*
*│* ਊ➻ .creador
*│* ਊ➻ .owner
*│* ਊ➻ .ds
*│* ਊ➻ .fixmsgespera
*│* ਊ➻ .ping
*│* ਊ➻ .sistema
*│* ਊ➻ .speed
*│* ਊ➻ .speedtest
*│* ਊ➻ .reportar
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗡𝘀𝗳𝘄 🔞 」✿ • ━━━━━━╮*
*│* ਊ➻ .nsfwloli
*│* ਊ➻ .nsfwfoot
*│* ਊ➻ .nsfwass
*│* ਊ➻ .nsfwbdsm
*│* ਊ➻ .nsfwcum
*│* ਊ➻ .nsfwero
*│* ਊ➻ .nsfwfemdom
*│* ਊ➻ .nsfwfoot
*│* ਊ➻ .nsfwglass
*│* ਊ➻ .nsfworgy
*│* ਊ➻ .yuri
*│* ਊ➻ .yuri2
*│* ਊ➻ .yaoi
*│* ਊ➻ .yaoi2
*│* ਊ➻ .panties
*│* ਊ➻ .tetas
*│* ਊ➻ .booty
*│* ਊ➻ .ecchi
*│* ਊ➻ .furro
*│* ਊ➻ .hentai
*│* ਊ➻ .trapito
*│* ਊ➻ .imagenlesbians
*│* ਊ➻ .pene
*│* ਊ➻ .porno
*│* ਊ➻ .randomxxx
*│* ਊ➻ .pechos
*│* ਊ➻ .r34 <texto>
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 👑 」✿ • ━━━━━━╮*
*│* ਊ➻ .enable <option>
*│* ਊ➻ .disable <option>
*│* ਊ➻ .addprem [@user] <days>
*│* ਊ➻ >
*│* ਊ➻ =>
*│* ਊ➻ .broadcastgroup <teks>
*│* ਊ➻ .bcgc <teks>
*│* ਊ➻ .bcgc2
*│* ਊ➻ .broadcast <teks>
*│* ਊ➻ .bc <teks>
*│* ਊ➻ .cheat
*│* ਊ➻ .cleartmp
*│* ਊ➻ .delprem <@user>
*│* ਊ➻ .dsowner
*│* ਊ➻ $
*│* ਊ➻ .setbotbio <teks>
*│* ਊ➻ .nuevonombre <teks>
*│* ਊ➻ .prefix [prefix]
*│* ਊ➻ .resetprefix
*│* ਊ➻ .restart
*│* ਊ➻ .update
*│* ਊ➻ .actualizar
*│* ਊ➻ >
*│* ਊ➻ =>
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 Staff NilouBot 」✿ • ━━━━━━╮*
*│* ਊ➻ .autoadmin
*│* ਊ➻ .banchat
*│* ਊ➻ .banuser <@tag> <razón>
*│* ਊ➻ .grupocrear <nombre>
*│* ਊ➻ .ip <alamat ip>
*│* ਊ➻ .join
*│* ਊ➻ .nuevogrupo
*│* ਊ➻ .unbanchat
*│* ਊ➻ .unbanuser <@tag>
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗔𝘂𝗱𝗶𝗼𝘀 🔉 」✿ • ━━━━━━╮*
*│* ਊ➻ .bass [vn]
*│* ਊ➻ .blown [vn]
*│* ਊ➻ .deep [vn]
*│* ਊ➻ .earrape [vn]
*│* ਊ➻ .fast [vn]
*│* ਊ➻ .fat [vn]
*│* ਊ➻ .nightcore [vn]
*│* ਊ➻ .reverse [vn]
*│* ਊ➻ .robot [vn]
*│* ਊ➻ .slow [vn]
*│* ਊ➻ .smooth [vn]
*│* ਊ➻ .tupai [vn]
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗔𝗶 🌹 」✿ • ━━━━━━╮*
*│* ਊ➻ .chatgpt <texto>
*│* ਊ➻ .ia <texto>
*│* ਊ➻ .remini
*│* ਊ➻ .hd
*│* ਊ➻ .enhance
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗱𝗼𝗿𝗲𝘀 💠 」✿ • ━━━━━━╮*
*│* ਊ➻ .togifaud
*│* ਊ➻ .toimg
*│* ਊ➻ .tourl
*│* ਊ➻ .tovideo
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 anime 」✿ • ━━━━━━╮*
*│* ਊ➻ .akira
*│* ਊ➻ .akiyama
*│* ਊ➻ .anna
*│* ਊ➻ .asuna
*│* ਊ➻ .ayuzawa
*│* ਊ➻ .boruto
*│* ਊ➻ .chiho
*│* ਊ➻ .chitoge
*│* ਊ➻ .deidara
*│* ਊ➻ .erza
*│* ਊ➻ .elaina
*│* ਊ➻ .eba
*│* ਊ➻ .emilia
*│* ਊ➻ .hestia
*│* ਊ➻ .hinata
*│* ਊ➻ .inori
*│* ਊ➻ .isuzu
*│* ਊ➻ .itachi
*│* ਊ➻ .itori
*│* ਊ➻ .kaga
*│* ਊ➻ .kagura
*│* ਊ➻ .kaori
*│* ਊ➻ .keneki
*│* ਊ➻ .kotori
*│* ਊ➻ .kurumi
*│* ਊ➻ .madara
*│* ਊ➻ .mikasa
*│* ਊ➻ .miku
*│* ਊ➻ .minato
*│* ਊ➻ .naruto
*│* ਊ➻ .nezuko
*│* ਊ➻ .sagiri
*│* ਊ➻ .sasuke
*│* ਊ➻ .sakura
*│* ਊ➻ .cosplay
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 maker 」✿ • ━━━━━━╮*
*│* ਊ➻ .ytcomment <comment> | <username>
*╰━━━━━━》❈《 ━━━━━╯*

*╭━━━━━━ • ✿「 bot 」✿ • ━━━━━━╮*
*│* ਊ➻ .estado
*│* ਊ➻ .status
*╰━━━━━━》❈《 ━━━━━╯*`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.tags = ['main']
handler.help = ['meni']
handler.command = /^(menu2|menuaudios)$/i;
handler.register = true
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}