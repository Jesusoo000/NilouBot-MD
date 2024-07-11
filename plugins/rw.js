import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-${command}.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
//conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m)
conn.sendButton(m.chat, `_${command}_`.trim(), wm, haha, [['SIGUIENTE IMÁGEN ', `${usedPrefix + command}`]], null, null, m)    
}
handler.command = handler.help = ['rw', 'claim','c','listrw']
handler.tags = ['anime']
export default handler