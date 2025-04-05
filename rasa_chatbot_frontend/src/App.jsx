// App.jsx
import React, { useState, useEffect, useRef } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ChatHeader from "./components/ChatHeader";
import DepartmentSelector from "./components/DepartmentSelector";
import ChatMessages from "./components/ChatMessages";
import MessageInput from "./components/MessageInput";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [department, setDepartment] = useState("General");
  const messagesEndRef = useRef(null);

  // Color scheme
  const colors = {
    primary: "#002561", // Dark blue
    secondary: "#ac8500", // Gold
    white: "#ffffff", // White
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Show loading for 3s
  }, []);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
      flag: "external",
      department,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      // Step 1: Send user input to Rasa
      const rasaResponse = await fetch(
        "http://localhost:5006/webhooks/rest/webhook",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sender: "user", message: input }),
        },
      );

      const rasaData = await rasaResponse.json();
      const rasaMessage = rasaData[0]?.text || "No response from Rasa";

      // Step 2: Send Rasa's response to the backend (server.js) to forward to Gemini API
      const BACKEND_URL =
        import.meta.env.VITE_BACKEND_URL || "https://cu-unibot.onrender.com";

      const backendResponse = await fetch(`${BACKEND_URL}/send-to-gemini`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input_value: rasaMessage, // Send Rasa's response
        }),
      });

      const geminiData = await backendResponse.json();
      const botMessage = geminiData?.message || "No response from Gemini";

      // Step 3: Update messages with the response from Gemini
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botMessage, flag: "internal", department },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "Error processing request.",
          flag: "internal",
          department,
        },
      ]);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  if (loading) {
    return <LoadingScreen colors={colors} />;
  }

  return (
    <div className="flex justify-center items-center h-screen relative">
      <AnimatedBackground colors={colors} />
      <div className="w-96 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 z-10">
        <ChatHeader colors={colors} />
        <DepartmentSelector
          department={department}
          setDepartment={setDepartment}
          colors={colors}
        />
        <ChatMessages
          messages={messages}
          colors={colors}
          messagesEndRef={messagesEndRef}
        />
        <MessageInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          handleKeyPress={handleKeyPress}
          colors={colors}
        />
      </div>
    </div>
  );
}

export default App;
