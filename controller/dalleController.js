import expressAsyncHandler from "express-async-handler";
import { Configuration, OpenAIApi } from "openai";

export const getAllDalle = expressAsyncHandler(async (req, res) => {
  res.json({ message: "Hello from DALL-E" });
});

export const addDalle = expressAsyncHandler(async (req, res) => {
  try {
    const { prompt } = req.body;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "512x512",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });

    res.json({ photo: image });
  } catch (err) {
    throw new Error(err);
  }
});
