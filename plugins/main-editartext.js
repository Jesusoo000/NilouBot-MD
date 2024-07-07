import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let handler = async (m, { text }) => {
    if (!text) return m.reply('Por favor, proporciona el nuevo texto.');

    try {
        const menuPath = join(__dirname, 'plugins', 'main-menu.js');

        try {
            await fs.access(menuPath);
        } catch (error) {
            return m.reply('No se encontró el archivo del menú.');
        }

        let menuContent;
        try {
            menuContent = await fs.readFile(menuPath, 'utf-8');
        } catch (error) {
            return m.reply('Hubo un error al leer el archivo del menú.');
        }

        const beforeTextRegex = /before:\s*`[\s\S]*?`,/;
        if (!beforeTextRegex.test(menuContent)) {
            return m.reply('No se encontró la sección "before" en el archivo del menú.');
        }

        menuContent = menuContent.replace(beforeTextRegex, `before: \`${text.trim()}\`,`);

        try {
            await fs.writeFile(menuPath, menuContent, 'utf-8');
        } catch (error) {
            return m.reply('Hubo un error al escribir en el archivo del menú.');
        }

        m.reply('El texto del menú se ha actualizado con éxito.');
    } catch (error) {
        m.reply('Hubo un error general al actualizar el texto del menú.');
    }
};

handler.help = ['editartext <nuevo texto>'];
handler.tags = ['main'];
handler.command = ['editartext'];
handler.owner = true;

export default handler;