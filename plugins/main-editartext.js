const fs = require('fs')

let handler = async (m, { text }) => {
    if (!text) return m.reply('Por favor, proporciona el nuevo texto.')
    
    // Leer el archivo del menú
    const menuPath = join(__dirname, '../path/to/plugins/main-menu.js') 
    let menuContent = await promises.readFile(menuPath, 'utf-8')
    
    
    const beforeTextRegex = /before: `[\s\S]*?`,/
    menuContent = menuContent.replace(beforeTextRegex, `before: \`${text.trim()}\`,`)
    
    // Guardar los cambios en el archivo
    await promises.writeFile(menuPath, menuContent, 'utf-8')
    
    m.reply('El texto del menú se ha actualizado con éxito.')
}

handler.help = ['editartext <nuevo texto>']
handler.tags = ['main']
handler.command = ['editartext'] 
handler.rowner = true

export default handler