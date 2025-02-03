'use client'
// src/pages/remitter/index.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProtection } from "../../context/ProtectionContext";
import FormInput from "../../components/FormInput";

export default function RemitterPage() {
  const { setRemitterCode, isValidUPCCode, isValidRemitterCode } = useProtection();
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
    <div className="form-container">
      <h1>Enter Remitter Code</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Remitter Code"
          value={remitterCode}
          onChange={(e) => setRemitterCodeLocal(e.target.value)}  // Update local state
          placeholder="Enter Remitter Code"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
