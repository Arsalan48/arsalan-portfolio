import "dotenv/config";
import express from "express";
import cors from "cors";
import Anthropic from "@anthropic-ai/sdk";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are an AI assistant for Syed Arsalan Askari Naqvi's portfolio website. Arsalan is a CS graduate from UMT Lahore. His skills are MERN Stack, React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, ASP.NET MVC, Machine Learning and Computer Vision. His experience includes 9 months as MERN stack trainee at EVS and 6 weeks as ASP.NET MVC Intern at PEL. His projects include Signify which is an ASL sign language Translator, Car Rental System in C++, Website Clone and EVS Clone Website. Answer all questions about Arsalan professionally and helpfully.`;

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "message field is required" });
  }

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: message }],
    });

    const reply = response.content[0]?.text ?? "";
    res.json({ reply });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      return res.status(401).json({ error: "Invalid API key" });
    }
    if (error instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: "Rate limit exceeded" });
    }
    console.error("Anthropic API error:", error.message);
    res.status(500).json({ error: "Failed to get response from Anthropic" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
