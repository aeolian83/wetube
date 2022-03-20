import express from "express";
import { trending } from "../cotrollers/videoController";
import { join } from "../cotrollers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;

