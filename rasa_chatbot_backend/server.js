const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Google Gemini API Key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = process.env.GEMINI_API_URL;

// Define the Strict Prompt Template
const PROMPT_TEMPLATE = (rasaResponse) => `
Improve the chatbot response below to be more natural, engaging, and concise. Give in simple language. Make the response a bit longer.

Original Response: "${rasaResponse}"

Provide the improved response in **only one sentence**, without any extra options, explanations, or formatting.

Improved Response:
`;

// POST endpoint to forward messages to Google Gemini
app.post("/send-to-gemini", async (req, res) => {
  try {
    const { input_value } = req.body;

    if (
      !input_value ||
      typeof input_value !== "string" ||
      input_value.trim() === ""
    ) {
      return res
        .status(400)
        .json({ error: "Invalid input: Text must be a non-empty string." });
    }

    const formattedPrompt = PROMPT_TEMPLATE(input_value);

    console.log("➡️ Sending to Gemini:", formattedPrompt);

    const response = await axios.post(
      GEMINI_API_URL,
      {
        contents: [{ parts: [{ text: formattedPrompt }] }],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    // Extract response text from Gemini API
    const geminiMessage =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini API";

    console.log("✅ Gemini Response:", geminiMessage);
    res.json({ message: geminiMessage });
  } catch (error) {
    console.error(
      "❌ Error sending to Gemini:",
      error.response?.data || error.message
    );
    res
      .status(500)
      .json({ error: error.response?.data || "Internal Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
});
