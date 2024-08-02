import { File } from "megajs";
import path from "path";

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return m.reply('*_ingresa un enlace de mega_*\n\n`ejemplo:`\n' + `> ❒ *${usedPrefix + command}* https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);

        const file = File.fromURL(text);
        await file.loadAttributes();

        if (file.size >= 300000000) return m.reply('Error: el archivo es demasiado grande (maximo peso: 300MB)');

        const downloadingMessage = `*Descargando archivo*`;
        m.reply(downloadingMessage);

        const caption = `
*_𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎  𝐸𝑥𝑖𝑡𝑜𝑠𝑎..._* 

> ❒➺ *Aʀᴄʜɪᴠᴏ :* ${file.name}
> ❒➺ *Pᴇꜱᴏ :* ${formatBytes(file.size)}`;

        const data = await file.downloadBuffer();

        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };

        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";

        await conn.sendFile(m.chat, data, file.name, caption, m, null, { mimetype, asDocument: true });

    } catch (error) {
await conn.reply(m.chat, "*_❏ 🍃 Ocurrio un error inesperado_*", m,msg);
    }
}

handler.help = ["ᴍᴇɢᴀ"]
handler.tags = ["downloader"]
handler.command = ["megas"]
export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}