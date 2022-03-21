import express from "express";
import { trending, search } from "../cotrollers/videoController";
import { join, login } from "../cotrollers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;

