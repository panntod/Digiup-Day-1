import { useState } from "react";
import Navbar from "../components/Navbar";

const Greeting = () => {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Greeting App</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border rounded-lg mb-4"
        />
        {name && <p className="text-xl">Hello, {name}!</p>}
      </div>
    </>
  );
};

export default Greeting;
