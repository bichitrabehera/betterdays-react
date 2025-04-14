const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to list available models (for debugging)
async function listAvailableModels() {
  try {
    const client = genAI;
    const models = await client.listModels();
    console.log("Available Models:", models);
    return models;
  } catch (error) {
    console.error("Error listing models:", error);
    throw error;
  }
}

app.get('/', (req, res) => {
  res.send("server running")
})

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // First try the newest model names
    const modelNamesToTry = [
      "gemini-1.5-pro-latest",  // Most recent model
      "gemini-pro",            // Try the old name just in case
      "models/gemini-pro"       // Some versions need this format
    ];

    let lastError = null;

    for (const modelName of modelNamesToTry) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        return res.json({ reply: text });
      } catch (error) {
        lastError = error;
        console.log(`Attempt with model ${modelName} failed, trying next...`);
      }
    }

    // If all attempts failed
    console.error("All model attempts failed:", lastError);
    const availableModels = await listAvailableModels();

    res.status(500).json({
      error: "Failed to generate content",
      details: lastError.message,
      availableModels: availableModels
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: error.message || "AI service error",
      details: error.errorDetails
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));