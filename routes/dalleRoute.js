import express from "express";
import { addDalle, getAllDalle } from "../controller/dalleController.js";

export const dalleRouter = express.Router();

// GET
dalleRouter.get("/", getAllDalle);

// // POST
dalleRouter.post("/", addDalle);
