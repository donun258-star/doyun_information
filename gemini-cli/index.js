// This script runs a Gemini model with a user-provided prompt.
import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function runGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  console.log("Gemini says:\n", text);
}

const userPrompt = process.argv.slice(2).join(" ") || "Hello Gemini!";
runGemini(userPrompt);

