const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot Aktif :  ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('message', message => { 
	
	function rasteleSembol(uzunluk, semboller) {

var maske = '';

if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

if (semboller.indexOf('0') > -1) maske += '0123456789';


var sonuc = '';

 

for (var i = uzunluk; i > 0; --i) 

{

sonuc += maske[Math.floor(Math.random() * maske.length)];

}

return sonuc;

}

function spamla(){
	message.channel.send("https:/"+"/discord.gift/" + rasteleSembol(16,'0aA'));
}

	if (message.channel.id = "719203785968189510"){
		if(message.content.startsWith("fynx!nitro")){
		try{
		var veri = message.content.toString();
		var veriSn = veri.substring(10)
 		var saniye = parseInt(veriSn);
 		var saniye1 = saniye * 1000;
		if (saniye > 1){
		setInterval(spamla, saniye1);
		}
		
		else{
			message.reply("Bir Hata Oluştu. Bu Arada En Az 2 Saniye Girmelisin");
		}
		}
		catch(err){
			message.channel.send("bir hata oluştu!");
		}
		}
		}
 	


});

client.login('NzE5MjI1MDcyODYyMzYzNjkw.Xt0UpQ.IDdYZsxDEkY4Y934htlX4rfGpbk'); //BURAYA BOTUN TOKENİNİ YAZ

/////////////////////lordcreative
