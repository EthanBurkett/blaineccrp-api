import { Router } from "express";
const router = Router();
import auth from "./auth";
import users from "./users";
import applications from "./applications";
import discord from "./discord";

router.use("/auth", auth);
router.use("/users", users);
router.use("/applications", applications);
router.use("/discord", discord);

export default router;
