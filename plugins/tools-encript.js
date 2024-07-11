import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix, command }) {
  if (!text) throw `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *Debe proporcionar un texto para encriptar*\n\n📝 Use el comando de la siguiente manera: *${usedPrefix + command} texto*\n[ 💡 ] Ejemplo: *${usedPrefix + command} hola*`

  let encryptedText = createHash('md5').update(text).digest('hex')

  m.reply(`
*🔒 Texto Encriptado:*
${encryptedText}
`.trim())
}

handler.help = ['encript'].map(v => v + ' <texto>')
handler.tags = ['tools']
handler.command = ['encript']

export default handler