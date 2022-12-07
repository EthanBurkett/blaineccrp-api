import express, { Express } from "express";
import routes from "../routes";
import cors from "cors";
import session from "express-session";
import config from "../config";
import passport from "passport";
import store from "connect-mongo";
require("../strategies/discord");

export const createApp = (): Express => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      origin: [
        "https://www.blaineccrp.com",
        "https://blaineccrp.com",
        "http://localhost:3000",
      ],
      credentials: true,
    })
  );

  app.use(
    session({
      secret: config.cookieSecret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
      store: new store({ mongoUrl: config.mongo }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/v2", routes);
  return app;
};
