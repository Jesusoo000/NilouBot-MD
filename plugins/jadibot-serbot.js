import { useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser } from '@whiskeysockets/baileys';
import qrcode from 'qrcode';
import fs from 'fs';
import pino from 'pino';
import crypto from 'crypto';
import NodeCache from 'node-cache';
import { makeWASocket } from '../lib/simple.js';

let handler = async (m, { conn, args, usedPrefix, command, isROwner }) => {
    if (!global.db.data.settings[conn.user.jid].jadibotmd && !isROwner) {
        conn.reply(m.chat, '🚩 Este Comando está deshabilitado por mi creador.', m);
        return;
    }

    async function serbot() {
        let serbotFolder = crypto.randomBytes(10).toString('hex').slice(0, 8);
        let folderSub = `./LuffyJadiBot/${serbotFolder}`;

        if (!fs.existsSync(folderSub)) {
            fs.mkdirSync(folderSub, { recursive: true });
        }

        if (args[0]) {
            fs.writeFileSync(`${folderSub}/creds.json`, Buffer.from(args[0], 'base64').toString('utf-8'));
        }

        const { state, saveCreds } = await useMultiFileAuthState(folderSub);
        const msgRetryCounterCache = new NodeCache();
        const { version } = await fetchLatestBaileysVersion();

        const connectionOptions = {
            logger: pino({ level: 'silent' }),
            printQRInTerminal: true,
            browser: ['Nilou Sub-Bot', 'Edge', '2.0.0'],
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
            },
            markOnlineOnConnect: true,
            generateHighQualityLinkPreview: true,
            getMessage: async (clave) => {
                let jid = jidNormalizedUser(clave.remoteJid);
                let msg = await store.loadMessage(jid, clave.id);
                return msg?.message || "";
            },
            msgRetryCounterCache,
            version
        };

        let conn = makeWASocket(connectionOptions);
        conn.isInit = false;

        async function connectionUpdate(update) {
            const { connection, qr } = update;

            if (qr) {
                let txt = '🚩 S E R B O T - S U B B O T 🚩\n\n*Escanea este QR para ser un Sub Bot*\n\n🐢 Pasos para escanear\n\n`1` : Haga click en los 3 puntos\n\n`2` : Toque dispositivos vinculados\n\n`3` : Escanea este QR\n\n> *Nota:* Este código QR expira en 30 segundos.';

                let canalLink = 'https://whatsapp.com/channel/0029VajIId22phHQLslZah1n';
                txt += `\n\n📢 Canal de WhatsApp del bot: ${canalLink}`;

                let sendQR = await conn.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), "qrcode.png", txt, m, null);
                setTimeout(() => {
                    conn.sendMessage(m.chat, { delete: sendQR.key });
                }, 30000);
            }

            if (connection == "open") {
                conn.isInit = true;
                global.conns.push(conn);
                await conn.reply(m.chat, args[0] ? '🐢 Conectado con éxito al WhatsApp.' : '🚩 Vinculaste un Sub-Bot con éxito.', m);
                await sleep(5000);
                if (args[0]) {
                    return;
                }
                await conn.reply(conn.user.jid, `🚩 *Para volver a vincular un sub Bot use su token`, m);
            }
        }

        conn.on("connection.update", connectionUpdate);
    }

    serbot();
};

handler.help = ["serbot"];
handler.tags = ["jadibot"];
handler.command = ["serbot", "jadibot", "qr", "botclone"];

export default handler;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}