// ============================================================
//  api/analyse.js  — Backend AI handler
//  This runs on Vercel's servers (not in the browser).
//
//  WHAT THIS FILE DOES (simple explanation):
//  1. The frontend sends us a POST request with a "prompt"
//  2. We forward that prompt to the Cohere AI API
//  3. Cohere sends back an AI-generated analysis
//  4. We send that analysis back to the frontend
// ============================================================

// This lets us use "fetch" to call external APIs (built into Node 18+)
// No extra imports needed — Vercel uses Node 18 by default.

export default async function handler(request, response) {

  // ── STEP 1: Only allow POST requests ──
  // If someone tries to visit /api/analyse in a browser (GET), reject it.
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Only POST requests allowed" });
  }

  // ── STEP 2: Read the prompt sent from the frontend ──
  // request.body is the data the frontend sent us
  const { prompt } = request.body;

  // If no prompt was sent, return an error
  if (!prompt) {
    return response.status(400).json({ error: "No prompt provided" });
  }

  // ── STEP 3: Get the API key from environment variables ──
  // NEVER hardcode your API key in code — use environment variables instead.
  // In Vercel: Settings → Environment Variables → Add COHERE_API_KEY
  const apiKey = process.env.COHERE_API_KEY;

  if (!apiKey) {
    return response.status(500).json({
      error: "COHERE_API_KEY not set. Add it in Vercel → Settings → Environment Variables"
    });
  }

  // ── STEP 4: Call the Cohere AI API ──
  // We send the prompt to Cohere and ask it to generate a response.
  try {
    const cohereResponse = await fetch("https://api.cohere.com/v2/chat", {
      method: "POST",

      // Headers tell the API who we are and what format we're sending
      headers: {
        "Authorization": `Bearer ${apiKey}`,  // Our API key
        "Content-Type": "application/json"     // We're sending JSON data
      },

      // Body is the actual data we send to Cohere
      body: JSON.stringify({
        model: "command-r-plus",   // The AI model to use (smart & fast)
        messages: [
          {
            role: "user",
            content: prompt        // The prompt our frontend built
          }
        ],
        max_tokens: 500            // Max length of the AI's reply
      })
    });

    // ── STEP 5: Read Cohere's response ──
    const data = await cohereResponse.json();

    // If Cohere returned an error, pass it along
    if (!cohereResponse.ok) {
      return response.status(500).json({
        error: data.message || "Cohere API error"
      });
    }

    // Extract the actual text from Cohere's response structure
    // Cohere returns: { message: { content: [ { text: "..." } ] } }
    const text = data.message.content[0].text;

    // ── STEP 6: Send the AI text back to the frontend ──
    return response.status(200).json({ text });

  } catch (error) {
    // If anything went wrong (network error, etc.), send an error back
    return response.status(500).json({ error: error.message });
  }
}
