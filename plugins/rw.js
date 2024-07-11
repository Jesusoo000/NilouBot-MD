import axios from 'axios'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import path from 'path'

global.db = global.db || { data: { users: {} } }

const filePath = path.resolve('./encriptado.txt')

let handler = async function (m, { conn, command, args }) {
  if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = { rw: [], tempAnime: null }

  if (command === 'rw') {
    // Obtener una imagen de anime aleatoria con su descripción
    let { data } = await axios.get('https://abhi-api-bvws.onrender.com/api/anime/astatus')
    let anime = data.data
    let image = anime.images.jpg.image_url
    let title = anime.title
    let description = anime.synopsis

    // Enviar imagen y descripción
    await conn.sendMessage(m.chat, {
      image: { url: image },
      caption: `Título: ${title}\nDescripción: ${description}\n\nResponde con "claim" o "c" para reclamar esta imagen.`,
    }, { quoted: m })

    // Guardar en la base de datos temporalmente
    global.db.data.users[m.sender].tempAnime = { title, description, image }
  }

  if (command === 'claim' || command === 'c') {
    let user = global.db.data.users[m.sender]
    if (!user.tempAnime) throw 'No hay imagen de anime para reclamar. Usa el comando `rw` primero.'

    // Añadir a la lista de personajes reclamados
    user.rw.push(user.tempAnime)

    // Guardar datos encriptados en un archivo
    const encryptedData = `${m.sender}\nTítulo: ${user.tempAnime.title}\nDescripción: ${user.tempAnime.description}\n\n`
    writeFileSync(filePath, existsSync(filePath) ? readFileSync(filePath, 'utf-8') + encryptedData : encryptedData)

    delete user.tempAnime

    await m.reply('Has reclamado la imagen de anime.')
  }

  if (command === 'listrw') {
    let user = global.db.data.users[m.sender]
    if (!user.rw.length) throw 'No has reclamado ninguna imagen de anime.'

    let message = 'Personajes reclamados:\n\n'
    user.rw.forEach((anime, index) => {
      message += `${index + 1}. Título: ${anime.title}\nDescripción: ${anime.description}\n\n`
    })

    await m.reply(message)
  }
}

handler.help = ['rw', 'claim', 'c', 'listrw']
handler.tags = ['anime']
handler.command = ['rw', 'claim', 'c', 'listrw']

export default handler