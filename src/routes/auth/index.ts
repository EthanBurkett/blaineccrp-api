import { Router } from "express";
const router = Router();
import passport from "passport";
import { client } from "../../";
import config from "../../config";

router.get("/discord", passport.authenticate("discord"), (req, res) => {
  res.send(200);
});

router.get(
  "/discord/redirect",
  passport.authenticate("discord"),
  (req, res) => {
    res.redirect(config.clientUrl);
  }
);

router.get("/status", async (req, res) => {
  console.log((req.user as any).discordId);
  const guild = client.guilds.cache.get(config.Discord.guildId);
  // const user = (await client.guilds.cache
  //   .get(config.Discord.guildId)
  //   ?.members.fetch({ user: (req.user as any).discordID })
  //   .catch(() => res.status(404).send({ error: "User not found" }))) as any;

  // if (!user) res.status(404).send({ error: "User not found" });

  return req.user
    ? res.send(guild)
    : res.status(401).json({ error: "Unauthorized" });
});
export default router;
