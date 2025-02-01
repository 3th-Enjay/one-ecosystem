"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar"; // Ensure you have a Navbar component

export default function PassphrasePage() {
    const [formData, setFormData] = useState({
        passphrase: "",
        confirmPassphrase: "",
    });

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const router = useRouter();

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if the passphrases match
        if (formData.passphrase !== formData.confirmPassphrase) {
            setError("Passphrases do not match.");
            return;
        }

        // If the passphrases match, show success and redirect to the next page
        setSuccess("Passphrase created successfully!");
        setError(""); // Clear any existing error

        // Simulate successful passphrase creation (you can add actual logic here)
        setTimeout(() => {
            router.push("/next-page"); // Replace with the page you want to navigate to after success
        }, 2000);
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <div className="max-w-2xl mx-auto p-4 mt-20">
                <h1 className="text-3xl font-bold text-center mb-6">Create Your Passphrase</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Passphrase Field */}
                    <div>
                        <label className="block text-sm font-medium text-gold">Enter Passphrase</label>
                        <input
                            type="password"
                            name="passphrase"
                            value={formData.passphrase}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded text-black"
                            required
                        />
                    </div>

                    {/* Confirm Passphrase Field */}
                    <div>
                        <label className="block text-sm font-medium text-gold">Confirm Passphrase</label>
                        <input
                            type="password"
                            name="confirmPassphrase"
                            value={formData.confirmPassphrase}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded text-black"
                            required
                        />
                    </div>

                    {/* Error and Success Messages */}
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

                    {/* Submit Button */}
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="border border-gold text-gold bg-black px-8 py-4 text-lg font-medium hover:bg-gold hover:text-black transition-colors duration-300 rounded-full"
                        >
                            Create Passphrase
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
