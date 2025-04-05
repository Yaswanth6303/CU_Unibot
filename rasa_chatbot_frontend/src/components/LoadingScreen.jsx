import React from "react";

const LoadingScreen = ({ colors }) => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center">
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: colors.primary }}
        >
          Chanakya University Bot
        </h1>
        <div className="flex space-x-2">
          <div
            className="w-3 h-3 rounded-full animate-bounce"
            style={{ backgroundColor: colors.secondary }}
          ></div>
          <div
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: colors.secondary,
              animationDelay: "0.2s",
            }}
          ></div>
          <div
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: colors.secondary,
              animationDelay: "0.4s",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
