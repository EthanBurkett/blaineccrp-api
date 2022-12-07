import { Strategy } from "passport-discord";
import passport from "passport";
import config from "../config";

passport.use(
  new Strategy(
    {
      clientID: config.Discord.clientID,
      clientSecret: config.Discord.clientSecret,
      callbackURL: config.Discord.redirectUri,
      scope: ["identify", "email", "guilds"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken);
    }
  )
);
