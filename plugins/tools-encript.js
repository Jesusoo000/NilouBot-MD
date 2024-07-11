import { randomBytes } from 'crypto'

const morseCode = {
  'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
  'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
  'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
  's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
  'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': '/'
};

function toMorse(text) {
  return text.toLowerCase().split('').map(c => morseCode[c] || c).join(' ');
}

function toBinary(text) {
  return text.split('').map(c => c.charCodeAt(0).toString(2)).join(' ');
}

function toSpecialChars(text) {
  const specialChars = '!@#$%^&*()_+{}:"<>?[];\',./';
  return text.split('').map(c => specialChars[Math.floor(Math.random() * specialChars.length)]).join('');
}

function shuffleString(text) {
  return text.split('').sort(() => 0.5 - Math.random()).join('');
}

let handler = async function (m, { conn, text, usedPrefix, command }) {
  if (!text) throw `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *Debe proporcionar un texto para encriptar*\n\n📝 Use el comando de la siguiente manera: *${usedPrefix + command} texto*\n[ 💡 ] Ejemplo: *${usedPrefix + command} hola*`

  let morse = toMorse(text);
  let binary = toBinary(text);
  let special = toSpecialChars(text);
  
  let combined = shuffleString(morse + ' ' + binary + ' ' + special);
  let randomPadding = randomBytes(55 * 60 - combined.length).toString('hex');
  let longEncryptedText = (combined + randomPadding).slice(0, 55 * 60); // Ensure it's exactly 55 lines
  
  let formattedText = longEncryptedText.match(/.{1,60}/g).join('\n');

  m.reply(`
*🔒 Texto Encriptado:*
${formattedText}
`.trim())
}

handler.help = ['encript'].map(v => v + ' <texto>')
handler.tags = ['herramientas']
handler.command = ['encript']

export default handler