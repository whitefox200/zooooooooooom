const Discord = require('discord.js');
const client = new Discord.Client();


console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});




  

  client.on('message', message => {
if(message.content == '<@478589765839749132>') {
message.channel.startTyping(7)
setTimeout(() => { 
message.channel.stopTyping(7)
}, 7000);
}
});
  


 
 

















client.on('message', message => {
if (message.content.startsWith('p^help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:earth_africa: The Public Commands :earth_africa: 
1༺༻  ^id  | لمعرفه هوية الشخص༺༻ 
2༺༻ ^server | لمعرفت معلومات عن السرفر༺༻ 
3༺༻ ^ping | لاظهار  سرعة اتصالك༺༻  
4༺༻ ^avatar | لي اخد صوره اي شخص في سرفر༺༻ 
5༺༻ ^hack  |  لعمل خدعه التهكر للسرفر༺༻  
6༺༻  ^rps | لي لعب لعبت ورق ومقص༺༻  
7༺༻  ^invite | لمعرفه عدد الانفايت لك في السرفر༺༻  
8༺༻  ^topinvite | لمعرفه افضل ناس علي انفايت༺༻  
9༺༻ ^members | لمعرفه عدد الاعضاء اون لاين و الوف لاين༺༻ 
10༺༻  ^setvo | لعمل روم لتعريف عدد الاعضاء في روم༺༻  ]
11༺༻  ^report |  لعمل ريبورت من البوت
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go Administor Side
   `
,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:closed_lock_with_key: Administor Coomands:closed_lock_with_key: 
1༺༻  ^clear | لمسح الشات༺༻  
2༺༻  ^bc | لرسال رساله لي جميع الاعضاء༺༻  
3༺༻  ^kick | لطرد العضو من السرفر༺༻  
4༺༻  ^ban | لتبنيد العضو من السرفر༺༻
5༺༻  ^mute | لعطاء عضو ميوت في سرفر يجب عمل رتبت Muted
6༺༻  ^unmute | لفك الميوت عن الغضو
7༺༻  ^warn | لي اعطاء تحذير لي العضو༺༻  
8༺༻  ^role | لي اعطاءاي شخص رتبه في سرفر༺༻  
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go To Bot Info
   `,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
             محلوظات
1༺༻  اول عند دخول البوت سيمنع تلقائي نشر الروابط             
2༺༻ تاني سيتم تفعيل ميز منع نشر توكن البوت تلقائي
3༺༻ ثالث لتفعيل ميز الرتب التلقائي يجب تكلم مع صحب البوت
4༺༻ مصمم البوت white fox EG و $ .ZσσσMY , $
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   `]
 let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 


client.on('message', message => {
if (message.content.startsWith('^help')) { /// And This is The Channel One Send The Help In Channel // Code By NotGucci
    let pages = [`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:earth_africa: The Public Commands :earth_africa: 
1༺༻  ^id  | لمعرفه هوية الشخص༺༻ 
2༺༻ ^server | لمعرفت معلومات عن السرفر༺༻ 
3༺༻ ^ping | لاظهار  سرعة اتصالك༺༻  
4༺༻ ^avatar | لي اخد صوره اي شخص في سرفر༺༻ 
5༺༻ ^hack  |  لعمل خدعه التهكر للسرفر༺༻  
6༺༻  ^rps | لي لعب لعبت ورق ومقص༺༻  
7༺༻  ^invite | لمعرفه عدد الانفايت لك في السرفر༺༻  
8༺༻  ^topinvite | لمعرفه افضل ناس علي انفايت༺༻  
9༺༻ ^members | لمعرفه عدد الاعضاء اون لاين و الوف لاين༺༻ 
10༺༻  ^setvo | لعمل روم لتعريف عدد الاعضاء في روم༺༻  ]
11༺༻  ^report |  لعمل ريبورت من البوت
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go Administor Side
   `
,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:closed_lock_with_key: Administor Coomands:closed_lock_with_key: 
1༺༻  ^clear | لمسح الشات༺༻  
2༺༻  ^bc | لرسال رساله لي جميع الاعضاء༺༻  
3༺༻  ^kick | لطرد العضو من السرفر༺༻  
4༺༻  ^ban | لتبنيد العضو من السرفر༺༻
5༺༻  ^mute | لعطاء عضو ميوت في سرفر يجب عمل رتبت Muted
6༺༻  ^unmute | لفك الميوت عن الغضو
7༺༻  ^warn | لي اعطاء تحذير لي العضو༺༻  
8༺༻  ^role | لي اعطاءاي شخص رتبه في سرفر༺༻  
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go To Bot Info
   `,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
             محلوظات
1༺༻  اول عند دخول البوت سيمنع تلقائي نشر الروابط             
2༺༻ تاني سيتم تفعيل ميز منع نشر توكن البوت تلقائي
3༺༻ ثالث لتفعيل ميز الرتب التلقائي يجب تكلم مع صحب البوت
4༺༻ مصمم البوت white fox EG و $ .ZσσσMY , $
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   `]
 let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')

           setTimeout(() => {
        msg.delete
    }, 60 * 1000)

        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 



client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith("^ping")) {
    message.channel.sendMessage(`Pong  \`${Date.now() - message.createdTimestamp} ms\`:watch:`);
    }
});




                                                                                                                                          
                                                                                                                                            




client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "^clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});



client.on('message', message => {
if(message.content.startsWith("^server")){
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});













client.on('message', message => {
    if (message.content.startsWith("^hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 });
































var prefix = "^";
client.on('message', message => {
     if(message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "warn") {

        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما معك برمشن MANAGE MESSAGES**");
    let args = message.content.split(" ").slice(1);
                    let reason = message.content.split(" ").slice(2).join(" ");
                if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
        if (!reason) return message.reply("**اكتب سبب التحذير**");

        message.channel.sendMessage(args.join("  "))
        message.delete();


    }

});








 


















 client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`لاتبعت اي توكن بوت في ده السرفر `);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
}
});













//By ReBeL //By ReBeL 
//جميع الحقوق محفوظهه لريبل فقط . 
client.on('message' , async rebel => {
    if(rebel.author.bot) return;
    var ReBeL = client.guilds.get("479044390317195265");
    let room = ReBeL.channels.get('480672356432478210');
if(rebel.channel.type == 'dm') return;
const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      		.setFooter(` العدد : ${ReBeL.members.filter(member => member.voiceChannel).size}`)
      .setDescription(`\n${ReBeL.members.filter(member => member.voiceChannel).map(m => m.user.tag).join('\n')}`);
setInterval(() => {
room.sendEmbed(embed);
}, 120*60000);// لو تبي تغير الوقت اللي تنرسل فيه الرساله غير رقم 30 الى عدد الدقائق اللي تبيهه ..
});


 const child_process = require("child_process");
  client.on('ready' , function (){
var time = 7200000;
client.setInterval(function() {
    client.destroy();
        child_process.fork(__dirname + "index.js");
  }, time);
});



  client.on('message', message => {
   if(message.content.startsWith("^invite")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
  
 
  























client.on('message' , async (message) => {
var prefix = "-"
    if(message.content.startsWith("^top invite")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    (invites, '343866654502944779', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 10) {//يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
          message.member.addRole(message.member.guild.roles.find("name",""))//هنآ أسم ألرتبه اللي تجيهه
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 20) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});
  






client.on('guildCreate', guild => {
client.channels.get("480747819502796811").send(`:white_check_mark: **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("480747819502796811").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
  

























client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ZeX . 44");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})














  client.on('message', async message => {
  if(message.content.startsWith("^sug")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("487302015505006604").send(`${message.author.username}'الاقتراح => ${text}`)

              })
            }
          })
  




client.on("message", msg => {
  if(msg.content === "^id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});










const developers = ["343866654502944779","343866224762945557","448657387931435008","297140822003023873"]
const adminprefixe = "بريفكس خاص للتغيرات بوت";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith('$ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ("^leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('^wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('^ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('^st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('^setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('^setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});








client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
   if(message.content.startsWith("^rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( حجر )
#2 ( ورقه )
#3 ( مقص )
\`\`\`

__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});














client.on('message', message => {
  if (message.content.startsWith("^avatar")) {

      var mentionned = message.mentions.users.first();
  var king66s;
    if(mentionned){
        var king66s = mentionned;
    } else {
        var king66s = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${king66s.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});




const bannedwords = [
    "غبي",
    "حمار",
    "WTF",
    "كل زق",
    "يلعن ابوك",
    "كس امك",
    "fuke you",
    "fuke",
    "زق",
   "fuke",
   "سافل",
   "ابن متنكه"



  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في سرفرنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
  };
});















client.on('message', msg => {
  if (msg.content === '^support') {
    msg.reply('https://discord.gg/scVbXkX,');
  }
});





























































    














  
  
  
  
  
  
  
  


  
  
  
  
  
  
  
  
  
  
 
client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith("^giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});  
  
  
  
  
  






 client.on('message', message => {
	    var prefix = "^";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Speed Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('سيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });     











client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith('^role')) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});







client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' ^help او p^help ','Server • ZmDxs','Dev $ ,WhiteFox. ^'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/n3k4a`);
    }, ms);

})











































client.on('messageDelete', msg => {
    if (msg.channel.type !== "chat") return
    if (msg.channel.topic && msg.channel.topic.includes("hano-modlog")) return;
    exports.fire(`**#${msg.channel.name} | ${msg.author.tag}'s message was deleted:** \`${msg.content}\``, msg.guild)
})

client.on('messageUpdate', (msg, newMsg) => {
    if (msg.content === newMsg.content) return
    exports.fire(`**#${msg.channel.name} | ${msg.author.tag} edited their message:**\n**before:** \`${msg.content}\`\n**+after:** \`${newMsg.content}\``, msg.guild)
})

client.on('guildMemberUpdate', (old, nw) => {
    let txt
    if (old.roles.size !== nw.roles.size) {
        if (old.roles.size > nw.roles.size) {
            //Taken
            let dif = old.roles.filter(r => !nw.roles.has(r.id)).first()
            txt = `**${nw.user.tag} | Role taken -> \`${dif.name}\`**`
        } else if (old.roles.size < nw.roles.size) {
            //Given
            let dif = nw.roles.filter(r => !old.roles.has(r.id)).first()
            txt = `**${nw.user.tag} | Role given -> \`${dif.name}\`**`
        }
    } else if (old.nickname !== nw.nickname) {
        txt = `**${nw.user.tag} | Changed their nickname to -> \`${nw.nickname}\`**`
    } else return
    exports.fire(txt, nw.guild)
})

client.on('roleCreate', (role) => {
    exports.fire("**New role created**", role.guild)
})

client.on('roleDelete', (role) => {
    exports.fire("**Role deleted -> `" + role.name + "`**", role.guild)
})

client.on('roleUpdate', (old, nw) => {
    let txt
    if (old.name !== nw.name) {
        txt = `**${old.name} | Role name updated to -> \`${nw.name}\`**`
    } else return
    exports.fire(txt, nw.guild)
})

client.on('guildBanAdd', (guild, user) => {
    exports.fire(`**User banned -> \`${user.tag}\`**`, guild)
})

client.on('guildBanRemove', (guild, user) => {
    exports.fire(`**User unbanned -> \`${user.tag}\`**`, guild)
})





client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='^members')
      var kayan = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(kayan);
    
    });








  client.on('message',async message => {
    if(message.content.startsWith("^res")) {
        if(message.author.id !== "343866654502944779") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('NDc4NzYwNTUwNDM2ODMxMjgz.DnL58g.IQhZU5YFqcabXHqmzHC8HEtKsOk');
        },3000);
    }
});
 





  
  
  

  
  
  
  
client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** Not allowed to advertising Here :angry: ! **`)
  }
}
});



















// Code By : EpicEdiTeD
client.on('message',async Epic => {
  var codes = "Your Prefix";
  if(Epic.content.startsWith("^setvo")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **ليس معي الصلاحيات الكافية**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => { 
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});






client.on('message', message => {
    var prefix = "^";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if(!reason) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if (!message.guild.member(user)
  .bannable) return message.reply(`لايمكن تبنيد هذا الشخص لانه رتبه اعله من البوت`);
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});















client.on("message", message => {
    if (message.author.bot || !message.guild) return; 
    let score;
    
    if (message.guild) {
      score = client.getScore.get(message.author.id, message.guild.id);
      if (!score) {
        score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 };
      }
      score.points++;
      const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
      client.setScore.run(score);
    }
    if (message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === "^points") {
      return message.reply(`You currently have ${score.points} points and are level ${score.level}!`);
    }
    
    if(command === "^give") {
      if(!message.author.id === message.guild.owner) return message.reply("You're not the boss of me, you can't do that!");
      const user = message.mentions.users.first() || client.users.get(args[0]);
      if(!user) return message.reply("You must mention someone or give their ID!");
      const pointsToAdd = parseInt(args[1], 10);
      if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...");
          let userscore = client.getScore.get(user.id, message.guild.id);      
      if (!userscore) {
        userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 };
      }
      userscore.points += pointsToAdd;
      let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
      userscore.level = userLevel;
      client.setScore.run(userscore);
    
      return message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userscore.points} points.`);
    }
    
    if(command === "^top") {
      const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);
      const embed = new Discord.RichEmbed()
        .setTitle("**TOP 10 TEXT** :speech_balloon:")
        .setAuthor('📋 Guild Score Leaderboards', message.guild.iconURL)
        .setColor(0x00AE86);
  
      for(const data of top10) {
        embed.addField(client.users.get(data.user).tag, `XP: \`${data.points}\` | LVL: \`${data.level}\``);
      }
      return message.channel.send({embed});
    }
    
  });

















client.login("NDc4NzYwNTUwNDM2ODMxMjgz.DsYX8w.7Jcl5K1ilNYvfJcNInxGOCvuEP8");
