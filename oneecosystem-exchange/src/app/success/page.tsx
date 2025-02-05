"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gold px-6">
      <div className="max-w-md w-full bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-xl shadow-lg text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-3xl font-semibold text-white mb-2">Success!</h1>
        <p className="text-lg text-white mb-6">
          Your passphrase has been successfully created and sent to your email.
        </p>
        <button
          onClick={() => router.push("/login")} // Example: Redirect to login page or any other route
          className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-gray-800 transition duration-200"
        >
          Go to Telegram
        </button>
      </div>
    </div>
  );
}
