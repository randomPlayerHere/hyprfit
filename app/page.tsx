"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Home() {
  // State for workouts
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/greek-helmet.png"
            alt="Greek Helmet"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            HYPRFIT
          </span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search workouts..."
              className="bg-white border border-gray-300 rounded-full px-4 py-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-black shadow-sm"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <Link href="#" className="hover:text-black font-medium transition-colors">Community</Link>
          <Link href="#" className="hover:text-black font-medium transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-black font-medium transition-colors">Contact</Link>
          <Link
            href="/dashboard"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium shadow-md"
          >
            Join Us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            FORGE YOUR <span className="bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">SPARTAN</span> PHYSIQUE
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Train like the warriors of old with AI-powered workouts that carve stone from flesh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors text-center shadow-lg"
            >
              Begin Your Trial
            </Link>
            <Link
              href="#"
              className="border-2 border-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors text-center"
            >
              See Transformations
            </Link>
          </div>
        </div>

        <div className="md:w-3/4 flex justify-end">
          <div className="relative w-full max-w-xl aspect-square">
            <Image
              src="/teen_white.png"
              alt="Spartan Warrior"
              width={1000}
              height={1000}
              className="object-cover rounded-lg mix-blend-multiply"
              priority
            />
          </div>
        </div>

      </main>

      
    </div>
  );
}