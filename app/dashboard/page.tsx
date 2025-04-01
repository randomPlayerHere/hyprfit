
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
 type ApiResponse = {
  recommended_workout: string;
  probabilities: Record<string, number>;
};

export default function Dashboard() {


const [recommendation, setRecommendation] = useState<ApiResponse | null>(null);

  useEffect(() => {
    // Retrieve recommendation from localStorage
    const storedRecommendation = localStorage.getItem('workoutRecommendation');
    if (storedRecommendation) {
      setRecommendation(JSON.parse(storedRecommendation));
    }
  }, []);

  const workoutTypes = ["HIIT", "Strength", "Yoga", "Cardio"];

  const [currentWorkout, setCurrentWorkout] = useState(workoutTypes[0]);

  // State for workouts
  const [workouts, setWorkouts] = useState([
    { name: "Spartan Strength Circuit", duration: "45 min", completed: false },
    { name: "Olympian Cardio Blast", duration: "30 min", completed: true },
    { name: "Athena Core Challenge", duration: "20 min", completed: false },
  ]);

  // State for to-do workouts
  const [todoWorkouts, setTodoWorkouts] = useState([
    { id: 1, name: "Leg Day: Titan Squats", completed: false },
    { id: 2, name: "Upper Body: Godlike Pullups", completed: false },
    { id: 3, name: "Core: Hades Ab Circuit", completed: false },
    { id: 4, name: "Cardio: Hermes Sprint Intervals", completed: false },
  ]);

  const [newWorkoutName, setNewWorkoutName] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Daily Challenge Data
  const dailyChallenge = {
    name: "300 Spartan Pushups",
    progress: 45,
    target: 300,
  };

  // Workout Progress Data
  const workoutProgress = [
    { month: "Jan", strength: 65, endurance: 45 },
    { month: "Feb", strength: 70, endurance: 50 },
    { month: "Mar", strength: 80, endurance: 65 },
    { month: "Apr", strength: 85, endurance: 70 },
  ];

  // Calendar Data
  const monthName = "March 2023";
  const daysInMonth = 31;
  const startDay = 3; // Wednesday (0 = Sunday)
  const [workoutDays, setWorkoutDays] = useState([2, 3, 7, 8, 9, 14, 16, 21, 23, 28, 30]);

  // Toggle todo workout completion
  const toggleTodoCompletion = (id: number) => {
    setTodoWorkouts((prev) =>
      prev.map((workout) =>
        workout.id === id ? { ...workout, completed: !workout.completed } : workout
      )
    );
  };

  // Add new todo workout
  const addTodoWorkout = () => {
    if (newWorkoutName.trim()) {
      setTodoWorkouts((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: newWorkoutName,
          completed: false,
        },
      ]);
      setNewWorkoutName("");
      setShowAddForm(false);
    }
  };

  // Check if all to-do workouts are completed and update the calendar
  useEffect(() => {
    if (todoWorkouts.every((workout) => workout.completed)) {
      const nextAvailableDay = findNextAvailableWorkoutDay();
      if (nextAvailableDay !== null) {
        setWorkoutDays((prevDays) => [...prevDays, nextAvailableDay]);
      }
    }
  }, [todoWorkouts]);

  // Find the next available workout day
  const findNextAvailableWorkoutDay = () => {
    for (let i = 1; i <= daysInMonth; i++) {
      if (!workoutDays.includes(i)) {
        return i;
      }
    }
    return null;
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900">
      {/* Dashboard Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>

        {recommendation ? (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Recommended Workout</h2>
            <p className="text-lg">{recommendation.recommended_workout}</p>

            <h3 className="mt-4 text-lg font-semibold">Workout Probabilities:</h3>
            <ul>
              {Object.entries(recommendation.probabilities).map(([workout, prob]) => (
                <li key={workout}>
                  {workout}: {(prob * 100).toFixed(2)}%
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No recommendations available. Please fill out your details.</p>
        )}
      </section>
    </div>
        
        {/* Current Workouts */}
        <div className="justify-center w-80 h-50 bg-black p-6 rounded-full flex items-center shadow-lg">
          <div className="w-38 h-18 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-black text-3xl font-bold uppercase tracking-wider">
              {currentWorkout}
            </span>
          </div>
        </div>

        {/* Monthly Calendar */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Workout Calendar</h2>
          <h3 className="font-medium">{monthName}</h3>
          <div className="grid grid-cols-7 gap-1">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div key={day} className="text-center text-sm font-medium py-1">{day}</div>
            ))}
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const hasWorkout = workoutDays.includes(day);
              return (
                <div
                  key={day}
                  className={`h-8 flex items-center justify-center rounded-full text-sm 
                    ${hasWorkout ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <span className="text-sm">Workout day</span>
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Daily Challenge</h2>
          <h3 className="font-medium mb-2">{dailyChallenge.name}</h3>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress: {dailyChallenge.progress}/{dailyChallenge.target}</span>
              <span>{Math.round((dailyChallenge.progress / dailyChallenge.target) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-black h-2.5 rounded-full"
                style={{ width: `${(dailyChallenge.progress / dailyChallenge.target) * 100}%` }}
              ></div>
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Log Progress
          </button>
        </div>

        {/* Progress Graph */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Workout Progress</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workoutProgress} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="strength" fill="#4B5563" name="Strength" />
                <Bar dataKey="endurance" fill="#9CA3AF" name="Endurance" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* To-Do Workouts */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">
            To-Do Workouts
          </h2>

          {todoWorkouts.length > 0 ? (
            <div className="space-y-3">
              {todoWorkouts.map((workout) => (
                <div key={workout.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={workout.completed}
                    onChange={() => toggleTodoCompletion(workout.id)}
                    className="mr-3 h-5 w-5 rounded border-gray-300 accent-black focus:ring-2 focus:ring-black"
                  />
                  <span className={`${workout.completed ? "line-through text-gray-400" : "text-gray-900"}`}>
                    {workout.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm mt-2">No workouts yet.</p>
          )}

          {showAddForm ? (
            <div className="mt-4">
              <input
                type="text"
                value={newWorkoutName}
                onChange={(e) => setNewWorkoutName(e.target.value)}
                placeholder="Enter workout name"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
              <div className="flex gap-2 mt-2">
                <button onClick={addTodoWorkout} className="flex-1 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Add
                </button>
                <button onClick={() => setShowAddForm(false)} className="flex-1 border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button onClick={() => setShowAddForm(true)} className="mt-4 w-full border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-1">
              <span>+</span>
              <span>Add Workout</span>
            </button>
          )}
        </div>
      </section>

    </div>
  );
}