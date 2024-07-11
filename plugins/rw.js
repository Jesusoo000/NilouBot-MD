import axios from 'axios'

global.db = global.db || { data: { users: {} } }

let handler = async function (m, { conn, command }) {
  if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = { rw: [], tempAnime: null }

  if (command === 'rw') {
    let { data } = await axios.get('https://abhi-api-bvws.onrender.com/api/anime/astatus')
    let anime = data.data
    let image = anime.images.jpg.image_url
    let title = anime.title
    let description = anime.synopsis

    await conn.sendMessage(m.chat, {
      image: { url: image },
      caption: `Responde con "claim" o "c" para reclamar esta imagen.`,
    }, { quoted: m })

    global.db.data.users[m.sender].tempAnime = { title, description, image }
  }

  if (command === 'claim' || command === 'c') {
    let user = global.db.data.users[m.sender]
    if (!user.tempAnime) throw 'No hay imagen de anime para reclamar. Usa el comando `rw` primero.'

    user.rw.push(user.tempAnime)
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