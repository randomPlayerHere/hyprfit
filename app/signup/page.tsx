"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      window.location.href = "/dashboard";
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 flex flex-col justify-center">
      <div className="max-w-lg mx-auto px-12 py-16 bg-white rounded-xl shadow-lg">
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2">
            <Image
              src="/greek-helmet.png"
              alt="Greek Helmet"
              width={42}
              height={42}
              className="h-10 w-10"
            />
            <span className="font-bold text-4xl">HYPRFIT</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">Create Account</h1>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-black font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <footer className="max-w-lg mx-auto p-6 mt-12 text-center">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Temple of Gains
        </div>
      </footer>
    </div>
  );
}