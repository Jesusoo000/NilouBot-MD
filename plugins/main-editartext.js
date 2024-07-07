import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let handler = async (m, { text }) => {
    if (!text) return m.reply('Por favor, proporciona el nuevo texto.');

    try {
        const menuPath = join(__dirname, '../path/to/plugins/main-menu.js');

        // Verificar que la ruta y el archivo existen
        console.log('Valor de __dirname:', __dirname);
        console.log('Ruta completa del archivo de menú:', menuPath);

        try {
            // Comprobar si el archivo existe
            await fs.access(menuPath);
            console.log('El archivo existe.');
        } catch (error) {
            console.error('El archivo no existe:', error);
            return m.reply('No se encontró el archivo del menú.');
        }

        // Leer el archivo del menú
        let menuContent;
        try {
            menuContent = await fs.readFile(menuPath, 'utf-8');
        } catch (error) {
            console.error('Error al leer el archivo del menú:', error);
            return m.reply('Hubo un error al leer el archivo del menú.');
        }

        // Verificar si el contenido tiene la sección "before"
        const beforeTextRegex = /before:\s*`[\s\S]*?`,/;
        if (!beforeTextRegex.test(menuContent)) {
            console.error('No se encontró la sección "before" en el archivo del menú.');
            return m.reply('No se encontró la sección "before" en el archivo del menú.');
        }

        // Reemplazar el texto en la sección "before"
        menuContent = menuContent.replace(beforeTextRegex, `before: \`${text.trim()}\`,`);

        // Guardar los cambios en el archivo del menú
        try {
            await fs.writeFile(menuPath, menuContent, 'utf-8');
        } catch (error) {
            console.error('Error al escribir en el archivo del menú:', error);
            return m.reply('Hubo un error al escribir en el archivo del menú.');
        }

        m.reply('El texto del menú se ha actualizado con éxito.');
    } catch (error) {
        console.error('Error general:', error);
        m.reply('Hubo un error general al actualizar el texto del menú.');
    }
};

handler.help = ['editartext <nuevo texto>'];
handler.tags = ['main'];
handler.command = ['editartext'];
handler.owner = true;

export default handler;