# 🛍️ MyShop – React eCommerce Store

[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-brightgreen?logo=netlify)](https://ecom-store-js-frameworks.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v20-blue?logo=node.js)](https://nodejs.org/)

A modern, responsive eCommerce frontend built with **React**, designed to simulate a real shopping experience using the **Noroff Online Shop API**.  
This project was created as part of the _JavaScript Frameworks_ course in the **Frontend Development program at Noroff**, focusing on reusable components, responsive UI, and clean architecture.

---

## ✨ Features

- 🛒 Product listing with live API fetch
- 🔍 Search and discount filter
- 📄 Product detail pages
- ➕ Add to cart and manage cart items
- 💳 Checkout confirmation page with confetti animation
- 📬 Contact form with input validation
- 📱 Fully responsive (mobile, tablet, desktop)
- 🧩 Modular components and context-based state management
- 🧪 Basic Jest testing for utility logic

---

## 🖼️ Screenshots

<div align="center">

### 🏠 Homepage | 🛒 Cart Page | 🎉 Checkout Success

<img src="./screenshots/homepage.png" width="31%" />
<img src="./screenshots/cart.png" width="31%" />
<img src="./screenshots/checkout.png" width="31%" />

</div>

---

## 🧰 Tech Stack

- **React** (Hooks & Context API)
- **React Router DOM v7**
- **CSS Modules**
- **Font Awesome**
- **Noroff API**
- **React Confetti**
- **Jest** (for utility testing)
- **Netlify** (for deployment)

---

## 📁 Project Structure

```text
src/
├── assets/              # Static media (logos, images)
├── cart/                # Context & reducer logic for cart
├── components/          # Reusable UI components (Header, Footer, Buttons)
├── pages/               # Page-level components
│   ├── HomePage/
│   ├── ProductPage/
│   ├── CartPage/
│   ├── CheckoutSuccessPage/
│   └── ContactPage/
├── utils/               # Utility functions & tests
├── App.js               # App routes
├── index.js             # React root with CartProvider
└── index.css            # Global styles
```

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/si-rak/JSFrameworks.git

# Navigate to folder
cd JSFrameworks

# Install dependencies
npm install

# Start local dev server
npm start
```

Requires Node.js v20 (LTS recommended)
Tested successfully on Node v20 and npm 10+

---

## 🧪 Usage

1. Visit `/` to browse products
2. Use the search bar or toggle “Show Discounted Products”
3. Add items to your cart and view totals
4. Checkout to see the confetti success screen 🎉
5. Send messages via the contact form (includes validation)

---

## 🔮 Future Improvements

- 💳 Integrate Stripe or PayPal checkout
- 🔐 Add user login & authentication
- ⭐ Include product ratings & reviews
- ⚙️ Improve error handling & loading states
- 🧪 Extend Jest test coverage

---

## 👤 Author

**Sirak Getachew**  
Frontend Developer Student @ Noroff

- 🧑‍💻 [GitHub](https://github.com/si-rak)
- 💼 [LinkedIn](https://linkedin.com/in/yourprofile)
- 🌐 [Portfolio](https://your-portfolio-link.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
© 2025 Sirak Getachew. All rights reserved.

---

## 🙏 Acknowledgements

Thanks to **Noroff School of Technology** and the **Frontend Development staff** for their guidance and support.  
Special thanks to **Martin** for valuable mentorship and feedback.  
UI inspiration from [this YouTube video](https://youtu.be/054qYbsxyXw?si=4MmrgCzNIloRdTVV).  
Some refinements were made with help from **ChatGPT**, used for learning and troubleshooting.

---

## 🌐 Live Demo

[🟢 View Site on Netlify](https://ecom-store-js-frameworks.netlify.app)

## 💻 GitHub Repository

[📂 View Source Code on GitHub](https://github.com/si-rak/ecom-store-js-frameworks-course-assignment)
