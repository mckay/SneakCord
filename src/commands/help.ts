// Imports
import Discord from "discord.js";
import { Command } from "discord-akairo";
import paginationEmbed from "discord.js-pagination";

class HelpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help"],
    });
  }

  pageOne = new Discord.MessageEmbed()
    .setColor("#5761C9")
    .setTitle("Help Page 1");

  pageTwo = new Discord.MessageEmbed()
    .setColor("#5761C9")
    .setTitle("Help Page 2");

  pageThree = new Discord.MessageEmbed()
    .setColor("#5761C9")
    .setTitle("Help Page 2");

  pages = [this.pageOne, this.pageTwo, this.pageThree];

  exec(message: any) {
    return paginationEmbed(message, this.pages);
  }
}

module.exports = HelpCommand;
export {};
