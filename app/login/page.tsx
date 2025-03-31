"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Simulate login process
    try {
      // Replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to dashboard on success
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 flex flex-col justify-center">
      <div className="max-w-lg mx-auto px-18 py-18 bg-white rounded-xl shadow-md">
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4">
            <Image
              src="/greek-helmet.png"
              alt="Greek Helmet"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="font-bold text-3xl">HYPRFIT</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-black">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 accent-black focus:ring-2 focus:ring-black"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-black font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <footer className="max-w-md mx-auto p-6 mt-8 text-center">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Temple of Gains
        </div>
      </footer>
    </div>
  );
}