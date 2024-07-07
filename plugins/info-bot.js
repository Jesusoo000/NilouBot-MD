import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🤍 ¡Hola! Soy NilouBot-MD, en que puedo ayudarte hoy?\n\n✰ Usa *!menu* para ver mis comandos.`, m, rcanal, )
}
if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so* 🧀`, m, rcanal, )
}
if (/^sexo$/i.test(m.text)) {
conn.reply(m.chat, `*𝐩𝐞𝐫𝐯𝐞𝐫𝐭𝐢𝐝𝐨* 🫣`, m, rcanal, )
}
if (/^a$/i.test(m.text)) {
conn.reply(m.chat, `*𝐫𝐫𝐨𝐜𝐢𝐭𝐨* 🍚`, m, rcanal, )
}
if (/^bug$/i.test(m.text)) {
conn.reply(m.chat, `*𝐭𝐮 𝐦𝐚𝐦𝐚* 😹`, m, rcanal, )
}
if (/^pene$/i.test(m.text)) {
conn.reply(m.chat, `*𝐜𝐨𝐦𝐞𝐬* 😹`, m, rcanal, )
}
return !0;
};
export default handler;