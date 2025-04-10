import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="w-full p-3 mb-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 mb-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
