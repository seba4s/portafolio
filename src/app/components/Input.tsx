import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[#F9FAFB] mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-[#111827] border border-gray-800 rounded-lg text-[#F9FAFB] focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 transition-all ${className}`}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, className = '', ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[#F9FAFB] mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 bg-[#111827] border border-gray-800 rounded-lg text-[#F9FAFB] focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 transition-all resize-none ${className}`}
        {...props}
      />
    </div>
  );
}
