import axios from 'axios'

global.db = global.db || { data: { users: {} } }

let handler = async function (m, { conn, command, usedPrefix }) {
  if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = { claimedImages: [], tempAnime: null }

  if (command === 'rw') {
    try {
      let res = await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-${command}.json`)
      let data = res.data
      let randomIndex = Math.floor(Math.random() * data.length)
      let imageUrl = data[randomIndex]

      global.db.data.users[m.sender].tempAnime = imageUrl

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
    if (!user.tempAnime) throw 'No hay imagen de anime para reclamar. Usa el comando `rw` primero.'
    
    user.claimedImages.push(user.tempAnime)
    delete user.tempAnime

    await m.reply('Has reclamado la imagen de anime.')
  }

  if (command === 'listrw') {
    let user = global.db.data.users[m.sender]
    if (!user.claimedImages.length) throw 'No has reclamado ninguna imagen de anime.'

    let message = 'Imágenes de anime reclamadas:\n\n'
    user.claimedImages.forEach((anime, index) => {
      message += `${index + 1}. ${anime}\n\n`
    })

    await conn.sendMessage(m.chat, message.trim(), 'textMessage', { quoted: m })
  }
}

handler.help = ['rw', 'claim', 'c', 'listrw']
handler.tags = ['anime']
handler.command = ['rw', 'claim', 'c', 'listrw']

export default handler