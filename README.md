# ThreatLens 🔍
### AI-Powered URL Intelligence Analyser — Hackathon Build

Powered by **Google Gemini AI** (Free API)

## 📁 Repo Structure
```
/
├── index.html        ← Main frontend (put at ROOT of repo)
├── api/
│   └── analyse.js   ← Vercel serverless function (Gemini proxy)
├── vercel.json       ← Vercel config
└── README.md
```

## 🚀 Deploy to Vercel via GitHub

1. Push this repo to GitHub (files at ROOT, not inside a folder)
2. Go to [vercel.com/new](https://vercel.com/new) → Import repo
3. Add Environment Variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** your key from [aistudio.google.com](https://aistudio.google.com) (FREE)
4. Click Deploy ✅

## 🆓 Get Free Gemini API Key
1. Go to https://aistudio.google.com
2. Sign in with Google
3. Click "Get API Key" → "Create API Key"
4. Copy and paste into Vercel Environment Variables

## ✨ Features
- URL Structure Analysis
- SSL / HTTPS Detection  
- Phishing & Brand Impersonation Detection
- Domain Intelligence (WHOIS)
- Threat Scoring 0–100
- AI-powered analysis via Gemini (FREE)
