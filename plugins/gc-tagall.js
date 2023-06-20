let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `《 𝐂𝐬𝐚𝐫𝐟𝐟𝐱 》: ${pesan}`
let teks = `《 🫶🏼 𝐀𝐂𝐓𝐈𝐕𝐄𝐍𝐂𝐄 𝐄𝐒𝐂𝐋𝐀𝐕𝐎𝐒 🫶🏼 @𝐂𝐬𝐚𝐫𝐟𝐟𝐱 》\n\n❏ ${oi}\n\n❏ 《 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 》:\n`
for (let mem of participants) {
teks += `✼👽@${mem.id.split('@')[0]}\n`}
teks += `➥ 𝐂𝐬𝐚𝐫𝐟𝐟𝐱 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    
