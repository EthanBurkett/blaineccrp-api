import { Router } from "express";
const router = Router();
import passport from "passport";

router.get("/discord", passport.authenticate("discord"), (req, res) => {
  res.send(200);
});

router.get(
  "/discord/redirect",
  passport.authenticate("discord"),
  (req, res) => {
    res.send({ msg: "Success" });
  }
);
export default router;
