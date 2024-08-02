import fetch from 'node-fetch';

let gitHubData = {};

let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)(?:\/(.+))?/i;
let handler = async (m, { args, usedPrefix, command }) => {
  if (command === 'gitinfo') {
    if (!args[0]) {
      return conn.reply(m.chat, `🚩 Escribe la URL de un perfil o repositorio de GitHub que deseas consultar.`, m);
    }
    if (!regex.test(args[0])) {
      return conn.reply(m.chat, `Verifica que la *URL* sea de GitHub`, m);
    }
    let [_, user, repo] = args[0].match(regex) || [];
    let apiUrl;

    if (repo) {
      apiUrl = `https://api.github.com/repos/${user}/${repo}`;
    } else {
      apiUrl = `https://api.github.com/users/${user}/events`;
    }
    
    try {
      await m.react('⏳');
      let response = await fetch(apiUrl);
      let data = await response.json();

      let txt;
      if (repo) {
        txt = `*Información del repositorio ${repo}*\n\n` +
              `✩  *Nombre*: ${data.name}\n` +
              `✩  *Descripción*: ${data.description || 'Sin descripción disponible'}\n` +
              `✩  *Creador*: ${data.owner.login}\n` +
              `✩  *URL*: ${data.html_url}\n\n`;
      } else {
        let activity = data.map(event => `${event.type} en ${event.repo.name}`).join('\n');
        gitHubData[user] = activity;

        txt = `*Actividad reciente de ${user}*\n\n${activity}`;
      }
      await conn.reply(m.chat, txt, m);
      await m.react('✅');
    } catch (error) {
      console.error(error);
      await m.react('❌');
    }
  } else if (command === 'infogt') {
    if (Object.keys(gitHubData).length === 0) {
      return conn.reply(m.chat, `No se han registrado usuarios de GitHub.`, m);
    }

    let info = Object.entries(gitHubData).map(([user, activity]) => `${user}:\n${activity}`).join('\n\n');
    await conn.reply(m.chat, `Información de GitHub registrada:\n${info}`, m);
  }
}

handler.help = ['gitinfo *<url git>*', 'infogt'];
handler.tags = ['información'];
handler.command = /^(gitinfo|infogt)$/i;
handler.register = true;

export default handler;