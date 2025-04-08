# 🤖 CU Rasa Chatbot

A modern and intelligent chatbot application built with React, Node.js, and Rasa. This project provides a seamless conversational experience with a beautiful user interface.

## ✨ Features

- 🎨 Modern and responsive UI built with React and Tailwind CSS
- 💬 Real-time chat interface
- 🔄 Seamless integration with Rasa backend
- 🚀 Fast and efficient communication
- 📱 Mobile-friendly design
- 🔒 Secure environment configuration
- 🎯 Easy to customize and extend

## 🛠️ Tech Stack

- **Frontend:**

  - React
  - Tailwind CSS
  - Vite
  - ESLint

- **Backend:**
  - Node.js
  - Express
  - Rasa

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python 3.10.16 (for Rasa)
- Git

### 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Yaswanth6303/cu_rasa_chatbot.git
   cd cu_rasa_chatbot
   ```

2. **Setup Frontend**

   ```bash
   cd rasa_chatbot_frontend
   npm install
   cp .env.example .env
   # Update the .env file with your configuration
   ```

3. **Setup Backend**
   ```bash
   cd rasa_chatbot_backend
   npm install
   cp .env.example .env
   # Update the .env file with your configuration
   ```

### 🚀 Running the Application

1. **Start the Frontend**

   ```bash
   cd rasa_chatbot_frontend
   npm run dev
   ```

2. **Start the Backend**

   ```bash
   cd rasa_chatbot_backend
   npm run dev
   ```

3. **Start Rasa Server**
   ```bash
   # Navigate to your Rasa project directory
   rasa run --enable-api -p 5006 --cors '*'
   ```

The application should now be running at:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`
- Rasa: `http://localhost:5006`

## 🔧 Configuration

### Frontend Configuration

Create a `.env` file in the `rasa_chatbot_frontend` directory with:

```
VITE_API_URL=http://localhost:3000
```

### Backend Configuration

Create a `.env` file in the `rasa_chatbot_backend` directory with:

```
PORT=3000
RASA_URL=http://localhost:5006
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Yaswanth Gudivada - Initial work

## 🙏 Acknowledgments

- Rasa team for the amazing framework
- React team for the wonderful library
- All contributors who have helped this project grow