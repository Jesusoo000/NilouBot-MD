import yts from 'yt-search';
import ytdl from 'ytdl-core';

const handler = async (m, { conn, text }) => {
  if (!text) return m.reply('✧ Ingresa el nombre de la canción que quieras descargar.');

  try {
    const searchResults = await yts(text);
    const videos = searchResults.all.filter((v) => v.type === 'video');

    if (videos.length === 0) return m.reply('✧ No se encontraron resultados para tu búsqueda.');

    const video = videos[0];
    const videoUrl = 'https://youtu.be/' + video.videoId;
    const info = await ytdl.getInfo(videoUrl);
    const format = ytdl.chooseFormat(info.formats, { filter: 'audioonly' });

    if (!format.contentLength) return m.reply('✧ No se pudo obtener el tamaño del video.');

    const sizeInBytes = parseInt(format.contentLength, 10);
    const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);

    if (sizeInMB > 50) { 
      return m.reply(`✧ El video es demasiado grande (${sizeInMB} MB). Por favor, elige un video más pequeño.`);
    }

    m.reply(`✧ Encontrado: ${video.title}\n✧ Duración: ${video.timestamp}\n✧ Tamaño estimado: ${sizeInMB} MB\n✧ Descargando...`);

    conn.sendMessage(m.chat, {
      audio: { url: format.url },
      mimetype: 'audio/mpeg',
      fileName: `${video.title}.mp3`
    }, { quoted: m });

  } catch (e) {
    console.log(e);
    m.reply('✧ Ocurrió un error inesperado.');
  }
};

handler.command = ['yttt', 'ytyt'];
handler.register = true;

export default handler;```