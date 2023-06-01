let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `《 @𝐜𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝_𝐦𝐢𝐱𝐭𝐚_𝐠𝐦 》: ${pesan}`
let teks = `《 🫶🏼 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐧 𝐁𝐥𝐨𝐪𝐮𝐞𝐬 𝐏𝐥𝐚𝐧𝐭𝐚𝐬 🫶🏼 𝐂𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝 𝐆𝐌 》\n\n❏ ${oi}\n\n❏ 《 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 》:\n`
for (let mem of participants) {
teks += `✼🩵💎 @${mem.id.split('@')[0]}\n`}
teks += `➥ 𝐂𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝 𝐆𝐌 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    
