import { useState } from "react";

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", inputValue);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-4 focus:ring-green-500 transition duration-300"
          placeholder="Enter text..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
