export default async function handler(request, response) {
  // Only allow POST requests
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = request.body;

  if (!prompt) {
    return response.status(400).json({ error: "No prompt provided" });
  }

  const apiKey = process.env.COHERE_API_KEY;

  if (!apiKey) {
    return response.status(500).json({
      error: "COHERE_API_KEY environment variable not configured"
    });
  }

  try {
    const cohereResponse = await fetch("https://api.cohere.com/v2/chat", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "command-r-plus",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 500
      })
    });

    const data = await cohereResponse.json();

    if (!cohereResponse.ok) {
      return response.status(500).json({
        error: `Cohere API error: ${data.message || data.error || 'Unknown error'}`
      });
    }

    // Handle Cohere's response structure
    let text = data.text;
    if (!text && data.message?.content?.[0]?.text) {
      text = data.message.content[0].text;
    }

    if (!text) {
      return response.status(500).json({
        error: "No text in AI response"
      });
    }

    return response.status(200).json({ text });

  } catch (error) {
    return response.status(500).json({
      error: `Server error: ${error.message}`
    });
  }
}
