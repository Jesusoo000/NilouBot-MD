import fs from 'fs'
import path from 'path'

global.db = global.db || { data: { users: {} } }

const animeImagesFile = path.join(__dirname, './anime_images.json')

let handler = async function (m, { conn, command }) {
  if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = { rw: [], tempAnime: null }

  if (command === 'rw') {
    try {
      let data = JSON.parse(fs.readFileSync(animeImagesFile, 'utf8'))
      let images = data.images

      let randomIndex = Math.floor(Math.random() * images.length)
      let imageUrl = images[randomIndex]

      await conn.sendMessage(m.chat, {
        image: { url: imageUrl },
      }, { quoted: m })

      await m.reply('Se ha enviado una imagen de anime. Responde con "claim" o "c" para reclamarla.')
    } catch (error) {
      console.error(error)
      await m.reply('Hubo un error al obtener la imagen de anime. Por favor, intenta nuevamente más tarde.')
    }
  }

  if (command === 'claim' || command === 'c') {
    let user = global.db.data.users[m.sender]
    // Implementar almacenamiento de la imagen reclamada si es necesario
    if (!user.tempAnime) throw 'No hay imagen de anime para reclamar. Usa el comando `rw` primero.'
    user.rw.push(user.tempAnime)
    delete user.tempAnime

    await m.reply('Has reclamado la imagen de anime.')
  }

  if (command === 'listrw') {
    let user = global.db.data.users[m.sender]
    // Implementar listado de imágenes reclamadas si es necesario
    if (!user.rw.length) throw 'No has reclamado ninguna imagen de anime.'

    let message = 'Imágenes de anime reclamadas:\n\n'
    user.rw.forEach((anime, index) => {
     message += `${index + 1}. URL: ${anime.imageUrl}\n\n`
    // })

    await m.reply('Función no implementada aún para listar imágenes de anime reclamadas.')
  }
}

handler.help = ['rw', 'claim', 'c', 'listrw']
handler.tags = ['anime']
handler.command = ['rw', 'claim', 'c', 'listrw']

export default handler