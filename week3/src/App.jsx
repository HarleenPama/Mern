import TextUpdater from "./components/TextUpdater";
import SimpleForm from "./components/SimpleForm";
import UserCard from "./components/UserCard";
import CustomButton from "./components/CustomButton";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">
        Week 3 Assignment
      </h1>

      <div className="flex flex-col space-y-8 w-full max-w-2xl">
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
          <TextUpdater />
        </div>
        <div className="border-b-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
          <SimpleForm />
        </div>
        <div className="border-b-4 border-gradient-to-r from-green-400 via-teal-500 to-cyan-500"></div>

        <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
          <UserCard name="John Doe" email="john@example.com" />
        </div>
        <div className="border-b-4 border-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>

        <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
          <CustomButton />
        </div>
        <div className="border-b-4 border-gradient-to-r from-purple-400 via-indigo-500 to-blue-500"></div>

        <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
