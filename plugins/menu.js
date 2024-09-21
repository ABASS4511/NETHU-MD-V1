const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu,list,help",
    react: "📑",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `

👋 *HELLO ${pushname}*

╭─「 *Welcome to NETHU-MD* 」
╰──────────────
╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ 」
 ╎ ⦁ ʙᴏᴛ ɴᴀᴍᴇ : ɴᴇᴛʜᴜ ᴍᴅ
 ╎ ⦁ ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ
 ╎ ⦁ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : 94704227534
╰────────────◦✘

╭─「 *Download Menu* 」
╰──────────────
> ⟡━⟪ *📥* ⟫━⟡
╭────────────◦✘
 ╎ .apk
 ╎ .fb
 ╎ .tiktok
 ╎ .twitter 
 ╎ .gdrive
 ╎ .mediafire 
 ╎ .ig
 ╎ .movie 
╰────────────◦✘

╭─「 *Main Menu* 」
╰──────────────
> ⟡━⟪ *👤* ⟫━⟡
╭────────────◦✘
 ╎ .about
 ╎ .ai
 ╎ .alive
 ╎ .menu
 ╎ .owner
 ╎ .ping
 ╎ .repo
 ╎ .support
 ╎ .system 
╰────────────◦✘

╭─「 *Fun Menu* 」
╰──────────────
> ⟡━⟪ *💃* ⟫━⟡
╭────────────◦✘
 ╎ .animegirl
 ╎ .dog
 ╎ .fact
 ╎ .hack 
 ╎ .joke
 ╎ .quote
 ╎ .rvideo 
╰────────────◦✘

╭─「 *Convert Menu* 」
╰──────────────
> ⟡━⟪ *🔄* ⟫━⟡
╭────────────◦✘
 ╎ .convert
╰────────────◦✘

╭─「 *Search Menu* 」
╰──────────────
> ⟡━⟪ *🔍* ⟫━⟡
╭────────────◦✘
 ╎ .phub
 ╎ .srepo
 ╎ .yts
╰────────────◦✘

╭─「 *Group Menu* 」
╰──────────────
> ⟡━⟪ *👥* ⟫━⟡
╭────────────◦✘
 ╎ .mute
 ╎ .unmute
 ╎ .promote
 ╎ .demote 
 ╎ .del
 ╎ .remove 
 ╎ .add
 ╎ .setgoodbye
 ╎ .setwelcome
 ╎ .getpic
╰────────────◦✘

╭─「 *Owner Menu* 」
╰──────────────
> ⟡━⟪ *👨‍💻* ⟫━⟡
╭────────────◦✘
 ╎ .shutdown
 ╎ .broadcast
 ╎ .setpp
 ╎ .block
 ╎ .unblock
 ╎ .clearchats
 ╎ .jid
 ╎ .gjid
 ╎ .restart
 ╎ .setautobio
╰────────────◦✘

╭─「 *Other Menu* 」
╰──────────────
> ⟡━⟪ *📜* ⟫━⟡
╭────────────◦✘
 ╎ .define
 ╎ .githubstalk
 ╎ .gpass
 ╎ .trt
 ╎ .weather 
╰────────────◦✘

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ

 ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `https://imgtr.ee/images/2024/09/17/37f9be869d1404ef1a5d188178450537.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
