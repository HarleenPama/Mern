import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Live Text Updater</h2>
      <input
        type="text"
        className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-3 text-lg font-bold text-blue-400 transition-opacity duration-300">
        {text ? `You typed: ${text}` : "Start typing..."}
      </p>
    </div>
  );
};

export default TextUpdater;
