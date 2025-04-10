const UserCard = ({ name, email }) => {
    return (
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h2 className="text-2xl font-semibold text-yellow-400">{name}</h2>
        <p className="text-blue-400">{email}</p>
      </div>
    );
  };
  
  export default UserCard;
  