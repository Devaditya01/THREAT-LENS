# 🔍 ThreatLens — URL Intelligence Platform

A cybersecurity tool that scans URLs for threats and gives AI-powered analysis.

---

## 📁 Project Structure (What each file does)

```
threatlens/
│
├── public/
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

## 🚀 How to Deploy on Vercel (Step by Step)

### Step 1 — Get a free Cohere API key
1. Go to [cohere.com](https://cohere.com) and sign up (free)
2. Go to **API Keys** in your dashboard
3. Click **"New Trial Key"** and copy it — looks like: `abc123xyz...`

### Step 2 — Upload to GitHub
1. Go to [github.com](https://github.com) and create a free account
2. Click the **+** button → **New repository**
3. Name it `threatlens`, make it **Public**, click **Create**
4. Upload all these files (drag & drop in the browser works!)

### Step 3 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **"Add New Project"**
3. Select your `threatlens` GitHub repository
4. Click **"Deploy"** — Vercel will build it automatically!

### Step 4 — Add your API Key (IMPORTANT!)
After deploying:
1. Go to your project in Vercel
2. Click **Settings** → **Environment Variables**
3. Click **"Add"**
4. Name: `COHERE_API_KEY`
5. Value: (paste your Cohere key here)
6. Click **Save**
7. Go to **Deployments** → click the three dots on the latest deployment → **Redeploy**

✅ **Done! Your site is now live with AI analysis working.**

---

## 🛠️ How to Test Locally (On Your Computer)

### You need Node.js installed first
Download from [nodejs.org](https://nodejs.org) (LTS version)

### Then run these commands in your terminal:
```bash
# 1. Go into the project folder
cd threatlens

# 2. Install the Vercel tool
npm install

# 3. Create a .env.local file for your API key (only for local testing)
echo "COHERE_API_KEY=your_key_here" > .env.local

# 4. Start the local development server
npm run dev

# 5. Open http://localhost:3000 in your browser
```

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

## 💡 Beginner Tips

- **Never** put your API key directly in `index.html` — users could steal it!
- The `api/` folder is special — Vercel automatically turns every `.js` file in it into a backend endpoint
- `vercel.json` is the "instruction manual" that tells Vercel what to do with your files
- `package.json` is like a shopping list of tools your project needs

---

Built with ❤️ using HTML, CSS, JavaScript, Three.js, Chart.js, and Cohere AI.
