import axios from 'axios'

global.db = global.db || { data: { users: {} } }

let handler = async function (m, { conn, command }) {
  if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = { rw: [], tempAnime: null }

  if (command === 'rw') {
    try {
      let { data } = await axios.get('https://abhi-api-bvws.onrender.com/api/anime/astatus')

      if (data.result.endsWith('.mp4')) {
        // Si el resultado es un video
        await conn.sendMessage(m.chat, {
          video: data.result,
        }, { quoted: m })

        await m.reply('Se ha enviado un video de anime. Responde con "claim" o "c" para reclamarlo.')
      } else if (data.result.endsWith('.jpg') || data.result.endsWith('.jpeg') || data.result.endsWith('.png')) {
        // Si el resultado es una imagen
        await conn.sendMessage(m.chat, {
          image: { url: data.result },
        }, { quoted: m })

        await m.reply('Se ha enviado una imagen de anime. Responde con "claim" o "c" para reclamarla.')
      } else {
        throw 'El tipo de archivo recibido no es compatible (ni imagen ni video).'
      }

      // Opcional: almacenar temporalmente el anime para reclamar
      // global.db.data.users[m.sender].tempAnime = { mediaUrl: data.result }
    } catch (error) {
      console.error(error)
      await m.reply('Hubo un error al obtener el anime. Por favor, intenta nuevamente más tarde.')
    }
  }

  if (command === 'claim' || command === 'c') {
    let user = global.db.data.users[m.sender]
    // Si se decide utilizar la base de datos temporalmente para almacenar el anime reclamado
    // if (!user.tempAnime) throw 'No hay anime para reclamar. Usa el comando `rw` primero.'
    // user.rw.push(user.tempAnime)
    // delete user.tempAnime

    await m.reply('Has reclamado el anime.')
  }

  if (command === 'listrw') {
    let user = global.db.data.users[m.sender]
    // Si se decide listar el anime reclamado
    // if (!user.rw.length) throw 'No has reclamado ningún anime.'

    // let message = 'Animes reclamados:\n\n'
    // user.rw.forEach((anime, index) => {
    //   message += `${index + 1}. Media URL: ${anime.mediaUrl}\n\n`
    // })

    await m.reply('Función no implementada aún para listar animes reclamados.')
  }
}

handler.help = ['rw', 'claim', 'c', 'listrw']
handler.tags = ['anime']
handler.command = ['rw', 'claim', 'c', 'listrw']

export default handler