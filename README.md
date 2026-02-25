# 🔍 ThreatLens — URL Intelligence Platform

A cybersecurity tool that scans URLs for threats and gives AI-powered analysis.

---

## 📁 Project Structure (What each file does)

```
threatlens/
│
├──
│   └── index.html        ← The FRONTEND (what users see in the browser)
│
├── api/
│   └── analyse.js        ← The BACKEND (hidden server code, calls the AI)
│
├── vercel.json           ← Tells Vercel how to deploy the project
├── package.json          ← Lists tools/dependencies the project needs
└── README.md             ← This file!
```

---

## 🧠 How it works (Simple Explanation)

Think of it like a restaurant:

| Restaurant        | ThreatLens          |
|-------------------|---------------------|
| Customer          | User in browser     |
| Waiter            | `index.html`        |
| Kitchen           | `api/analyse.js`    |
| Ingredient supplier | Cohere AI API    |

1. **User** types a URL and clicks "Scan URL"
2. **index.html** (frontend) runs JavaScript to check the URL for red flags
3. **index.html** then sends the findings to our backend at `/api/analyse`
4. **api/analyse.js** (backend) receives those findings and calls Cohere AI
5. **Cohere AI** writes a human-readable threat report
6. The report travels back to the browser and appears on screen

---



## 🔑 Environment Variables

| Variable Name    | Where to get it          | What it does              |
|-----------------|--------------------------|---------------------------|
| `COHERE_API_KEY` | cohere.com → API Keys   | Lets us call Cohere's AI  |

---

## ❓ Common Questions

**Q: The AI analysis shows an error. What do I do?**
A: You probably forgot to add the `COHERE_API_KEY` environment variable in Vercel, or didn't redeploy after adding it.

**Q: Can I use a different AI (like OpenAI / GPT)?**
A: Yes! In `api/analyse.js`, replace the Cohere fetch call with the OpenAI API. The structure is similar — you just change the URL and the request body format.

**Q: Is my API key safe?**
A: Yes! It lives in Vercel's environment variables (server-side only). It NEVER gets sent to the browser. Users cannot see it.

**Q: What's the difference between frontend and backend?**
A: 
- **Frontend** (`index.html`) = code that runs IN the user's browser. Users can see this code.
- **Backend** (`api/analyse.js`) = code that runs on Vercel's SERVERS. Users cannot see this code. This is where we safely hide the API key.

---


---

Built with ❤️ using HTML, CSS, JavaScript, Three.js, Chart.js, and Cohere AI.
