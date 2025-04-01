"use client";
import { useState } from "react";
import Link from "next/link";

export default function UserDetails() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [experience, setExperience] = useState("");
  const [sessionDuration, setSessionDuration] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convert string inputs to numbers
    const numAge = Number(age);
    const numWeight = Number(weight);
    const numHeight = Number(height);
    const numSessionDuration = Number(sessionDuration);

    // Validate that numeric inputs are positive numbers
    if (numAge <= 0 || numWeight <= 0 || numHeight <= 0 || numSessionDuration <= 0) {
      alert("Please enter valid positive numbers for age, weight, height, and session duration.");
      return;
    }

    const userData = { 
      age: numAge, 
      gender, 
      weight: numWeight, 
      height: numHeight, 
      experience, 
      sessionDuration: numSessionDuration 
    };

    try {
      const response = await fetch("/api/saveUserData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to save user data.");
      }

      alert("User data saved successfully!");
    } catch (error) {
      console.error("Error saving user data:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 flex flex-col justify-center items-center py-20">
      <div className="w-full max-w-lg bg-white px-12 py-16 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Tell Us About Yourself</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Age</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" 
              required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" 
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Weight (kg)</label>
            <input 
              type="number" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" 
              required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Height (cm)</label>
            <input 
              type="number" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" 
              required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Experience Level</label>
            <select 
              value={experience} 
              onChange={(e) => setExperience(e.target.value)} 
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" 
              required
            >
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Average Session Duration (mins)</label>
            <input 
              type="number" 
              value={sessionDuration} 
              onChange={(e) => setSessionDuration(e.target.value)} 
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link 
            href="/dashboard" 
            className="text-black font-medium hover:underline cursor-pointer"
            onClick={(e) => {
              if (!confirm("Are you sure you want to skip?")) {
                e.preventDefault();
              }
            }}
          >
            Skip for now
          </Link>
        </div>
      </div>
    </div>
  );
}