"use client";
import { useState, useEffect } from 'react';
import { Check, Lock, Shield } from 'react-feather';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get('plan') || 'yearly';
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
  const [billingCycle, setBillingCycle] = useState(initialPlan);
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const planDetails = {
    monthly: {
      name: 'Premium Plan (Monthly)',
      price: 299,
      billingCycle: 'monthly',
      savings: 0,
      features: [
        'Personalized AI workouts & diet plans',
        'Advanced training programs',
        'Deep performance tracking',
        'Exclusive community access',
        'Priority 24/7 support'
      ]
    },
    yearly: {
      name: 'Premium Plan (Yearly)',
      price: 2999,
      billingCycle: 'yearly',
      savings: 589,
      features: [
        'Personalized AI workouts & diet plans',
        'Advanced training programs',
        'Deep performance tracking',
        'Exclusive community access',
        'Priority 24/7 support',
        '2 months free compared to monthly'
      ]
    }
  };

  const currentPlan = planDetails[billingCycle];

  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set('plan', billingCycle);
    window.history.pushState({}, '', url);
  }, [billingCycle]);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
          <div className="flex justify-center text-green-500 mb-6">
            <Check className="h-12 w-12" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-gray-900 mb-6">
            Thank you for upgrading to HYPRFIT Premium. Your account has been activated.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h2 className="font-medium text-gray-900 mb-2">Order Details</h2>
            <p className="text-gray-900">
              <span className="font-medium">Plan:</span> {currentPlan.name}
            </p>
            <p className="text-gray-900">
              <span className="font-medium">Amount Paid:</span> ₹{currentPlan.price}
            </p>
            <p className="text-gray-900">
              <span className="font-medium">Billing:</span> {currentPlan.billingCycle === 'yearly' ? 'Yearly (one payment)' : 'Monthly (recurring)'}
            </p>
            <p className="text-gray-900">
              <span className="font-medium">Email:</span> {billingDetails.email}
            </p>
          </div>
          <a
            href="http://localhost:8501/"
            className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors block text-center"
          >
            Go to Dashboard
          </a>
          <p className="mt-4 text-sm text-gray-500">
            A receipt has been sent to your email address.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Purchase</h1>
          <p className="text-lg text-gray-900">
            You're upgrading to HYPRFIT Premium
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 h-fit">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1 text-sm rounded-md font-medium transition-colors ${
                    billingCycle === 'monthly' 
                      ? 'bg-white text-black shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-3 py-1 text-sm rounded-md font-medium transition-colors ${
                    billingCycle === 'yearly' 
                      ? 'bg-white text-black shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Plan</span>
                <span className="font-medium text-gray-900">{currentPlan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Billing Cycle</span>
                <span className="font-medium text-gray-900 capitalize">{currentPlan.billingCycle}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <span className="text-gray-600">Total</span>
                <span className="font-bold text-lg text-gray-900">₹{currentPlan.price}</span>
              </div>
              {currentPlan.savings > 0 && (
                <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
                  You're saving ₹{currentPlan.savings} compared to monthly billing
                </div>
              )}
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-gray-900 mb-3">Premium Features</h3>
              <ul className="space-y-2">
                {currentPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-900">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>
              
              <div className="mb-6">
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-4 font-medium transition-colors ${
                      paymentMethod === 'card' 
                        ? 'text-black border-b-2 border-black' 
                        : 'text-gray-500 hover:text-gray-700 hover:cursor-pointer'
                    }`}
                  >
                    Credit/Debit Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod('upi')}
                    className={`py-2 px-4 font-medium transition-colors ${
                      paymentMethod === 'upi' 
                        ? 'text-black border-b-2 border-black' 
                        : 'text-gray-500 hover:text-gray-700 hover:cursor-pointer'
                    }`}
                  >
                    UPI
                  </button>
                  <button
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`py-2 px-4 font-medium transition-colors ${
                      paymentMethod === 'netbanking' 
                        ? 'text-black border-b-2 border-black' 
                        : 'text-gray-500 hover:cursor-pointer hover:text-gray-700'
                    }`}
                  >
                    Net Banking
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="card-number" className="block text-sm text-black font-medium mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="card-number"
                        name="number"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-black focus:border-black"
                        value={cardDetails.number}
                        onChange={handleCardChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm text-black font-medium text-gray-900 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          name="expiry"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-black focus:border-black"
                          value={cardDetails.expiry}
                          onChange={handleCardChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm text-black font-medium text-gray-900 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-black focus:border-black"
                          value={cardDetails.cvv}
                          onChange={handleCardChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="card-name" className="block text-sm text-black font-medium text-gray-900 mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        id="card-name"
                        name="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-black focus:border-black"
                        value={cardDetails.name}
                        onChange={handleCardChange}
                        required
                      />
                    </div>

                    <div className="pt-4">
                      <h3 className="text-lg font-medium text-gray-900 text-black mb-4">Billing Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm text-black font-medium text-gray-900 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-black focus:border-black"
                            value={billingDetails.email}
                            onChange={handleBillingChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm text-black font-medium text-gray-900 mb-1">
                            Street Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-black focus:border-black"
                            value={billingDetails.address}
                            onChange={handleBillingChange}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="city" className="block text-sm text-black font-medium text-gray-900 mb-1">
                              City
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-black focus:border-black"
                              value={billingDetails.city}
                              onChange={handleBillingChange}
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="state" className="block text-sm text-black font-medium text-gray-900 mb-1">
                              State
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-black focus:border-black"
                              value={billingDetails.state}
                              onChange={handleBillingChange}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="zip" className="block text-sm text-black font-medium text-gray-900 mb-1">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-black focus:border-black"
                            value={billingDetails.zip}
                            onChange={handleBillingChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className={`w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors ${
                          isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {isProcessing ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span>
                            {billingCycle === 'yearly' 
                              ? `Pay ₹${currentPlan.price} for 1 Year` 
                              : `Pay ₹${currentPlan.price}/month`}
                          </span>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                      <Lock className="flex-shrink-0 h-4 w-4 mr-1" />
                      <span>Your payment is secured with 256-bit encryption</span>
                    </div>
                  </div>
                </form>
              )}

              {paymentMethod === 'upi' && (
                <div className="text-center py-8">
                  <div className="max-w-md mx-auto">
                    <div className="mb-6">
                      <div className="bg-gray-100 p-4 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2">UPI QR Code</div>
                          <div className="text-xs text-gray-400">(Placeholder for QR code)</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-900 mb-6">
                      Scan the QR code with any UPI app to complete your payment
                    </p>
                    <div className="mb-6">
                      <label htmlFor="upi-id" className="block text-sm font-medium text-gray-900 mb-1">
                        Or enter UPI ID
                      </label>
                      <input
                        type="text"
                        id="upi-id"
                        placeholder="yourname@upi"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-black focus:border-black max-w-xs mx-auto"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                    </div>
                    <button
                      className="w-full max-w-xs bg-black hover:pointer-cursor text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors mx-auto"
                      onClick={() => {
                        setIsProcessing(true);
                        setTimeout(() => {
                          setIsProcessing(false);
                          setPaymentSuccess(true);
                        }, 2000);
                      }}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Verify Payment'}
                    </button>
                  </div>
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="py-4">
                  <div className="mb-4">
                    <label htmlFor="bank" className="block text-sm font-medium text-gray-900 mb-1">
                      Select Bank
                    </label>
                    <select
                      id="bank"
                      className="w-full px-4 py-3 border border-gray-300 hover:pointer-cursor text-black rounded-lg focus:ring-black focus:border-black"
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                    >
                      <option value="">Choose your bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="axis">Axis Bank</option>
                      <option value="kotak">Kotak Mahindra Bank</option>
                    </select>
                  </div>
                  <button
                    className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:pointer-cursor hover:bg-gray-800 transition-colors"
                    onClick={() => {
                      setIsProcessing(true);
                      setTimeout(() => {
                        setIsProcessing(false);
                        setPaymentSuccess(true);
                      }, 2000);
                    }}
                    disabled={isProcessing || !selectedBank}
                  >
                    {isProcessing ? 'Processing...' : 'Proceed to Net Banking'}
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center text-sm text-gray-500">
              <Shield className="flex-shrink-0 h-4 w-4 mr-1" />
              <span>Your data is protected and will not be shared with third parties</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}