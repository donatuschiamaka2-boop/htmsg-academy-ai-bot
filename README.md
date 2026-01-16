# HTMSG Academy - AI-Powered Customer Automation System

## 🎯 Project Overview

An end-to-end AI automation system built for HTMSG Academy (football development academy) that automates customer intake, lead management, and booking workflows through Telegram.

## ✨ Key Features

### 1. AI Chat Assistant
- 24/7 automated customer support via Telegram
- Natural language conversation flow
- Instant responses to inquiries about programs, pricing, and scheduling

### 2. Automated Customer Intake
- Captures lead information: Name, Email, Phone, Age, Program Interest
- Validates and processes data in real-time
- Multi-step conversational workflow

### 3. CRM Integration (Airtable)
- Automatically saves all leads to Airtable database
- Real-time data synchronization
- Organized lead tracking with status management
- Fields: Name, Email, Phone, Age, Program, Payment Status, Date, Notes

### 4. Payment Collection System
- Captures payment preferences (Bank Transfer, Paystack, Flutterwave, Cash)
- Automated invoice notification system
- Payment status tracking in CRM

### 5. Program Information System
- Youth Development (Ages 6-12) - ₦50,000/month
- Advanced Training (Ages 13-18) - ₦75,000/month
- Elite Academy (Ages 15+) - ₦100,000/month
- Detailed program descriptions with pricing

## 🛠️ Technologies Used

- **Platform:** Telegram Bot API
- **Backend:** Node.js
- **CRM:** Airtable API
- **Libraries:** 
  - node-telegram-bot-api (v0.66.0)
  - airtable (v0.12.2)
  - axios (v1.7.9)

## 📋 System Architecture
```
User (Telegram) 
    ↓
Telegram Bot API
    ↓
Node.js Application
    ↓
Airtable CRM Database
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v20+ recommended)
- Telegram Bot Token (from @BotFather)
- Airtable Account with API access

### Installation Steps

1. **Clone/Download the project**
```bash
   cd Desktop
   mkdir telegram-bot-portfolio
   cd telegram-bot-portfolio
```

2. **Initialize Node.js project**
```bash
   npm init -y
```

3. **Install dependencies**
```bash
   npm install node-telegram-bot-api airtable axios
```

4. **Configure credentials in bot.js**
   - Add your Telegram Bot Token
   - Add your Airtable API Key
   - Add your Airtable Base ID

5. **Run the bot**
```bash
   node bot.js
```

## 📊 Data Flow

### Customer Journey:
1. User starts conversation (`/start`)
2. User selects "Book a trial session" (option 2)
3. Bot collects:
   - Full Name
   - Email Address
   - Phone Number
   - Player's Age
   - Program Interest
   - Payment Method
4. Data automatically saved to Airtable
5. User receives confirmation with invoice notification
6. Admin team can view and manage leads in Airtable

## 🎨 Bot Commands

- `/start` - Display main menu
- `1` - View program information
- `2` - Book a trial session
- `3` - Ask questions
- `4` - Contact team

## 📈 Deliverables Completed

✅ **Build end-to-end AI automations** - Complete conversation flows from inquiry to booking  
✅ **Connect chat and CRM** - Telegram integrated with Airtable  
✅ **Improve intake automation** - Multi-step data collection with validation  
✅ **Test workflows thoroughly** - All conversation paths tested  
✅ **Document SOPs** - This README and inline code documentation  
✅ **Suggest improvements** - See Future Enhancements section  

## 🔮 Future Enhancements

### Phase 2 (Recommended):
- [ ] Add voice message support
- [ ] Integrate Calendly for automated booking
- [ ] Connect Paystack/Flutterwave payment gateway
- [ ] Add WhatsApp channel (in addition to Telegram)
- [ ] Build admin dashboard for lead analytics
- [ ] Email automation (send invoice emails automatically)
- [ ] SMS notifications via Twilio
- [ ] Multi-language support (English/French)

### Phase 3 (Advanced):
- [ ] AI-powered responses using Claude/GPT API
- [ ] Automated follow-up sequences
- [ ] Customer segmentation and targeting
- [ ] Performance analytics dashboard
- [ ] Integration with accounting software (QuickBooks)

## 📁 Project Structure
```
telegram-bot-portfolio/
│
├── bot.js              # Main bot application
├── package.json        # Node.js dependencies
├── package-lock.json   # Dependency lock file
├── README.md          # Project documentation
├── TEST_REPORT.md     # Testing documentation
├── SETUP_GUIDE.md     # Setup instructions
└── node_modules/      # Installed packages
```

## 🔒 Security Considerations

- API keys should be stored in environment variables for production
- Airtable data is private and secure
- Bot validates all user input before processing
- Never commit API keys to public repositories

## 📞 Support & Contact

For questions or support regarding this automation system:
- Email: donatuschiamaka2@gmail.com
- Telegram: @your_telegram_handle

## 📝 License

This project was built as a portfolio demonstration for AI Systems Virtual Assistant position.

---

**Built with ❤️ by Donatus Chiamaka**  
*AI Systems Virtual Assistant Portfolio Project*  
*January 2026*