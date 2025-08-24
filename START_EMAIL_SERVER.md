# 🚀 БЫСТРЫЙ ЗАПУСК EMAIL СЕРВЕРА

## ШАГ 1: Установка зависимостей (уже сделано)
```bash
npm install express nodemailer cors --legacy-peer-deps
```

## ШАГ 2: Получение App Password для Gmail

1. Зайдите в **Google Account**: https://myaccount.google.com/
2. **Security** → **2-Step Verification** → **App passwords**
3. Выберите:
   - App: **Mail**
   - Device: **Other (Custom name)** → введите \"Portfolio Server\"
4. **Скопируйте сгенерированный пароль** (16 символов)

## ШАГ 3: Обновление кода

Откройте файл `email-server.js` и замените:
```javascript
pass: 'YOUR_APP_PASSWORD'
```
на:
```javascript
pass: 'ваш_скопированный_пароль'
```

## ШАГ 4: Запуск сервера

**В новом терминале** (не закрывая React):
```bash
node email-server.js
```

Вы увидите:
```
📧 Email server running on http://localhost:3001
Test server: http://localhost:3001/test
```

## ШАГ 5: Тестирование

1. Откройте в браузере: http://localhost:3001/test
2. Должно показать: `{\"message\": \"Email server is running!\"}`
3. Теперь форма на сайте будет отправлять email!

## ⚡ Быстрый тест формы

1. Откройте ваш сайт: http://localhost:3000
2. Перейдите в секцию \"Contacts\"
3. Заполните форму
4. Нажмите \"Send Message\"
5. Проверьте email: **gerasimenkodenis7@gmail.com**

## 🔧 Если не работает

**Проверьте:**
- ✅ Email сервер запущен: http://localhost:3001/test
- ✅ App Password правильно вставлен в код
- ✅ 2-факторная аутентификация включена в Google
- ✅ Нет блокировки антивируса/файрвола

**Логи сервера покажут ошибки при отправке**

## 📱 Альтернативы

Если Gmail не работает, используйте:
- **EmailJS** (следуйте QUICK_EMAIL_SETUP.md)
- **Web3Forms** (зарегистрируйтесь на web3forms.com)

---

**Важно:** Держите email сервер запущенным в отдельном терминале, пока тестируете форму!