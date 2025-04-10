const CustomButton = () => {
    const handleClick = () => {
      console.log("Button clicked!");
    };
  
    return (
      <button
        onClick={handleClick}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500"
      >
        Click Me
      </button>
    );
  };
  
  export default CustomButton;
  