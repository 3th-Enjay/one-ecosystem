// src/components/FormInput.tsx
import React, { ChangeEvent } from 'react';

interface FormInputProps {
  type: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string; // Add className prop as optional
}

const FormInput: React.FC<FormInputProps> = ({ type, label, value, onChange, placeholder, className = '' }) => {
  return (
    <div className={`form-input ${className}`}>
      <label className="block text-white mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded text-black"
      />
    </div>
  );
};

export default FormInput;
