"use client";
import { useState } from "react";
import Image from "next/image";

const sampleReviews = [
  {
    name: "Alex Johnson",
    rating: 5,
    comment: "Amazing transformation! I feel stronger and more confident than ever.",
    image: "/user1.jpg",
  },
  {
    name: "Samantha Lee",
    rating: 4,
    comment: "Great program! I lost 10kg in 3 months and built lean muscle.",
    image: "/user2.jpg",
  },
  {
    name: "Michael Brown",
    rating: 5,
    comment: "The best fitness journey I’ve ever been on. Highly recommend!",
    image: "/user3.jpg",
  },
  {
    name: "Jessica Taylor",
    rating: 4,
    comment: "Saw visible changes within weeks! The workouts are killer but effective.",
    image: "/user4.jpg",
  },
  {
    name: "Daniel Martinez",
    rating: 5,
    comment: "Life-changing experience. I gained muscle and improved my endurance.",
    image: "/user5.jpg",
  },
];

export default function Reviews() {
  const [reviews] = useState(sampleReviews);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#222] mb-6">See Transformations</h1>
      <div className="max-w-3xl w-full grid gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex gap-4">
            <Image src={review.image} alt={review.name} width={60} height={60} className="rounded-full h-16 w-16" />
            <div>
              <h2 className="text-lg text-[#222] font-semibold">{review.name}</h2>
              <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
