# ThreatLens 🔍
### URL Intelligence Platform — AI-Powered Threat Detection

![ThreatLens](https://img.shields.io/badge/ThreatLens-URL%20Scanner-00d4ff?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)
![Free](https://img.shields.io/badge/100%25-Free-00ff88?style=for-the-badge)

---

## 🛡️ What is ThreatLens?

ThreatLens is an AI-powered URL security analyser that instantly detects phishing, malware, brand impersonation, typosquatting, and 20+ other threat signals in any URL — all in under 3 seconds.

---

## ✨ Features

- **20+ Threat Checks** — SSL, TLD risk, raw IP, brand spoofing, typosquatting, phishing keywords, executable files, URL encoding, open redirects, and more
- **AI Threat Report** — AI generates a professional 3-paragraph threat narrative
- **Animated Risk Score** — 0–100 score with SAFE / SUSPICIOUS / DANGEROUS verdict
- **3 Pie Charts** — Security checks, threat severity, risk vs safe breakdown
- **URL Structure Breakdown** — Visual colour-coded scheme/host/path/query
- **Domain Intelligence** — Registrar, country, IP, TLD, subdomain info
- **12-point Security Checklist** — Pass/Warn/Fail for every check

---

## 📁 Project Structure

```
/
├── index.html         ← Full frontend (scanner, charts, results)
├── vercel.json        ← Vercel deployment config
├── package.json       ← ESM module config (fixes build warnings)
├── README.md          ← You are here
└── api/
    └── analyse.js     ← Serverless function — calls Cohere AI
```

---

## 🚀 Deploy to Vercel (5 minutes)

### Step 1 — Fork or upload to GitHub
Upload all files to the **root** of your GitHub repository.  
For `api/analyse.js` — create a new file and type `api/analyse.js` as the filename (GitHub auto-creates the folder).

### Step 2 — Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import** next to your GitHub repo
3. Leave all settings as default
4. Click **Deploy**

### Step 3 — Add your API Key
1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add the following:

| Name | Value |
|------|-------|
| `COHERE_API_KEY` | Your key from [dashboard.cohere.com](https://dashboard.cohere.com) |

3. Tick **Production**, **Preview**, and **Development**
4. Click **Save**

### Step 4 — Redeploy
Go to **Deployments** → click `...` → **Redeploy**

✅ Your site is live!

---

## 🔑 Getting a Free Cohere API Key

1. Go to **[dashboard.cohere.com](https://dashboard.cohere.com)**
2. Sign up with Google (one click, no credit card)
3. Your API key is shown immediately on the dashboard
4. Copy it and paste into Vercel Environment Variables

**Free tier:** 1,000 requests/month — more than enough.

---

## 🏗️ How It Works

```
User enters URL
      ↓
Frontend (index.html) parses & analyses URL locally
      ↓
20+ threat checks run in browser (instant, no API needed)
      ↓
Results rendered: score, charts, flags, checklist
      ↓
Frontend sends prompt to /api/analyse (backend)
      ↓
Backend (api/analyse.js) calls Cohere AI with secret key
      ↓
AI returns 3-paragraph threat narrative
      ↓
User sees full threat report
```

### Why a backend?
The AI API key must stay secret. If it were in `index.html`, anyone could steal it. The serverless function acts as a secure proxy — the frontend never touches the key directly.

---

## 🧪 Test URLs

| URL | Expected Result |
|-----|----------------|
| `https://google.com` | ✅ SAFE — score 0 |
| `https://github.com` | ✅ SAFE — score 0 |
| `http://paypal-secure-login.tk/verify/account` | 🚨 DANGER — score 100 |
| `http://192.168.1.1/admin/login` | 🚨 DANGER — score 100 |
| `https://g00gle-login.com/verify/password` | 🚨 DANGER — score 90 |
| `https://microsoft-account-verify.xyz/signin` | 🚨 DANGER — score 100 |
| `https://suspicious-site.xyz` | ⚠️ SUSPICIOUS — score 15 |

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Charts | Chart.js 4.4.1 |
| Fonts | Google Fonts (Orbitron, Syne, Share Tech Mono) |
| Backend | Vercel Serverless Functions (Node.js) |
| AI | Cohere `command-r-plus` |
| Hosting | Vercel (free tier) |

---

## 🔍 Threat Checks Explained

| # | Check | What It Detects |
|---|-------|----------------|
| 1 | HTTPS | Missing SSL encryption |
| 2 | Raw IP | IP address used instead of domain |
| 3 | Bad TLD | `.tk`, `.ml`, `.ga`, `.cf`, `.gq` and more |
| 4 | Suspicious TLD | `.xyz`, `.top`, `.club`, `.info` and more |
| 5 | Brand Impersonation | Fake PayPal, Google, Apple, Amazon etc. |
| 6 | Typosquatting | `g00gle`, `paypa1`, `facebok` etc. |
| 7 | Phishing Keywords | login, verify, account, password, suspended |
| 8 | Subdomain Depth | Too many subdomain levels |
| 9 | Hyphen Abuse | Multiple hyphens in domain name |
| 10 | URL Length | Unusually long URLs |
| 11 | Executable Files | `.exe`, `.bat`, `.ps1`, `.vbs`, `.jar` |
| 12 | Archive Files | `.zip`, `.rar`, `.iso`, `.dmg` |
| 13 | @ Symbol | Used to disguise real destination |
| 14 | URL Encoding | Percent-encoded obfuscation |
| 15 | Open Redirect | `redirect=`, `url=`, `goto=` params |
| 16 | Domain in Path | `evil.com/paypal.com/login` trick |
| 17 | Numeric Domain | All-number domain names |
| 18 | Long Subdomain | Malware C2 subdomain patterns |
| 19 | Data/JS URI | Code injection attempts |
| 20 | Auto-generated Domain | `random-words-joined.com` patterns |

---

## 🛠️ Troubleshooting

**404 error on site**
→ Make sure all 4 files are at the **root** of your GitHub repo, not inside a subfolder.

**AI analysis shows error**
→ Check `COHERE_API_KEY` is set in Vercel → Settings → Environment Variables, then redeploy.

**ESM build warning**
→ Make sure `package.json` exists in root with `"type": "module"`.

**Changes not showing**
→ After updating environment variables, always manually redeploy: Deployments → `...` → Redeploy.

---

## 📄 License

Built for educational and security awareness purposes.

---

*ThreatLens — URL Intelligence Platform — Built with purpose*
