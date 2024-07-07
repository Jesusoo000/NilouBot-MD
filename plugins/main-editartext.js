const { promises } = require('fs')
const { join } = require('path')

let handler = async (m, { text }) => {
    if (!text) return m.reply('Por favor, proporciona el nuevo texto.')

    const menuPath = join(__dirname, '../path/to/plugins/main-menu.js')
    let menuContent = await promises.readFile(menuPath, 'utf-8')

    const beforeTextRegex = /before: `[\s\S]*?`,/
    menuContent = menuContent.replace(beforeTextRegex, `before: \`${text.trim()}\`,`)

    await promises.writeFile(menuPath, menuContent, 'utf-8')

    m.reply('El texto del menú se ha actualizado con éxito.')
}

handler.help = ['editartext <nuevo texto>']
handler.tags = ['main']
handler.command = ['editartext']
handler.owner = true

export default handler