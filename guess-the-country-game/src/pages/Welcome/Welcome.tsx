import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert/Alert";
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";

type GameState = {
  name: string;
  continent: string;
};

export const Welcome = () => {
  const [name, setName] = useState<string>("");
  const [continent, setContinent] = useState<string>("all");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      setError(null);
      navigate("/game", { state: { name, continent } as GameState });
    } else {
      setError("Please enter your name.");
    }
  };

  const handleCloseAlert = () => {
    setError(null);
  };

  const continentOptions = [
    { value: "all", label: "All" },
    { value: "europe", label: "Europe" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "Americas" },
    { value: "asia", label: "Asia" },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Guess the Country Game!
      </h1>
      {error && (
        <Alert message={error} type={"error"} onClose={handleCloseAlert} />
      )}
      <form className="w-1/3" onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <Select
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
          options={continentOptions}
        />
        <button
          className="w-full bg-blue-600 p-2 rounded mt-4 hover:bg-blue-500 transition-colors"
          type="submit"
        >
          {"Start Game"}
        </button>
      </form>
    </div>
  );
};
