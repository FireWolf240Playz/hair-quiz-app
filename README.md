Hair Care Quiz
Table of Contents
Overview
Features
Demo
Installation
Usage
Technologies Used
Project Structure
Contributing
License
Overview
The Hair Care Quiz is a web application designed to help users build a personalized self-care routine for their hair. By answering a series of questions, users receive tailored product recommendations based on their hair type, concerns, and preferences. The application also features a wishlist to save favorite products and a smooth carousel to display product recommendations.

Features
Quiz Flow: A series of questions to gather user information about their hair care needs.
Product Recommendations: Tailored product suggestions based on quiz answers.
Wishlist: Ability to add products to a wishlist, which persists across sessions.
Carousel: Animated product carousel to browse through recommended products.
Responsive Design: Optimized for both desktop and mobile devices.
Local Storage: Quiz answers and wishlist items are stored in local storage to persist user data.
Demo
Check out the live demo: Hair Care Quiz

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/hair-care-quiz.git
Navigate to the project directory:
bash
Copy code
cd hair-care-quiz
Install the dependencies:
bash
Copy code
npm install
Usage
Start the development server:
bash
Copy code
npm run dev
Open your browser and navigate to:
arduino
Copy code
http://localhost:3000
Technologies Used
Frontend: React, Tailwind CSS
State Management: Redux Toolkit
Routing: React Router
Build Tool: Vite
Animations: Framer Motion
Deployment: Vercel, Netlify
Project Structure
plaintext
Copy code
hair-care-quiz/
├── public/
│   ├── quiz-image.jpg
│   ├── results-image.jpg
│   ├── _redirects
│   ├── netlify.toml
│   └── vercel.json
├── src/
│   ├── components/
│   │   ├── Carousel.jsx
│   │   ├── Dots.jsx
│   │   ├── Header.jsx
│   │   ├── NavigationButtons.jsx
│   │   ├── OptionButton.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── QuestionContent.jsx
│   │   ├── ResultsHeader.jsx
│   │   ├── RoutineMessage.jsx
│   │   ├── Text.jsx
│   │   └── Title.jsx
│   ├── data/
│   │   └── questions.js
│   ├── hooks/
│   │   ├── useFilteredProducts.js
│   │   └── useProductData.js
│   ├── pages/
│   │   ├── Homepage.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── QuestionPage.jsx
│   │   └── ResultsPage.jsx
│   ├── store/
│   │   ├── quizSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite.config.js
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add a new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
