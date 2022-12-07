import { Router } from "express";
const router = Router();
import auth from "./auth";
import users from "./users";

router.use("/auth", auth);
router.use("/users", users);

export default router;
