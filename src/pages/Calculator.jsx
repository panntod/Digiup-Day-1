import { useState } from "react";
import Navbar from "../components/Navbar";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleMultiply = () => {
    setResult(+num1 * +num2);
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Kalkulator Perkalian</h1>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Masukkan angka pertama"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Masukkan angka kedua"
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleMultiply}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Hitung
          </button>
          {result !== null && (
            <div className="mt-4 text-xl font-semibold">Hasil: {result}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calculator;
