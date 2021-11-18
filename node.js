const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '!';

bot.login('xd@gjdsighsdgh');

bot.on('ready', () => {
    console.log('Culture is online!');
    bot.user.setActivity("!help", {
        type: 'LISTENING',
        //type: 'STREAMING',
        //url: 'https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl'
    }).catch(console.error);
})

var version = '1.2.0';
bot.login(process.env.token); 

bot.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'MEMBERS');
    guildMember.roles.add(welcomeRole);

    const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Culture')
            .setURL('https://discord.gg/s94QKV5X')
            .setAuthor(guildMember.user.username, guildMember.user.avatarURL())
            .setDescription('Welcome to our server!')
            .setThumbnail('https://raw.githubusercontent.com/joaoafonso02/MyDiscordBot/master/Tumblr.jpeg')
            .setTimestamp()
            .setFooter('Enjoy!', 'https://raw.githubusercontent.com/joaoafonso02/MyDiscordBot/master/Tumblr.jpeg');
    guildMember.guild.channels.cache.get('842181491110445066').send(embed);
    
});

bot.on('message', message => {

let args = message.content.substring(PREFIX.length).split(" ");
let isBotOwner = message.author.id == '426396912179085342';

    switch(args[0]) {
        case 'restart': 
            if (!isBotOwner)
              return;
      
            message.channel.send('Restarting...').then(m => {
              client.destroy().then(() => {
                client.login('token');
              });
            });
            break;
        
        case 'cole':
            //message.reply('pong!');
            //message.channel.send('Cole is the G.O.A.T!')
            if(message.author.bot) return;
            message.reply(' Masterpiece incoming:\n')
            message.channel.send({files: ['jcolelyrics.txt']})
            break;
        case 'joeyBadA$$':
            message.reply('\n`Turn on to CNN, look at what I see again\nIt´s another black man, died at the white hand of justice\nTo tell the truth, man, I´m fuckin´ disgusted\nI fear for the lives, for my sisters, my brothers`')
            break;
        case 'playlist1':
            message.channel.send('hhttps://open.spotify.com/playlist/37i9dQZF1E3a7gEsiPSsJK?si=ld3QZzr0Seis3MJrYQB69A')
            break;
        case 'playlist2':
            message.channel.send('https://open.spotify.com/playlist/37i9dQZF1E35AGKJmTvOhH?si=UOU6rY6LSsyF7jhCZV43tw')
            break;
        case 'playlist3':
            message.channel.send('https://open.spotify.com/playlist/37i9dQZF1E37gBtcM1AyHs?si=a5vTNhuWR0CyZCJQKgTFgw')
            break;
        case 'playlist4':
            message.channel.send('https://open.spotify.com/playlist/37i9dQZF1E36LCMX6sJtee?si=itF6ssfLTYmjDUk6JTfbCw')
            break;
        case 'playlist5':
            message.channel.send('https://open.spotify.com/playlist/37i9dQZF1E36n6aINwStVg?si=GWRWlZw0RT6KtRxKjqXK0w')
            break;  
        case 'playlist6':
            message.channel.send('https://open.spotify.com/playlist/37i9dQZF1EQn2GRFTFMl2A?si=F_3qscF-TVmZpkvbnFhO_Q')
            break;  
            
        case 'randomplaylist':
            const playlists = [
                'https://open.spotify.com/playlist/37i9dQZF1EIVSv8G8vxtQ6?si=iY3S8rKBTXmTTGpgkQm0og',
                'https://open.spotify.com/playlist/56ieinbdJNfGnaLz1os2Ch?si=Z5fDixMWQjSZmu0UZjHxsg',
                'https://open.spotify.com/playlist/6U3zl5I7Qq34DcrvUdtdq2?si=HwUJa_cJTU27SIsAXwt27A',
                'https://open.spotify.com/playlist/37i9dQZF1EQoqCH7BwIYb7?si=X-u6CnQuQUqfkmzlry36KQ',
                'https://open.spotify.com/playlist/37i9dQZF1EQqZlCxLOykhS?si=u5Bq8U7ESfavbe3d7jaTNQ',
                'https://open.spotify.com/playlist/37i9dQZF1EIXwkdkoDV3G5?si=Tc_PfkJVSJKWsBZpFrr3WQ',
                'https://open.spotify.com/playlist/37i9dQZF1EIYnLZCOv8epT?si=KWxMHwApRuCJq9uqUznJ4A',
                'https://open.spotify.com/playlist/1v0Gnu2um9ZcRmntJ5jAjZ?si=svYDMbBeQqKsn0mylisyOw',
                'https://open.spotify.com/playlist/6A8Fn3nSCDmBj1SGaRy1Wv?si=0HUOHe3BT7qM3QnvCwMt4Q',
                'https://open.spotify.com/playlist/0sGYJV5EvhteqK6l9xZY55?si=NHZZq3ZMQySnR5P_zqIZ8Q',
                'https://open.spotify.com/playlist/37i9dQZF1EQqA6klNdJvwx?si=ay2DdE1STlyJH3IbEmjQuA',
                'https://open.spotify.com/playlist/2nnUcLqZxuwJFFp63BB11p?si=rA_6pyJ6Rn6nBfo8Y0DQiw', 
                'https://open.spotify.com/playlist/37i9dQZF1E3agrWVKA5qbv?si=909cSzCCRRWu5ZoWb8Hr8A',
                'https://open.spotify.com/playlist/37i9dQZF1E3agrWVKA5qbv?si=uSAGfuwDQmGLrQg1P_6wvg',
                'https://open.spotify.com/playlist/37i9dQZF1EQn4jwNIohw50?si=jlrc4OmuTci1u_jgiC7Kpw'
                // You can add as many as you want
               ];
               // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
            const response = playlists[Math.floor(Math.random() * playlists.length)];
            message.reply(response);
            break;  

        case 'pegaAqui':
            if(message.author.bot) return;
                message.reply(' pega' , {files: ["https://cdn.discordapp.com/attachments/830457950660198460/830850809793085460/yo.png"]})
            break;
        case 'sunset': 
            if (args[1] === 'lover')
                message.reply(' pega' , {files: ["https://cdn.discordapp.com/attachments/830457950660198460/830850809793085460/yo.png"]})
            else if (args[1] === '') break;
            else break;
            break;
        
        case 'help':
            const embed1 = new Discord.MessageEmbed()
            .setColor('#66ff33')
            .setTitle('Commands - Help')
            .setURL('https://discord.gg/s94QKV5X')
            .setAuthor(message.author.username)
            .setThumbnail('https://raw.githubusercontent.com/joaoafonso02/MyDiscordBot/master/Tumblr.jpeg')
            .addFields(
                { name: 'Lyrics', value: '`!cole`\n`!joeyBadA$$`' },
                { name: 'Music Commands', value: '`!playlist#`\n`!randomplaylist`\n`!avatar`' },
                { name: 'Fun', value: '`!sunset lover`\n`!no cap`' },
                { name: 'Useful Commands', value: '`!info version`\n `!clear #`', inline: true },
            )
            .setTimestamp()
            .setFooter('Use the commands bitchezz!', 'https://raw.githubusercontent.com/joaoafonso02/MyDiscordBot/master/Tumblr.jpeg')
            message.channel.send(embed1);
            break;

        case 'info':
            if(args[1] === 'version') {
                message.channel.send("Bot version " + version)
            } else message.channel.send('Invalid Args u dumb!')
            break;

        case 'avatar':
            const embed2 = new Discord.MessageEmbed()
            .setTitle(message.author.username +'´s Avatar')
            .setImage(message.author.avatarURL());
            message.channel.send(embed2);
            break;
        case 'no':
            if (args[1] === 'cap')
                for (i = 0; i < 5; i++) {
                    if(i== 0) message.reply('no')
                    else message.channel.send(' :billed_cap:')
                }
            else if (args[1] === '') break;
            else break;
        case 'clear':
            if(!args[1]) return message.reply('Error, please define second arg')
            if(!message.member.roles.cache.some(role => role.name === "ADMIN")) {
                 return message.reply('You do not have permissions to clear!')
                 .then(message => message.delete({timeout: 35000}));
            }
                message.channel.bulkDelete(args[1]);
            break;
    }
})


