"use client"
// src/context/ProtectionContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ProtectionContextType {
  upcCode: string | null;
  remitterCode: string | null;
  passphrase: string | null;
  setUPCCode: (code: string) => void;
  setRemitterCode: (code: string) => void;
  setPassphrase: (passphrase: string) => void;
  isValidUPCCode: () => boolean;
  isValidRemitterCode: () => boolean;
  isValidPassphrase: () => boolean;
}

const ProtectionContext = createContext<ProtectionContextType | undefined>(undefined);

export const ProtectionProvider = ({ children }: { children: ReactNode }) => {
  const [upcCode, setUPCCode] = useState<string | null>(null);
  const [remitterCode, setRemitterCode] = useState<string | null>(null);
  const [passphrase, setPassphrase] = useState<string | null>(null);

  // Logic for checking if the provided code matches the valid code
  const isValidUPCCode = () => upcCode === "12345"; // Example UPC code
  const isValidRemitterCode = () => remitterCode === "67890"; // Example Remitter code
  const isValidPassphrase = () => passphrase !== null; // Valid if passphrase exists

  return (
    <ProtectionContext.Provider
      value={{
        upcCode,
        remitterCode,
        passphrase,
        setUPCCode,
        setRemitterCode,
        setPassphrase,
        isValidUPCCode,
        isValidRemitterCode,
        isValidPassphrase,
      }}
    >
      {children}
    </ProtectionContext.Provider>
  );
};

export const useProtection = (): ProtectionContextType => {
  const context = useContext(ProtectionContext);
  if (!context) {
    throw new Error("useProtection must be used within a ProtectionProvider");
  }
  return context;
};
