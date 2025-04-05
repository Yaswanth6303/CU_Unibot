import React from "react";

const ChatHeader = ({ colors }) => {
  return (
    <div
      className="text-white text-center py-5 px-4"
      style={{ backgroundColor: colors.primary }}
    >
      <h2 className="text-xl font-bold">UniBot</h2>
      <p className="text-xs mt-1 opacity-80">Chanakya University Assistant</p>
    </div>
  );
};

export default ChatHeader;
