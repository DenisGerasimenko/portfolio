// Simple Email Server for Portfolio Contact Form
// Запуск: node email-server.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Email configuration - ВАЖНО: Замените на ваши данные!
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'gerasimenkodenis7@gmail.com',
    pass: 'YOUR_APP_PASSWORD' // Получите в настройках Google Account > Security > App passwords
  }
});

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Email server is running!' });
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  
  console.log('Received email request:', { name, email, message });
  
  const mailOptions = {
    from: 'gerasimenkodenis7@gmail.com',
    to: 'gerasimenkodenis7@gmail.com',
    subject: `Portfolio Contact from ${name}`,
    html: `
      <h3>New Portfolio Contact</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Sent from portfolio contact form</em></p>
    `,
    replyTo: email
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\n📧 Email server running on http://localhost:${PORT}`);
  console.log(`Test server: http://localhost:${PORT}/test`);
  console.log(`\n⚠️  ВАЖНО: Обновите email и пароль в коде!\n`);
});

/*
ИНСТРУКЦИИ ПО НАСТРОЙКЕ:

1. Получите App Password:
   - Зайдите в Google Account (myaccount.google.com)
   - Security > 2-Step Verification > App passwords
   - Выберите app: Mail, device: Other
   - Скопируйте сгенерированный пароль

2. Замените YOUR_APP_PASSWORD выше на полученный пароль

3. Запустите сервер:
   node email-server.js

4. Протестируйте:
   http://localhost:3001/test

5. Теперь форма будет отправлять email через этот сервер!
*/