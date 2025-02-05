"use client";
// src/context/ProtectionContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the context type.
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

// Set your valid codes here.
// For example, VALID_UPC_CODE is set to 6 digits and VALID_REMITTER_CODE to an 8-character alphanumeric string.
const VALID_UPC_CODES: string[] = [
  "G7K4R1",
  "8L2D3Z",
  "T9X4M2",
  "F5P6Q7",
  "R1N9S4",
  "J3U8H5",
  "Z7W2L9",
  "E4B6T1",
  "D5M8Y2",
  "P3C1K7",
]; // Corrected: Array of strings

const VALID_REMITTER_CODES: string[] = [
  "D3F5K2L9",
  "A8B2C7D1",
  "H6J9L2M4",
  "P5Q7R3S8",
  "T1U2V4W6",
  "X9Y8Z3A7",
  "B6C3D9F8",
  "G2H7J4K1",
  "L8M3N2P5",
  "Q7R9S5T2",
]; // Replace with your generated 8-character alphanumeric string.

const ProtectionContext = createContext<ProtectionContextType | undefined>(undefined);

export const ProtectionProvider = ({ children }: { children: ReactNode }) => {
  const [upcCode, setUPCCode] = useState<string | null>(null);
  const [remitterCode, setRemitterCode] = useState<string | null>(null);
  const [passphrase, setPassphrase] = useState<string | null>(null);

  // Use the defined valid codes for validation.
  const isValidUPCCode = () => upcCode === VALID_UPC_CODE;
  const isValidRemitterCode = () => remitterCode === VALID_REMITTER_CODE;
  const isValidPassphrase = () => passphrase !== null && passphrase !== "";

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
