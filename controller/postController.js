import expressAsyncHandler from "express-async-handler";
import Post from "../model/Post.js";
import { cloudinaryUploadImg } from "../config/clodinary.js";

export const getAllPost = expressAsyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ success: true, data: posts });
  } catch (err) {
    throw new Error(err);
  }
});

export const addPost = expressAsyncHandler(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinaryUploadImg(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.json({ success: true, data: newPost });
  } catch (err) {
    throw new Error(err);
  }
});
