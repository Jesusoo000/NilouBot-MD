import fetch from 'node-fetch';

let handler = async (m, { args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, 'Ingrese un término de búsqueda para YouTube.', m);
  }

  let query = args.join(' ');
  let url = `http://192.101.68.21:2070/youtube/videos?q=${encodeURIComponent(query)}`;

  try {
    let response = await fetch(url);
    let results = await response.json();

    if (results.length === 0) {
      return conn.reply(m.chat, 'No se encontraron videos para la búsqueda proporcionada.', m);
    }

    let video = results[0];
    let message = `*Resultados de YouTube*\n\n`;
    message += `❥︎ *Título*: ${video.title}\n`;
    message += `❥︎ *Autor*: ${video.author}\n`;
    message += `❥︎ *Duración*: ${video.duration}\n`;
    message += `❥︎ *Vistas*: ${video.views}\n`;
    message += `❥︎ *Publicado*: ${video.uploaded}\n`;
    message += `❥︎ *Enlace*: ${video.link}\n\n`;
    message += `> 🚩 Comando y API creados por: https://www.github.com/matias-crypto`;

    await conn.reply(m.chat, message, m);
  } catch (error) {
    console.error('Error fetching data from YouTube:', error);
    await conn.reply(m.chat, 'Hubo un error al buscar el video en YouTube.', m);
  }
};

handler.help = ['yts <término de búsqueda>'];
handler.command = /^(yal)$/i;
handler.register = true;

export default handler;