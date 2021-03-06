
module.exports = {
    name: "spymaster",
    description: "Become the spymaster!",
    requiresGame: true,
    exe(message, args, handler) {
        if (message.channel.game.started) return message.channel.send("**✖ | The game has already started!**");
        if (!message.author.team) return message.channel.send("**✖ | You must be in a team!**")
        if (message.author.team.spymaster && message.author.team.spymaster.id == message.author.id) return message.channel.send("**✖ | You are already the spymaster for your team!**");
        message.author.team.setSpymaster(message.author);
        message.channel.send(`**✔ | You are now the spymaster for the \`${message.author.team}\` team!**`);
    }
}