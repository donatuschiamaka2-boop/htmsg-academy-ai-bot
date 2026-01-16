# HTMSG Academy Bot - Setup Guide

## 📚 Complete Step-by-Step Setup Instructions

This guide will walk you through setting up the AI automation system from scratch.

---

## 🎯 Prerequisites

Before starting, ensure you have:
- A computer (Windows, Mac, or Linux)
- Internet connection
- Basic understanding of copy/paste
- 30 minutes of setup time

---

## PART 1: Install Node.js

### Step 1: Download Node.js
1. Visit: https://nodejs.org
2. Click the **LTS version** (green button)
3. Download the installer for your operating system

### Step 2: Install Node.js
1. Run the downloaded installer
2. Click **Next** through all prompts
3. Accept the license agreement
4. Use default installation location
5. Click **Install**
6. Wait for installation to complete (may take 5-10 minutes)

### Step 3: Verify Installation
1. Open **Command Prompt** (Windows) or **Terminal** (Mac/Linux)
   - Windows: Press Windows key, type `cmd`, press Enter
   - Mac: Press Cmd+Space, type `terminal`, press Enter
2. Type: `node --version`
3. Press Enter
4. You should see something like: `v24.13.0`

✅ **Node.js is now installed!**

---

## PART 2: Create Telegram Bot

### Step 1: Create Bot with BotFather
1. Open Telegram app on phone or computer
2. Search for: **@BotFather**
3. Start conversation and send: `/newbot`
4. Follow prompts:
   - Choose a name (e.g., "HTMSG Academy Assistant")
   - Choose a username (must end in 'bot', e.g., "htmsg_academy_bot")
5. **Save the API token** - looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

✅ **Bot created on Telegram!**

---

## PART 3: Set Up Airtable CRM

### Step 1: Create Airtable Account
1. Go to: https://airtable.com/signup
2. Sign up with email
3. Verify your email address
4. Complete onboarding

### Step 2: Create Base
1. Click **"Create a base"** or **"Add a base"**
2. Choose **"Start from scratch"**
3. Name it: **"HTMSG Academy Leads"**
4. Rename default table to: **"Leads"**

### Step 3: Set Up Columns
Delete default fields and create these columns:

| Column Name | Field Type | Options |
|------------|------------|---------|
| Name | Single line text | - |
| Email | Email | - |
| Phone | Phone number | - |
| Age | Number | Integer, no decimals |
| Program | Single select | Youth, Advanced, Elite |
| Payment Status | Single select | Pending, Invoice Sent, Paid |
| Date | Created time | - |
| Notes | Long text | - |

### Step 4: Get API Credentials

**A) Get Personal Access Token:**
1. Go to: https://airtable.com/create/tokens
2. Click **"Create new token"**
3. Name it: **"HTMSG Bot Token"**
4. Under **Scopes**, check:
   - ✅ `data.records:read`
   - ✅ `data.records:write`
5. Under **Access**, click **"Add a base"**
6. Select your **"HTMSG Academy Leads"** base
7. Click **"Create token"**
8. **COPY THE TOKEN** (starts with `pat`) - you'll only see it once!
9. Save it in Notepad

**B) Get Base ID:**
1. Go to: https://airtable.com/api
2. Click your base name
3. Copy the **Base ID** (starts with `app`)

✅ **Airtable CRM is ready!**

---

## PART 4: Set Up Project Files

### Step 1: Create Project Folder
Open Command Prompt and type these commands one by one:
```bash
cd Desktop
mkdir telegram-bot-portfolio
cd telegram-bot-portfolio
```

### Step 2: Initialize Node.js Project
```bash
npm init -y
```

### Step 3: Install Required Packages
```bash
npm install node-telegram-bot-api airtable axios
```

Wait for installation to complete (30-60 seconds).

✅ **Project folder created!**

---

## PART 5: Create Bot Code

### Step 1: Create Bot File
In Command Prompt, type:
```bash
notepad bot.js
```

When Notepad opens, click **Yes** to create new file.

### Step 2: Add Bot Code
Copy the complete bot code and paste into Notepad.

### Step 3: Configure Your Credentials
Find these lines in the code and replace with YOUR credentials:
```javascript
// Replace with YOUR bot token
const token = 'YOUR_TELEGRAM_BOT_TOKEN_HERE';

// Replace with YOUR Airtable token
const airtableApiKey = 'YOUR_AIRTABLE_TOKEN_HERE';

// Replace with YOUR Base ID
const airtableBaseId = 'YOUR_BASE_ID_HERE';
```

### Step 4: Save the File
1. Press **Ctrl + S**
2. Close Notepad

✅ **Bot code configured!**

---

## PART 6: Run Your Bot

### Step 1: Start the Bot
In Command Prompt, type:
```bash
node bot.js
```

You should see:
```
🤖 Bot is running and connected to Airtable...
```

### Step 2: Test the Bot
1. Open Telegram
2. Find your bot (search for the username you created)
3. Click **Start** or type `/start`
4. You should see the welcome message!

### Step 3: Test Booking Flow
1. Type `2` to book a trial
2. Complete all questions:
   - Name
   - Email
   - Phone
   - Age
   - Program
   - Payment method
3. Check your **Airtable base** - the lead should appear!

✅ **Bot is live and working!**

---

## 🛠️ Troubleshooting

### Problem: "node is not recognized"
**Solution:** Node.js not installed properly
- Restart Command Prompt after installing Node.js
- Reinstall Node.js if needed

### Problem: "Cannot find module"
**Solution:** Packages not installed
- Run: `npm install node-telegram-bot-api airtable axios`

### Problem: Bot doesn't respond in Telegram
**Solution:** Check token
- Verify bot token is correct in bot.js
- Make sure bot is running (`node bot.js`)

### Problem: Leads not saving to Airtable
**Solution:** Check Airtable credentials
- Verify API token is correct
- Verify Base ID is correct
- Check table name is exactly "Leads"
- Ensure token has read/write permissions

### Problem: Bot crashes
**Solution:** Check error message
- Read the error in Command Prompt
- Most common: API credentials incorrect

---

## 🔄 Stopping and Restarting the Bot

### To Stop:
- In Command Prompt window, press **Ctrl + C**

### To Restart:
- Type: `node bot.js`
- Press Enter

### To Run in Background (Advanced):
- Windows: Use `pm2` package
- Installation: `npm install -g pm2`
- Run: `pm2 start bot.js`

---

## 📊 Managing Leads in Airtable

### View All Leads:
1. Open your Airtable base
2. All leads appear in the "Leads" table
3. Sort by Date to see newest first

### Update Lead Status:
1. Click on a lead row
2. Change **Payment Status** to:
   - "Invoice Sent" (after sending invoice)
   - "Paid" (after payment received)

### Export Leads:
1. Click **"..."** menu in Airtable
2. Select **"Download CSV"**
3. Use for email marketing or analysis

---

## 🚀 Next Steps (Optional Enhancements)

### 1. Add More Features:
- Calendly integration for booking
- Payment gateway (Paystack/Flutterwave)
- WhatsApp channel
- Email notifications

### 2. Improve Security:
- Move API keys to `.env` file
- Use environment variables
- Never commit keys to GitHub

### 3. Deploy to Cloud:
- Use Heroku (free tier)
- Use Railway
- Use DigitalOcean
- Keeps bot running 24/7

### 4. Add Analytics:
- Track conversion rates
- Monitor response times
- Measure customer satisfaction

---

## 📞 Support

If you encounter issues:
1. Check error messages carefully
2. Verify all credentials are correct
3. Ensure internet connection is stable
4. Restart bot and try again

---

## ✅ Setup Complete!

Congratulations! You now have a fully functional AI automation system that:
- Captures customer inquiries 24/7
- Saves leads automatically to your CRM
- Collects payment preferences
- Provides instant responses

**Total Setup Time:** ~30 minutes  
**Technical Difficulty:** Beginner-friendly  
**Cost:** Free (using free tiers of all services)

---

**Created by:** Donatus Chiamaka  
**Last Updated:** January 16, 2026  
**Version:** 1.0
```

---

## **After Pasting:**

1. Press **Ctrl + S** to save
2. Check the title bar says "SETUP_GUIDE.md - Notepad"
3. Close Notepad

---

## **Now Let's Verify All Files Are Saved**

Type:
```
dir