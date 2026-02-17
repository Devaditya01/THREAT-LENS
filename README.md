# ThreatLens 🔍
**AI-Powered URL Intelligence Platform**

Analyse any URL for phishing, malware, SSL vulnerabilities, and domain threats using advanced AI reasoning.

## 📁 Repository Structure
```
/
├── index.html        ← Main frontend (ROOT of repo)
├── vercel.json       ← Vercel config
├── package.json      ← ESM module config
├── README.md
└── api/
    └── analyse.js    ← Groq AI serverless function
```

## 🚀 Deploy to Vercel

1. Push repo to GitHub (files at ROOT, not inside a subfolder)
2. Go to [vercel.com/new](https://vercel.com/new) → Import repo
3. Add Environment Variable:
   - **Name:** `GROQ_API_KEY`
   - **Value:** your key from [console.groq.com](https://console.groq.com) (FREE)
4. Click Deploy ✅

## 🆓 Get Free Groq API Key
1. Go to https://console.groq.com
2. Sign up with Google or GitHub
3. Click API Keys → Create API Key
4. Copy and paste into Vercel Environment Variables

## ✨ Features
- URL Structure Analysis (scheme, host, path, query)
- SSL / HTTPS Detection
- Phishing & Brand Impersonation Detection
- Domain Intelligence
- Threat Scoring 0–100 with animated ring
- AI-powered threat narrative via Groq (FREE — 14,400 req/day)
