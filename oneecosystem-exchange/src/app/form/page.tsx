"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import CrystalBackground from "@/components/CrystalBackground";
import Navbar from "@/components/Navbar";

export default function FormPage() {
    const [formData, setFormData] = useState({
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
    });

    const [error, setError] = useState("");
    const router = useRouter();

    // Mock UPC code (replace with actual verification logic)
    const validUPCCode = "1234567890";

    // Handle form input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate UPC code before proceeding
        if (formData.upcCode !== validUPCCode) {
            setError("Invalid UPC Code");
            return;
        }

        // Navigate to the remitter page if UPC code is valid
        router.push("/Remitter");

        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="bg-black relative mt-[4.5rem]">
            <Navbar />
            <div className="absolute inset-0 bounce">
                <CrystalBackground />
            </div>

            <div className="relative max-w-2xl mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6 text-gold">Trading Information Form</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Personal Details */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gold">Surname</label>
                            <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gold">First Name</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gold">Other Name</label>
                        <input type="text" name="otherName" value={formData.otherName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gold">Marital Status</label>
                        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required>
                            <option value="">Select Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Separated">Separated</option>
                        </select>
                    </div>

                    {/* Trading Information */}
                    <div>
                        <label className="block text-sm font-medium text-gold">Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gold">Valid OneCoin Username</label>
                        <input type="text" name="onecoinUsername" value={formData.onecoinUsername} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gold">Amount of OneCoins to Trade</label>
                        <input type="number" name="amountToTrade" value={formData.amountToTrade} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gold">Select Your Favorite Cryptocurrency</label>
                        <select name="cryptocurrency" value={formData.cryptocurrency} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required>
                            <option value="">Select a Cryptocurrency</option>
                            <option value="BTC">BTC</option>
                            <option value="USDT TRC20">USDT TRC20</option>
                            <option value="USDT ERC20">USDT ERC20</option>
                            <option value="USDT BNB">USDT BNB</option>
                            <option value="TRX">TRX</option>
                            <option value="ETH">ETH</option>
                            <option value="BNB">BNB</option>
                            <option value="POL">POL</option>
                            <option value="TWT">TWT</option>
                        </select>
                    </div>

                    {/* Payment Information */}
                    <div>
                        <label className="block text-sm font-medium text-gold">Bank Transfer</label>
                        <input type="text" name="bankTransfer" value={formData.bankTransfer} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gold">Wallet Address/Account Number</label>
                        <input type="text" name="walletAddress" value={formData.walletAddress} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gold">Passcode</label>
                        <input type="text" name="passcode" value={formData.passcode} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gold">UPC Code</label>
                        <input type="text" name="upcCode" value={formData.upcCode} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    {/* Submit Button */}
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="border border-gold text-gold bg-black px-8 py-4 text-lg font-medium hover:bg-gold hover:text-black transition-colors duration-300 rounded-full">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}