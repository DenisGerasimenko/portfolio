# БЫСТРАЯ НАСТРОЙКА EMAIL ДЛЯ ПОРТФОЛИО

## 🚀 EmailJS Setup (Рекомендуемый - 5 минут)

### Шаг 1: Регистрация
1. Перейдите на https://www.emailjs.com/
2. Нажмите "Sign Up" 
3. Зарегистрируйтесь через Gmail: **gerasimenkodenis7@gmail.com**

### Шаг 2: Создание сервиса
1. В Dashboard нажмите "Email Services"
2. Нажмите "Add New Service"
3. Выберите "Gmail"
4. Подключите аккаунт **gerasimenkodenis7@gmail.com**
5. Service ID будет: **service_gmail** (запомните)

### Шаг 3: Создание шаблона
1. Перейдите в "Email Templates"
2. Нажмите "Create New Template"
3. Скопируйте этот шаблон:

**Subject:**
```
New Portfolio Contact from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Template ID будет: **template_xxxxxxx** (запомните)

### Шаг 4: Получение Public Key
1. Перейдите в "Account" → "General"
2. Найдите "Public Key" 
3. Скопируйте ключ (выглядит как: **JBBg8PnqhMd9QFmKF**)

### Шаг 5: Обновление кода
Замените в файле `src/contacts/Contacts.js`:

```javascript
service_id: 'ВАШ_SERVICE_ID',          // например: service_gmail
template_id: 'ВАШ_TEMPLATE_ID',        // например: template_abc123
user_id: 'ВАШ_PUBLIC_KEY',             // например: JBBg8PnqhMd9QFmKF
```

## 🔄 Альтернатива: Web3Forms (2 минуты)

### Если EmailJS не работает:
1. Перейдите на https://web3forms.com/
2. Введите email: **gerasimenkodenis7@gmail.com**
3. Получите Access Key
4. Замените в коде:
```javascript
access_key: 'ВАШ_ACCESS_KEY'
```

## ⚡ Еще быстрее: Netlify Forms

Если деплоите на Netlify, добавьте к форме:
```html
<form netlify data-netlify="true" name="contact">
```

## 🧪 Тестирование

После настройки:
1. Откройте портфолио
2. Заполните контактную форму
3. Нажмите "Send Message"  
4. Проверьте email **gerasimenkodenis7@gmail.com**
5. Также проверьте папку "Спам"

## 📝 Текущий статус

✅ Код уже готов для EmailJS  
✅ Fallback через mailto работает  
🔄 Нужно только настроить один из сервисов выше

## 💡 Совет

EmailJS - самый надежный вариант. Бесплатно до 200 писем/месяц.