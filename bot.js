const TelegramBot = require('node-telegram-bot-api');
const Airtable = require('airtable');

// Bot token
const token = 'YOUR_TELEGRAM_BOT_TOKEN_HERE';
const airtableApiKey = 'YOUR_AIRTABLE_API_KEY_HERE';
const airtableBaseId = 'YOUR_AIRTABLE_BASE_ID_HERE';

// Initialize Airtable
const base = new Airtable({apiKey: airtableApiKey}).base(airtableBaseId);

// Create bot
const bot = new TelegramBot(token, {polling: true});

// Store user data
const userData = {};

// Welcome message
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  delete userData[chatId];
  
  const welcomeMessage = `
🏆 Welcome to HTMSG Academy! ⚽

I'm your AI assistant here to help you learn about our elite football development programs.

What would you like to do?
1️⃣ Learn about our programs
2️⃣ Book a trial session
3️⃣ Ask a question
4️⃣ Speak with our team

Just type the number or tell me what you need!
  `;
  bot.sendMessage(chatId, welcomeMessage);
});

// Handle program inquiries
bot.onText(/^1$|^program$|^programs$/i, (msg) => {
  const chatId = msg.chat.id;
  delete userData[chatId];
  
  const programInfo = `
⚽ HTMSG Academy Programs:

🌟 Youth Development (Ages 6-12)
   - Technical skills training
   - Tactical awareness
   - Character building
   💰 Price: ₦50,000/month

🎯 Advanced Training (Ages 13-18)
   - High-performance coaching
   - Position-specific training
   - College recruitment prep
   💰 Price: ₦75,000/month

🏅 Elite Academy (Ages 15+)
   - Professional pathway
   - Strength & conditioning
   - Mental performance coaching
   💰 Price: ₦100,000/month

Type "2" to book a FREE trial session!
  `;
  bot.sendMessage(chatId, programInfo);
});

// Handle booking flow
bot.onText(/^2$|^book$|^trial$/i, (msg) => {
  const chatId = msg.chat.id;
  userData[chatId] = { step: 'name' };
  bot.sendMessage(chatId, "Great! Let's get you booked. 📋\n\nFirst, what's your full name?");
});

// Handle questions
bot.onText(/^3$|^question$|^ask$/i, (msg) => {
  const chatId = msg.chat.id;
  delete userData[chatId];
  
  bot.sendMessage(chatId, "I'm here to help! Ask me anything about:\n\n• Training schedules\n• Pricing\n• Coaching staff\n• Facilities\n• Age groups\n\nWhat would you like to know?");
});

// Handle contact request
bot.onText(/^4$|^team$|^contact$|^speak$/i, (msg) => {
  const chatId = msg.chat.id;
  delete userData[chatId];
  
  const contactInfo = `
📞 Contact Our Team:

📧 Email: info@htmsgacademy.com
📱 Phone: +234 XXX XXX XXXX
🌐 Website: www.htmsgacademy.com

Office Hours: Mon-Fri, 9AM-6PM WAT

Would you like to schedule a call? Type "2" to book!
  `;
  bot.sendMessage(chatId, contactInfo);
});

// Save lead to Airtable
async function saveToAirtable(leadData) {
  try {
    const record = await base('Leads').create([
      {
        fields: {
          Name: leadData.name,
          Email: leadData.email,
          Phone: leadData.phone,
          Age: parseInt(leadData.age),
          Program: leadData.program,
          'Payment Status': 'Pending',
          Notes: leadData.paymentMethod ? `Payment method: ${leadData.paymentMethod}` : ''
        }
      }
    ]);
    console.log('✅ Lead saved to Airtable:', record[0].getId());
    return true;
  } catch (error) {
    console.error('❌ Error saving to Airtable:', error);
    return false;
  }
}

// Handle all messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text.startsWith('/')) return;
  if (/^[1-4]$|^program$|^programs$|^book$|^trial$|^question$|^ask$|^team$|^contact$|^speak$/i.test(text)) return;

  if (userData[chatId]) {
    const user = userData[chatId];

    if (user.step === 'name') {
      user.name = text;
      user.step = 'email';
      bot.sendMessage(chatId, `Thanks ${user.name}! 👍\n\nWhat's your email address?`);
    } 
    else if (user.step === 'email') {
      user.email = text;
      user.step = 'phone';
      bot.sendMessage(chatId, "Perfect! What's your phone number?\n\n(Include country code, e.g., +234XXXXXXXXXX)");
    }
    else if (user.step === 'phone') {
      user.phone = text;
      user.step = 'age';
      bot.sendMessage(chatId, "Great! How old is the player?");
    }
    else if (user.step === 'age') {
      user.age = text;
      user.step = 'program';
      bot.sendMessage(chatId, "Awesome! Which program are you interested in?\n\nType:\n• Youth (ages 6-12) - ₦50,000/month\n• Advanced (ages 13-18) - ₦75,000/month\n• Elite (ages 15+) - ₦100,000/month");
    } 
    else if (user.step === 'program') {
      user.program = text;
      user.step = 'payment';
      bot.sendMessage(chatId, "Perfect! How would you prefer to pay?\n\nType:\n• Bank Transfer\n• Paystack\n• Flutterwave\n• Cash");
    }
    else if (user.step === 'payment') {
      user.paymentMethod = text;
      
      // Save to Airtable
      saveToAirtable(user).then(success => {
        if (success) {
          const summary = `
🎉 Booking Request Submitted Successfully!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 YOUR DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: ${user.name}
📧 Email: ${user.email}
📱 Phone: ${user.phone}
🎂 Age: ${user.age}
⚽ Program: ${user.program}
💳 Payment Method: ${user.paymentMethod}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 NEXT STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ Our team will contact you within 24 hours
2️⃣ We'll send you a payment invoice
3️⃣ Schedule your FREE trial session
4️⃣ Complete registration

💰 Payment Invoice will be sent to: ${user.email}

Questions? Type /start for the main menu.
          `;
          
          bot.sendMessage(chatId, summary);
          
          console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ NEW LEAD CAPTURED & SAVED TO AIRTABLE!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${user.name}
📧 Email: ${user.email}
📱 Phone: ${user.phone}
🎂 Age: ${user.age}
⚽ Program: ${user.program}
💳 Payment: ${user.paymentMethod}
📅 Date: ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          `);
        } else {
          bot.sendMessage(chatId, "⚠️ We received your info but had trouble saving it. Our team has been notified and will contact you soon!");
        }
      });
      
      delete userData[chatId];
    }
  } else {
    bot.sendMessage(chatId, `I heard you! 👂\n\nFor specific help, type:\n• 1 - View programs\n• 2 - Book a trial\n• 3 - Ask questions\n• 4 - Contact team\n\nOr type /start for the main menu.`);
  }
});

console.log('🤖 Bot is running and connected to Airtable...');