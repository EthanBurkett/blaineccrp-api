import { GuildMember } from "discord.js";
import { Router } from "express";
import applicationTemplate from "../../models/applicationTemplate";
import { client } from "../..";
import config from "../../config";
import applicationModel, { Application } from "../../models/application.model";
const router = Router();

router.get("/", async (req, res) => {
  const apps = await applicationModel.find({});
  const users: {
    user: GuildMember;
    app: Application;
  }[] = [];
  const AllMembers = await client.guilds.cache
    .get(config.Discord.guildId)
    ?.members.fetch()
    .then((members) => members);

  for (const App in apps) {
    const app = apps[App];

    const user = AllMembers?.get(app.discordID);

    if (user) users.push({ user, app });
  }

  return res.send(users);
});

router.get("/discord", async (req, res) => {
  const AllMembers = await client.guilds.cache
    .get(config.Discord.guildId)
    ?.members.fetch()
    .then((members) => members);
  const array = Array.from(AllMembers?.values() || []);
  return res.send(array);
});

router.post("/create", async (req, res) => {
  const { fields, title, description } = JSON.parse(req.body.data);

  console.log(fields);

  await applicationTemplate
    .create({
      title,
      description,
      fields,
      available: true,
    })
    .catch((e) => {
      console.log(e);
      res.send({ error: "Error creating template" });
    });

  res.send({ msg: "Success" });
});

export default router;
