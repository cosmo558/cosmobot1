const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'thenwar pls help') {
    msg.reply ('Hello I am cosmo bot will be finished by next week or the following week depending on work that needs to be done.');
  }
});

client.login('NzI5ODYyODc5NjY2MzcyNjg4.XwPH_g.oVgCsiXG8A7vhJ8Q8PNBI4ft13c');

