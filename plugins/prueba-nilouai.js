import fs from 'fs';
import path from 'path';

const conversations = {};

const handler = async (m, {conn, text, usedPrefix, command}) => {
    if (usedPrefix.toLowerCase() === 'a') return;
    if (!text) return conn.reply(m.chat, `*🤍 Ingrese su petición*\n*🪼 Ejemplo de uso:* ${usedPrefix + command} Hola`, m);

    const chatId = m.chat;
    const normalizedText = text.toLowerCase();

    const responsesPath = path.join(__dirname, 'responses.json');
    const responses = JSON.parse(fs.readFileSync(responsesPath, 'utf-8'));

    let response;
    if (normalizedText.includes('hoy')) {
        response = conversations[chatId]?.today || "No hemos hablado de nada hoy.";
    } else if (normalizedText.includes('ayer')) {
        response = conversations[chatId]?.yesterday || "No hemos hablado de nada ayer.";
    } else {
        const foundKey = Object.keys(responses).find(key => normalizedText.includes(key));
        response = foundKey ? responses[foundKey] : "No estoy seguro de cómo responder a eso.";
    }

    if (!conversations[chatId]) conversations[chatId] = { today: [], yesterday: [] };
    conversations[chatId].today.push({ question: text, answer: response });

    await conn.reply(m.chat, response, m);
};

handler.help = ['niloubot <texto>'];
handler.tags = ['ai'];
handler.register = true;
handler.estrellas = 5;
handler.command = ['niloubot'];

export default handler;