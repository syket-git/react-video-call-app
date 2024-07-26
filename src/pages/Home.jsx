import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (roomId) {
      navigate(`/room/${roomId}`);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-[400px]">
        <h1 className="text-4xl mb-4 text-white font-bold text-center">
          Hey! Welcome
        </h1>
        <input
          type="text"
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          className="border-2 w-full border-white rounded-lg mb-4 focus:none px-4 py-3 text-xl"
          placeholder="Enter Room ID"
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 w-full rounded-lg block px-5 py-3 text-xl text-white"
        >
          Join room
        </button>
      </div>
    </div>
  );
};
export default Home;
