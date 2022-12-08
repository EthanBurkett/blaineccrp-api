import { Router } from "express";
const router = Router();
import { client } from "../..";
import config, { perms, roles } from "../../config";

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await client.guilds.cache
    .get(config.Discord.guildId)
    ?.members.fetch({ user: id })
    .catch((e) => {
      console.log(e);
    });
  if (!user) return res.status(404).send({ error: "User not found" });

  return res.send(user);
});

router.get("/:id/perms", async (req, res) => {
  const { id } = req.params;
  const user = await client.guilds.cache
    .get(config.Discord.guildId)
    ?.members.fetch({ user: id })
    .catch((e) => {
      console.log(e);
    });
  if (!user) return res.status(404).send({ error: "User not found" });

  return res.send(perms.getPermissions(user));
});

router.get("/:id/roles", async (req, res) => {
  const { id } = req.params;
  const user = await client.guilds.cache
    .get(config.Discord.guildId)
    ?.members.fetch({ user: id })
    .catch((e) => {
      console.log(e);
    });
  if (!user) return res.status(404).send({ error: "User not found" });

  return res.send(roles.getRole(user));
});

export default router;
