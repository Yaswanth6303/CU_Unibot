# 🎨 CU Rasa Chatbot Frontend

A modern and responsive frontend application for the CU Rasa Chatbot, built with React and Tailwind CSS. This frontend provides a beautiful and intuitive user interface for interacting with the Rasa-powered chatbot.

## ✨ Features

- 🎯 Modern and responsive UI using React and Tailwind CSS
- 💬 Real-time chat interface with message history
- 🌙 Dark/Light mode support
- 📱 Fully responsive design for all devices
- ⚡ Fast and optimized performance with Vite
- 🔒 Secure environment configuration
- 🎨 Customizable theme and styling

## 🛠️ Tech Stack

- **Core:**

  - React
  - Vite
  - Tailwind CSS
  - ESLint

- **State Management:**

  - React Hooks

- **Styling:**

  - Tailwind CSS
  - PostCSS

- **Development Tools:**
  - ESLint
  - Vite Dev Server

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Yaswanth6303/cu_rasa_chatbot.git
   cd cu_rasa_chatbot/rasa_chatbot_frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration:
   ```
   VITE_API_URL=http://localhost:3000
   ```

### 🚀 Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 🏗️ Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
rasa_chatbot_frontend/
├── public/          # Static files
├── src/
│   ├── components/  # React components
│   ├── assets/      # Images, fonts, etc.
│   ├── styles/      # Global styles
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Application entry point
├── .env.example     # Example environment variables
├── package.json     # Project dependencies
├── vite.config.js   # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=http://localhost:3000  # Backend API URL
```

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be modified in `tailwind.config.js`.

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- None at the moment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 👥 Authors

- Yaswanth Gudivada - Initial work

## 🙏 Acknowledgments

- React team for the amazing library
- Tailwind CSS team for the utility-first CSS framework
- Vite team for the fast build tool
- All contributors who have helped this project grow