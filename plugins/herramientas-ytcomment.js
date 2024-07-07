const handler = async (m, { conn, text }) => {
  if (!text.includes('|')) throw 'Debes incluir el formato correcto. Ejemplo: ytcomment texto | nombre';
  
  const [comment, username] = text.split('|').map(part => part.trim());
  
  if (!comment || !username) throw 'Debes proporcionar tanto el comentario como el nombre separados por "|"';
  
  conn.sendFile(
    m.chat,
    global.API('https://some-random-api.com', '/canvas/youtube-comment', {
      avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
      comment: comment,
      username: username,
    }),
    'error.png',
    'Tu comentario generado',
    m
  );
};
handler.help = ['ytcomment <comment> | <username>'];
handler.tags = ['maker'];
handler.command = /^(ytcomment)$/i;
export default handler;