import { createWriteStream, readFileSync, writeFileSync } from 'fs'
import axios from 'axios'

global.db = global.db || { data: { users: {} } }

let handler = async function (m, { conn, command, args }) {
  if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = { rw: [] }

  if (command === 'rw') {
    // Obtener una lista de animes y seleccionar uno al azar
    let { data } = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    let animeList = data.top
    let randomAnime = animeList[Math.floor(Math.random() * animeList.length)]
    
    let anime = await axios.get(`https://api.jikan.moe/v3/anime/${randomAnime.mal_id}`)
    let animeDetails = anime.data
    let image = animeDetails.image_url
    let title = animeDetails.title
    let description = animeDetails.synopsis

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