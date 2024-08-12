import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador y otros
global.creador = 'Wa.me/5491168758497'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/5492215034412'
global.namechannel = '✨️ ᴺⁱˡᵒᵘᴮᵒᵗ⁻ᴹᴰ​᭄ ᎪΝႮΝᏟᏆϴՏ'
global.colab1 = '𝐃𝐢𝐚𝐛𝐥𝐚𝐁𝐨𝐭 & 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭'
global.colab2 = '𝐊𝐢𝐫𝐚𝐁𝐨𝐭 & 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭'

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '✖️'

//sms espera
global.wait = '*🪷 𝐸𝑠𝑝𝑒𝑟𝑎 𝑈𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜, 𝑆𝑜𝑦 𝐿𝑒𝑛𝑡𝑎 ...*';
global.waitt = '*💫 𝙴𝚜𝚙𝚎𝚛𝚊 𝚄𝚗 𝙼𝚘𝚖𝚎𝚗𝚝𝚘, 𝚂𝚘𝚢 𝙻𝚎𝚗𝚝𝚊 ...*';
global.waittt = '*🌸 𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐒𝐨𝐲 𝐋𝐞𝐧𝐭𝐚 ...*';
global.waitttt = '*🌠 𝓔𝓼𝓹𝓮𝓻𝓪 𝓤𝓷 𝓜𝓸𝓶𝓮𝓷𝓽𝓸, 𝓢𝓸𝔂 𝓛𝓮𝓷𝓽𝓸 ...*';

//Enlaces
var canal = 'https://www.whatsapp.com/channel/0029VajIId22phHQLslZah1n' 
var canal2 = 'https://www.whatsapp.com/channel/0029VajIId22phHQLslZah1n' 
var grupofb = '' 
var git = 'https://github.com/EnzoVaselevich' 
var youtube = 'https://www.youtube.com/@Enzito-19' 
var github = 'https://github.com/Jesusoo000/NilouBot-MD' 
var facebook = 'https://www.facebook.com/EnzoMatiasJesusVaselevich' 
let tiktok = 'https://www.tiktok.com/@enzito_ofcial'

global.redes = [canal, canal2, grupofb, git, youtube, github, facebook, tiktok].getRandom()

global.canales = [canal, canal2].getRandom()

//Imagen
let category = "imagen"
const db = './media/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}

let icono = ['https://telegra.ph/file/a529f97df819f2599f977.jpg', 'https://telegra.ph/file/fd89f02fee58a2520cfd8.jpg'].getRandom()

global.rcanal = {
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
false_120363317991468969@g.us_3E902D1E91BB72AC25600A_50766358189@c.us",
serverMessageId: 100,
newsletterName: 'Nilou Bot - Channel 🌸',
},
externalAdReply: {
showAdAttribution: true,
title: packname,
body: '🌸 Nilou Bot Canal 🌸',
mediaUrl: null,                                   description: null,                                       previewType: "PHOTO",                                        thumbnailUrl: icono,
sourceUrl: redes,
mediaType: 1,
renderLargerThumbnail: false
},
},
}
}

export default handler
