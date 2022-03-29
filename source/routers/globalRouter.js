import express from "express";
import { trending } from "../cotrollers/videoController";
import { join, login } from "../cotrollers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;

