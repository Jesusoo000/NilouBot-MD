import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['5491168758497', 'Owner 🍭', true]]


//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []
// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = false

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '⪛✰ 𝙽𝚒𝚕𝚘𝚞 - 𝙼𝙳 ✰⪜'
global.botname = '𝗡𝗶𝗹𝗼𝘂𝗕𝗼𝘁 - 𝗠𝗗 🍭'
global.wm = '𝗡𝗶𝗹𝗼𝘂𝗕𝗼𝘁 - 𝗠𝗗 ⭐️'
global.author = 'ᴇɴᴢɪᴛᴏ-ᴏғᴄ 👑'
global.dev = '🚩 Powered By あ 𝑬𝒏𝒛𝒊𝒕𝒐𝑶𝒇𝒄 あ'
global.textbot = '𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭 : 𝐄𝐧𝐳𝐢𝐭𝐨𝐎𝐟𝐜 🚩'
global.vs = '2.0.5'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./Menu.jpg')
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./storage/img/catalogo.jpg')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.grupo = 'https://chat.whatsapp.com/IICmKudSbuGBFKMPZitp0h' //YaemoriBot
global.grupo2 = 'https://chat.whatsapp.com/IICmKudSbuGBFKMPZitp0h' //YaemoriBot2
global.grupo3 = 'https://chat.whatsapp.com/IICmKudSbuGBFKMPZitp0h' //GataBot & YaemoriBot
global.canal = 'https://whatsapp.com/channel/0029VajIId22phHQLslZah1n'
global.channel = 'https://whatsapp.com/channel/0029VajIId22phHQLslZah1n'
global.md = '' 
global.yt = ''
global.correo = 'EnzoMJVaselevich@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5491168758497-5491168758497@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '🍭 NilouBot-MD𝗶 🍟', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})