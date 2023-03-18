import express from "express";
import { addPost, getAllPost } from "../controller/postController.js";

export const postRouter = express.Router();

// // GET
postRouter.get("/", getAllPost);

// // POST
postRouter.post("/", addPost);
