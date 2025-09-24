InkLink ✍️

A Modern Blogging Platform with Social Features

📌 Overview

InkLink is a blogging web application where users can:

✏️ Create, read, and share blogs

❤️ Like and comment on posts

🔗 Share blogs with others

👤 Follow authors to stay updated

Built with Next.js (frontend) and Node.js + Express (backend), powered by a REST API and MongoDB for storage.
Google OAuth2.0 is integrated for secure authentication.

🚀 Features

📚 Blog Management (create, edit, delete, view)

📰 Blog listing with dynamic hero section displaying blog cards

🔎 Individual blog detail pages with like, comment, share, and follow author options

🔐 Authentication with Google Sign-In (OAuth2.0)

⚡ Fast & responsive UI using React + Tailwind CSS

🌍 REST API backend hosted locally (http://localhost:5000)

🛠️ Tech Stack

Frontend:

. Next.js

. React

. Tailwind CSS

Backend:

. Node.js

. Express.js

. MongoDB

Authentication:

. Google OAuth2.0

📂 Project Structure
InkLink/
├── client/              # Next.js frontend
│   ├── components/      # Reusable UI components
│   ├── pages/           # App pages (blogs, auth, etc.)
│   └── styles/          # Global styles
│
├── server/              # Express backend
│   ├── routes/          # API routes
│   ├── models/          # MongoDB models
│   ├── controllers/     # Logic for handling routes
│   └── config/          # DB and auth configs
│
└── README.md

⚙️ Installation

1. Clone repo

git clone https://github.com/your-username/inklink.git
cd inklink


2. Install frontend dependencies

cd client
npm install


3. Install backend dependencies

cd ../server
npm install


4. Setup environment variables
Create a .env file in server/ with:

MONGO_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
PORT=5000

5. Run the project

. Start backend:

cd server
npm run dev

. Start frontend:

cd client
npm run dev


🖼️ Screenshots (Optional)
<img src="./public/localhost_3000_.png" alt="Inklink Logo"/>


🤝 Contributing

Contributions are welcome! Please fork the repo and make a pull request.

