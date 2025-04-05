import React from "react";

const MessageInput = ({
  input,
  setInput,
  sendMessage,
  handleKeyPress,
  colors,
}) => {
  return (
    <div className="flex p-4 bg-white border-t border-gray-200">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a message..."
        className="flex-1 p-3 rounded-l-lg border focus:outline-none focus:border-transparent"
        style={{ borderColor: "#d1d5db", focusRing: colors.secondary }}
      />
      <button
        onClick={sendMessage}
        className="text-white px-5 py-3 rounded-r-lg transition-all font-medium"
        style={{ backgroundColor: colors.secondary }}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
