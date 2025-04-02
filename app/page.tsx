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
          <span className="text-2xl px-1 font-bold tracking-tighter bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            HYPRFIT ©
          </span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="#" className="hover:text-black font-medium transition-colors">Community</Link>
          <Link href="/pricing" className="hover:text-black font-medium transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-black font-medium transition-colors">Contact</Link>
          <Link
            href="/signup"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium shadow-md"
          >
            Join Us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-10 md:py-16 flex flex-col md:flex-row items-center gap-14">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            FORGE YOUR <span className="bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">SPARTAN</span> PHYSIQUE
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Train like the warriors of old with AI-powered workouts that carve stone from flesh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/signup"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors text-center shadow-lg"
            >
              Begin Your Trial
            </Link>
            <Link
              href="/see-transformation"
              className="border-2 border-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#fff] transition-colors text-center"
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

      {/* HyprFit Introduction Section */}
      <section className="bg-[#222] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Elevate Your Fitness with HyprFit</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              HyprFit redefines personal training through adaptive AI technology that learns and evolves with your unique physiology. 
              Our platform delivers precision-crafted workouts that automatically adjust to your performance, recovery needs, 
              and long-term goals—eliminating guesswork and maximizing results.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - White Background */}
      <section className="bg-white text-[#222] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">HyprFit Advanced Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Adaptive Intelligence */}
            <div className="p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-[#222] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-3xl font-semibold">Adaptive Intelligence</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#222] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Injury-aware auto-adjusting workouts</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#222] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">AI learns your recovery patterns</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 - Streak System */}
            <div className="p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-[#222] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-3xl font-semibold">Streak System</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#222] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Visual progress tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#222] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Milestone achievement rewards</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 - Daily Challenges */}
            <div className="p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-[#222] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-3xl font-semibold">Daily Challenges</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#222] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Personalized performance targets</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#222] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Adaptive difficulty scaling</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 - Future-Readiness */}
            <div className="p-8 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-[#222] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-3xl font-semibold">Future-Readiness</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#222] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Plateau prediction system</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#222] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="text-lg">Automated training cycles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <button className="bg-[#222] text-white hover:bg-black font-bold py-4 px-10 rounded-full text-lg transition-all">
              Start Your Smart Training Journey
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 text-[#222] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: "How does HyprFit's AI adapt to my workouts?",
                answer: "Our AI continuously learns from your training history, adjusting intensity, exercise selection, and recovery times to optimize your progress.",
              },
              {
                question: "Can HyprFit prevent workout injuries?",
                answer: "Yes! Our system monitors fatigue, performance trends, and previous injuries to auto-adjust workouts, ensuring safer training sessions.",
              },
              {
                question: "How does the streak system work?",
                answer: "Every completed workout contributes to your streak. The longer your streak, the more rewards and achievements you unlock!",
              },
              {
                question: "Are the daily challenges personalized?",
                answer: "Yes, they are tailored to your fitness level, performance trends, and goals, with adaptive difficulty to keep pushing your limits.",
              },
              {
                question: "What happens if I plateau in progress?",
                answer: "Our AI detects plateaus and automatically adjusts your training cycles, ensuring continuous improvement and breaking stagnation.",
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white shadow-md p-5 rounded-lg cursor-pointer transition-all">
                <summary className="text-xl font-semibold flex justify-between items-center cursor-pointer">
                  {faq.question}
                  <span className="text-gray-500 text-2xl">+</span>
                </summary>
                <p className="mt-3 text-lg text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#222] border-t border-gray-200 py-12 px-6 text-white flex flex-col">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">COMPANY</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="block hover:text-gray-300 transition">About Us</Link></li>
              <li><Link href="#" className="block hover:text-gray-300 transition">Careers</Link></li>
              <li><Link href="#" className="block hover:text-gray-300 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">PRODUCTS</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="block hover:text-gray-300 transition">Workouts</Link></li>
              <li><Link href="#" className="block hover:text-gray-300 transition">Nutrition</Link></li>
              <li><Link href="#" className="block hover:text-gray-300 transition">Coaching</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">SUPPORT</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="block hover:text-gray-300 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="block hover:text-gray-300 transition">Terms</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">MY ACCOUNT</h3>
            <div className="space-y-4">
              <Link href="/login" className="block hover:text-gray-300 transition">Log In</Link>
              <Link href="#" className="block hover:text-gray-300 transition">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Bottom-right company name and logo */}
        <div className="w-full flex justify-end items-end pt-12">
          <div className="flex items-center gap-2">
            <Image
              src="/greek-helmet-white.png"
              alt="Greek Helmet"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="font-bold text-lg">HYPRFIT ©</span>
          </div>
        </div>
      </footer>
    </div>
  );
}