import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        className="
          w-full px-4 py-2 rounded-lg border border-gray-300
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200
          placeholder:text-gray-400
        "
        {...props}
      />
    </div>
  );
};