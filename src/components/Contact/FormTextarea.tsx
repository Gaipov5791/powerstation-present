import React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        className="
          w-full px-4 py-2 rounded-lg border border-gray-300
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200
          placeholder:text-gray-400
          resize-none
        "
        rows={4}
        {...props}
      />
    </div>
  );
};