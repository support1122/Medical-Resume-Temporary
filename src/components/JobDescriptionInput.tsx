import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
  onOptimize: () => void;
  isOptimizing: boolean;
}

export const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({
  value,
  onChange,
  onOptimize,
  isOptimizing
}) => {
  return (
    <div className="space-y-4 border-b border-gray-200 pb-6">
      <h3 className="text-lg font-semibold text-gray-800">
        AI Resume Optimization
      </h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Job Description
        </label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Paste the job description here to optimize your resume content using AI..."
        />
        <p className="text-xs text-gray-500 mt-1">
          AI will tailor your resume content to better match this job description.
        </p>
      </div>

      <button
        onClick={onOptimize}
        disabled={isOptimizing || !value.trim()}
        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-colors font-medium ${
          isOptimizing || !value.trim()
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
        }`}
      >
        {isOptimizing ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Optimizing Resume...
          </>
        ) : (
          <>
            <Sparkles size={18} />
            Optimize Resume with AI
          </>
        )}
      </button>
      
      {!value.trim() && (
        <p className="text-xs text-amber-600 text-center">
          Enter a job description to enable AI optimization
        </p>
      )}
    </div>
  );
};