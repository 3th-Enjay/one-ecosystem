"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PassphrasePage() {
    const [passphrase, setPassphrase] = useState("");
    const [confirmPassphrase, setConfirmPassphrase] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate passphrase
        if (passphrase.length < 8) {
            setError("Passphrase must be at least 8 characters long.");
            return;
        }

        if (passphrase !== confirmPassphrase) {
            setError("Passphrases do not match.");
            return;
        }

        // If validation passes, navigate to the next page (e.g., dashboard or confirmation)
        router.push("/dashboard"); // Replace with your desired route
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gold">
            <h1 className="text-2xl font-bold mb-4">Create Your Passphrase</h1>
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
                <div>
                    <label className="block text-sm font-medium mb-1">Passphrase</label>
                    <input
                        type="text"
                        value={passphrase}
                        onChange={(e) => setPassphrase(e.target.value)}
                        placeholder="Enter your passphrase"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Confirm Passphrase</label>
                    <input
                        type="text"
                        value={confirmPassphrase}
                        onChange={(e) => setConfirmPassphrase(e.target.value)}
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