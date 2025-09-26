💬 Real-Time Chat Application
A real-time chat application built with the MERN stack and Socket.IO, allowing users to send and receive messages instantly.

🚀 Features
🔐 User Authentication – Secure signup/login using JWT

💬 Real-Time Messaging – Instant message delivery via Socket.IO

🟢 Online/Offline Status – See when users are active

📱 Responsive UI – Works seamlessly on desktop and mobile

📨 Chat Rooms / One-to-One Chat support

🔔 Instant Notifications for new messages

🛠️ Tech Stack
Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Real-Time Communication: Socket.IO

Authentication: JWT (JSON Web Token), bcrypt.js

📂 Project Structure
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Pages (Login, Register, Chat)
│   │   └── App.js
│   └── package.json
├── server/               # Express backend
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   ├── socket/           # Socket.IO setup
│   └── server.js
├── README.md
└── package.json
⚡ Getting Started
1. Clone the repo
git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app
2. Install dependencies
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
3. Setup environment variables
Create a .env file inside server:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
4. Run the app
# Run backend
cd server
npm run dev

# Run frontend
cd ../client
npm start
The app will be live at http://localhost:3000

📸 Screenshots
(Add screenshots/gifs of your app here for better presentation)

🔮 Future Improvements
📷 Media file sharing (images, videos, documents)

👥 Group chats with admin controls

🔒 End-to-End Encryption

🌍 Multi-language support

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

📜 License
This project is licensed under the MIT License.