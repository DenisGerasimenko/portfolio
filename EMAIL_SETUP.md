# Настройка отправки email в контактной форме

## Текущее решение (Временное)
Сейчас используется тестовый эндпоинт Formspree. Для постоянного решения нужно настроить собственный аккаунт.

## Вариант 1: Formspree (Проще всего)

1. Зайдите на https://formspree.io/
2. Зарегистрируйтесь бесплатно
3. Создайте новую форму
4. Укажите email: gerasimenkodenis7@gmail.com
5. Получите endpoint URL (например: https://formspree.io/f/xxxxxxxx)
6. Замените в файле Contacts.js:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

## Вариант 2: EmailJS (Больше возможностей)

1. Зайдите на https://www.emailjs.com/
2. Зарегистрируйтесь бесплатно
3. Добавьте Gmail сервис:
   - Подключите gmail: gerasimenkodenis7@gmail.com
4. Создайте Email Template:
   ```
   Subject: Portfolio Contact from {{from_name}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
5. Получите:
   - Service ID
   - Template ID  
   - Public Key (User ID)
6. Обновите код в Contacts.js:
   ```javascript
   // Добавьте в начало файла
   import emailjs from '@emailjs/browser';
   
   // Замените handleSubmit функцию
   const handleSubmit = (e) => {
     e.preventDefault();
     
     emailjs.sendForm(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID', 
       e.target,
       'YOUR_PUBLIC_KEY'
     ).then((result) => {
       setSubmitStatus('Message sent successfully!');
       setFormData({ name: '', email: '', message: '' });
     }).catch((error) => {
       setSubmitStatus('Failed to send message. Please try again.');
     });
   };
   ```

## Вариант 3: Netlify Forms (Если деплоите на Netlify)

1. Добавьте атрибуты к форме:
   ```html
   <form netlify data-netlify=\"true\" netlify-honeypot=\"bot-field\">
   ```
2. Netlify автоматически обработает форму

## Рекомендация
Используйте Formspree - проще всего настроить и работает надежно.

## Установка зависимостей (для EmailJS)
Если выберете EmailJS, установите:
```bash
npm install @emailjs/browser
```

## Бесплатные лимиты
- Formspree: 50 отправок/месяц
- EmailJS: 200 отправок/месяц
- Netlify Forms: 100 отправок/месяц