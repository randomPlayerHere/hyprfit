"use client";
import { Check } from 'react-feather';
import { useState } from 'react';
import Image from 'next/image';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('yearly');

  const monthlyPrice = 299;
  const yearlyTotal = 2999;
  const monthlyEquivalent = yearlyTotal / 12; // ₹249.92/month when paid yearly
  const yearlySavings = (monthlyPrice * 12) - yearlyTotal; // ₹589 savings

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600">
          Start for free, upgrade when you're ready. Cancel anytime.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center my-12">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-8 py-3 rounded-md font-medium transition-colors ${
              billingCycle === 'monthly' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-8 py-3 rounded-md font-medium transition-colors ${
              billingCycle === 'yearly' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Yearly <span className="text-green-600">(16% off)</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Free Plan */}
        <div className="flex flex-col border border-gray-200 rounded-xl divide-y divide-gray-200">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900">Free</h2>
            <p className="mt-4 text-gray-500">Essential fitness features</p>
            <div className="mt-8">
              <p className="text-4xl font-bold text-gray-900">₹0</p>
              <p className="mt-2 text-gray-500">No hidden charges</p>
            </div>
            <a 
              href="/dashboard"
              className="mt-8 w-full block py-3 border border-gray-300 rounded-lg text-gray-800 font-medium hover:cursor-pointer hover:bg-gray-50 transition-colors text-center"
            >
              Get Started
            </a>
          </div>
          <div className="p-8 pt-6">
            <h3 className="text-sm font-medium text-gray-900">Includes:</h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Basic workout library</span>
              </li>
              <li className="flex items-center">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">3 AI workouts/month</span>
              </li>
              <li className="flex items-center">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Streak tracking</span>
              </li>
              <li className="flex items-center">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Basic progress Insights</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col border-2 border-black rounded-xl shadow-lg relative">
          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
            Most Popular
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900">Premium</h2>
            <p className="mt-4 text-gray-500">Complete fitness solution</p>
            <div className="mt-8">
              {billingCycle === 'yearly' ? (
                <>
                  <p className="text-4xl font-bold text-gray-900">₹249<span className="text-lg text-gray-500">/month</span></p>
                  <p className="text-gray-500">₹2,999 billed annually</p>
                  <p className="text-sm text-green-600 mt-1">Save ₹589 compared to monthly</p>
                </>
              ) : (
                <>
                  <p className="text-4xl font-bold text-gray-900">₹299<span className="text-lg text-gray-500">/month</span></p>
                  <p className="text-gray-500">Billed monthly</p>
                </>
              )}
            </div>
            <a
              href={`/transaction?plan=${billingCycle}`}
              className="mt-8 w-full block py-3 bg-black text-white font-medium rounded-lg hover:cursor-pointer hover:bg-gray-800 transition-colors text-center"
            >
              {billingCycle === 'yearly' ? 'Get Yearly Plan' : 'Get Monthly Plan'}
            </a>
          </div>
          <div className="p-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900">Everything in Free, plus:</h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Personalized AI workouts & diet plans</span>
              </li>
              <li className="flex items-center">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Advanced training programs</span>
              </li>
              <li className="flex items-center">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Deep performance tracking</span>
              </li>
              <li className="flex items-center">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Exclusive community access</span>
              </li>
              <li className="flex items-center">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-600">Priority 24/7 support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-end items-end pt-12">
        <div className="flex items-center gap-2">
          <Image
            src="/greek-helmet.png"
            alt="Greek Helmet"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="font-bold text-[#222] text-lg">HYPRFIT ©</span>
        </div>
      </div>
    </div>
  );
}