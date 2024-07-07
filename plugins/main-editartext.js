import { promises } from 'fs';
import { join } from 'path';

let handler = async (m, { text }) => {
    if (!text) return m.reply('Por favor, proporciona el nuevo texto.');

    try {
        const menuPath = join(__dirname, '../path/to/plugins/main-menu.js');
        let menuContent = await promises.readFile(menuPath, 'utf-8');

        const beforeTextRegex = /before: `[\s\S]*?`,/;
        menuContent = menuContent.replace(beforeTextRegex, `before: \`${text.trim()}\`,`);

        await promises.writeFile(menuPath, menuContent, 'utf-8');

        m.reply('El texto del menú se ha actualizado con éxito.');
    } catch (e) {
        console.error(e);
        m.reply('Hubo un error al actualizar el texto del menú.');
    }
};

handler.help = ['editartext <nuevo texto>'];
handler.tags = ['main'];
handler.command = ['editartext'];
handler.owner = true;

export default handler;