# ThreatLens 🔍
### AI-Powered URL Intelligence Analyser

Built for Hackathon — powered by Claude AI

## 📁 Repo Structure
```
/
├── index.html        ← Main frontend
├── api/
│   └── analyse.js   ← Vercel serverless function (Claude API proxy)
├── vercel.json       ← Vercel config
└── README.md
```

## 🚀 Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the GitHub repo
4. **Add Environment Variable:**
   - Name: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-...` (from console.anthropic.com)
5. Click Deploy

## ✨ Features
- URL Structure Analysis
- SSL / HTTPS Detection
- Phishing & Brand Impersonation Detection
- Domain Intelligence
- Threat Scoring (0–100)
- AI-powered narrative analysis via Claude
