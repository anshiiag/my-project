# URL Shortener Project

This is a full-stack URL Shortener application built as part of my internship selection process at Daphnis Labs.

## 🔗 Features

- Shortens long URLs into simpler short links
- Stores original and shortened URLs in MongoDB
- Displays the shortened link after creation
- Frontend and backend connected using REST API

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Other Tools**: Axios, dotenv, CORS

## 📂 Folder Structure

UrlShortner/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ │ ├── UrlForm.js
│ │ │ └── Stats.js
│ │ ├── App.js
│ │ └── ...
│ └── ...
│
├── server/ # Node + Express backend
│ ├── controllers/
│ │ └── urlController.js
│ ├── models/
│ │ └── Url.js
│ ├── routes/
│ │ └── urlRoutes.js
│ ├── utils/
│ │ └── generateShortCode.js
│ ├── app.js
│ └── server.js
│
├── .env # Environment variables (MONGO_URI, PORT)
└── README.md


##  How to Run

### 1. Clone the repo
```bash
git clone https://github.com/anshiiag/my-project.git
cd my-project
2. Install server dependencies
   cd server
npm install
3. Start backend server
   node server.js
4. Install client dependencies
   cd ../client
   npm install
5. Start frontend React app
   npm start
App runs at: http://localhost:3000

📌 Notes
Make sure MongoDB connection string in .env is correct.

For this project, I used my own free cluster on MongoDB Atlas.

The Stats feature is planned but not implemented yet.

