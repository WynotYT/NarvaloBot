const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Gérer une team de boulets");
    console.log("Le bot a bien ete connecte");
})

bot.login("NDE5MzA2ODE2NDE0MDIzNjgw.DXuosA.saJr33sAksqGaOIN9K6XsSRn6eE");
