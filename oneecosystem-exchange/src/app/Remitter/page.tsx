'use client'
// src/pages/remitter/index.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProtection } from "../../context/ProtectionContext";
import FormInput from "../../components/FormInput";

export default function RemitterPage() {
  const { setRemitterCode, isValidUPCCode } = useProtection();
  const [remitterCode, setRemitterCodeLocal] = useState("");  // Local state for the form
  const router = useRouter();

  useEffect(() => {
    if (!isValidUPCCode()) {
      router.push("/"); // Redirect to home if UPC code is not valid
    }
  }, [isValidUPCCode, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (remitterCode === "67890") { // Example remitter code
      setRemitterCode(remitterCode);  // This will update the context's remitter code
      router.push("/passphrase"); // Redirect to passphrase page
    } else {
      alert("Invalid Remitter Code!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-gold flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center  mb-6">Enter Remitter Code</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            type="text"
            label="Remitter Code"
            value={remitterCode}
            onChange={(e) => setRemitterCodeLocal(e.target.value)}  // Update local state
            placeholder="Enter Remitter Code"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <button
            type="submit"
            className="w-full text-white border-gold py-2 rounded-full hover:bg-gold transition-colors hover:text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
