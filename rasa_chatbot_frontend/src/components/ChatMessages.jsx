import React from "react";
import MessageBubble from "./MessageBubble";

const ChatMessages = ({ messages, colors, messagesEndRef }) => {
  return (
    <div className="h-96 overflow-y-auto p-4 flex flex-col space-y-3 bg-gray-50">
      {messages.length === 0 && (
        <div className="text-center text-gray-400 text-sm py-8">
          <p>No messages yet</p>
          <p className="mt-2">Send a message to start the conversation</p>
        </div>
      )}

      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} colors={colors} />
      ))}

      {/* Empty div for scrolling reference */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
