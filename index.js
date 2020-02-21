// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
    client.user.setActivity('Ron Gahbi', {type: 'STREAMING'});
});

client.on('message', msg => {
    if(!msg.guild) return;
    if (msg.content.startsWith(process.env.PREFIX))
    {
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('@MR_Gutsy#3758');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    } else {
        const ms = msg.content;
        if (ms.includes('זדיין')) 
        {
            const member = msg.guild.member(msg.author);
            if(member)
            member.kick('מת').then(() => { msg.channel.send(`כרגע מת ${msg.author.tag}`); }).catch(err => { msg.channel.send('לצערי אני כבוט ציוני אינני יכול לסלק ילד מת זה'); console.error(err); });
        }
        else if (ms === '/join') {
            // Only try to join the sender's voice channel if they are in one themselves
                const channel = client.channels.get("662756581489770530"); 
                if (!channel) return console.error("The channel does not exist!"); 
                channel.join()
                .then(connection => { // Conn// ection is an instance of VoiceConnection
                  msg.reply('I have successfully connected to the channel!');
                  const stream = fs.createReadStream('./Oof.mp3');
                  const voice=connection.playArbitraryInput("https://www.youtube.com/watch?v=OLXQtCl86kw");
                  voice.on("end",() => {
                      connection.channel.leave();
                  })
                })
                .catch(console.log);
          }
        else if (ms === '/leave') {
            // Only try to join the sender's voice channel if they are in one themselves
            const member = msg.guild.member(client.user);
            member.setVoiceChannel(null)
                .then(connection => { // Conn// ection is an instance of VoiceConnection
                    msg.reply('I have successfully left the channel!');
                })
                .catch(console.log);
        }
    }
});

client.login(process.env.TOKEN);
