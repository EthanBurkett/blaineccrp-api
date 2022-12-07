import config from "./config";
import { createApp } from "./utils/createApp";
const port = config.port;
import "./database";
import DiscordJS from "discord.js";

const client = new DiscordJS.Client({
  intents: [
    DiscordJS.IntentsBitField.Flags.Guilds,
    DiscordJS.IntentsBitField.Flags.GuildMembers,
  ],
});

client.on("ready", () => {
  console.log(`${client.user!.tag} is online.`);
});

async function main() {
  try {
    const app = createApp();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

client.login(config.Discord.botToken);

export { client };
main();
