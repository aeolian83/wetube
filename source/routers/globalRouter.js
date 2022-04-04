import express from "express";
import { home } from "../cotrollers/videoController";
import { join, login } from "../cotrollers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;

