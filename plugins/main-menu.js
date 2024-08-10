import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'


let welcomeText = "Hola *%name*, mi nombre es *NilouBot*, Cómo se encuentra el día de hoy?"

let tags = {
  'main': 'ɪɴғᴏ 📌',
  'buscador': 'ʙᴜsǫᴜᴇᴅᴀs 💫',
  'fun': 'ᴊᴜᴇɢᴏs 🎮',
  'jadibot': 'sᴜʙ ʙᴏᴛs 🤖',
  'rpg': 'ʀᴘɢ 🌠',
  'rg': 'ʀᴇɢɪsᴛʀᴏ ✍🏻',
  'xp': 'ᴇxᴘ 💥',
  'sticker': 'sᴛɪᴄᴋᴇʀs ✨',
  'database': 'ᴅᴀᴛᴀʙᴀsᴇ 💌',
  'fix': 'ғɪxᴍsɢᴇsᴘᴇʀᴀ 🌹',
  'grupo': 'ɢʀᴜᴘᴏs 👥',
  'nable': 'ᴏɴ ❎ / ᴏғғ ✅', 
  'descargas': 'ᴅᴇsᴄᴀʀɢᴀs 📥',
  'youtube': 'ʏᴏᴜᴛᴜʙᴇ ᴘʟᴀʏ 📥',
  'tools': 'ʜᴇʀʀᴀᴍɪᴇɴᴛᴀs ⚒️',
  'info': 'ɪɴғᴏʀᴍᴀᴄɪᴏɴ 👨🏻‍💻',
  'nsfw': 'ɴsғᴡ 🔞', 
  'owner': 'ᴄʀᴇᴀᴅᴏʀ 👑', 
  'mods': 'sᴛᴀғғ ɴɪʟᴏᴜʙᴏᴛ',
  'audio': 'ᴀᴜᴅɪᴏs 🔉', 
  'ai': 'ᴀɪ 🌹',
  'transformador': 'ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs 💠',
}

const defaultMenu = {
  before: `*♡･ﾟ:*｡.:*･ﾟﾟ･*:.｡*:ﾟ･♡

“${welcomeText}”

*╭──⬣「 𝐈𝐧𝐟𝐨 𝐔𝐬𝐞𝐫 」⬣*
*│* ✰ 🌸 *TEAM* https://chat.whatsapp.com/GpbF3JCTEr2CSj3zLJ1IQj
*│* ✰ 💌 *𝐂𝐥𝐢𝐞𝐧𝐭𝐞:* %name
*│* ✰ ⚡️ *𝐄𝐱𝐩:* %exp
*│* ✰ 🌟 *𝐄𝐬𝐭𝐫𝐞𝐥𝐥𝐚𝐬:* %estrellas
*│* ✰ 📌 *𝐍𝐢𝐯𝐞𝐥:* %level
*│* ✰ 🪷 *𝑹𝒂𝒏𝒈𝒐:* %role
*╰──⬣*

*╭──⬣「 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕 」⬣*
*│* ✰ 💥 *𝑩𝒐𝒕:* 💫 ŋıɭσน ๖σt - ɱɖ 🌠 
*│* ✰ ✨ *𝑴𝒐𝒅𝒐* Público
*│* ✰ 🌆 *𝑩𝒂𝒊𝒍𝒆𝒚𝒔:* Multi Device
*│* ✰ ⏰ *𝑻𝒊𝒆𝒎𝒑𝒐 Activo:* %muptime
*│* ✰ 🌹 *𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔:* %totalreg
*╰──⬣*

%readmore
*♡･ﾟ:*｡.:*･ﾟﾟ･*:.｡*:ﾟ･♡

\t*L I S T  -  C O M M A N D S* 
`.trimStart(),
  header: '*╭✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭ %category ୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙╮*',
  body: '*│* ᪒❥ %cmd\n',
  footer: '*╰★｡+ﾟ☆ﾟ+｡★ ❈ ★｡+ﾟ☆ﾟ+｡★╯*\n',
  after: '',
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, estrellas, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        estrellas: plugin.estrellas,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before.replace("${welcomeText}", welcomeText)
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      greeting, level, estrellas, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])


    const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    const pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/454cfce50a455188ce920.jpg')
    

    let category = "video"
    const db = './media/database/db.json'
    const db_ = JSON.parse(fs.readFileSync(db))
    const random = Math.floor(Math.random() * db_.links[category].length)
    const rlink = db_.links[category][random]
    global.vid = rlink
    const response = await fetch(vid)
    const gif = await response.buffer()
    // const img = imagen1

    await conn.reply(m.chat, '*ꪹ͜𓂃͡🧬𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐 𝑳𝒊𝒔𝒕 𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒔💖...𓏲੭*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: packname, body: 'ꪶໍٜ߭۫ިׅ࣪۬߭ׄ🥷ꫂꥈ Hola! ' + name, sourceUrl: redes, thumbnail: icons }}})

m.react('🌸') 

/* await conn.sendMessage(m.chat, { video: gif, gifPlayback: true, caption: text.trim(), mentions: [m.sender], contextInfo: {
mentionedJid: await conn.parseMention(text),
isForwarded: true,
forwardingScore: 1, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363263466636910@newsletter',
newsletterName: packname,
serverMessageId: -1
}}}, { quoted: fkontak }) */

await conn.sendFile(m.chat, imagen1, 'luffy.jpg', text.trim(), fkontak, null, rcanal)

  } catch (e) {
    conn.reply(m.chat, '🔵 Lo sentimos, el menú tiene un error', m, rcanal, )
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'allmenu', 'menucompleto'] 
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;