import React, { useState } from 'react';
import { ResumePreview } from './ResumePreview';
import { Check, X, Eye, EyeOff } from 'lucide-react';

interface OptimizedResumeViewProps {
  originalData: any;
  optimizedData: any;
  showLeadership: boolean;
  showProjects: boolean;
  showPublications: boolean;
  onApplyChanges: () => void;
  onClose: () => void;
}

export const OptimizedResumeView: React.FC<OptimizedResumeViewProps> = ({
  originalData,
  optimizedData,
  showLeadership,
  showProjects,
  showPublications,
  onApplyChanges,
  onClose
}) => {
  const [showChanges, setShowChanges] = useState(false);

  const getChanges = () => {
    const changes: string[] = [];
    
    // Compare summary
    if (originalData.summary !== optimizedData.summary) {
      changes.push('✓ Professional Summary optimized');
    }
    
    // Compare work experience
    if (JSON.stringify(originalData.workExperience) !== JSON.stringify(optimizedData.workExperience)) {
      changes.push('✓ Work Experience enhanced');
    }
    
    // Compare projects if shown
    if (showProjects && JSON.stringify(originalData.projects) !== JSON.stringify(optimizedData.projects)) {
      changes.push('✓ Projects section improved');
    }
    
    // Compare publications if shown
    if (showPublications && JSON.stringify(originalData.publications) !== JSON.stringify(optimizedData.publications)) {
      changes.push('✓ Publications section enhanced');
    }
    
    // Compare skills
    if (JSON.stringify(originalData.skills) !== JSON.stringify(optimizedData.skills)) {
      changes.push('✓ Skills section tailored');
    }
    
    // Compare personal info
    if (JSON.stringify(originalData.personalInfo) !== JSON.stringify(optimizedData.personalInfo)) {
      changes.push('✓ Professional title refined');
    }
    
    return changes;
  };

  const changes = getChanges();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></span>
          AI Optimized Resume
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Changes Summary */}
      <div className="mb-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-800">Changes Made:</h3>
          <button
            onClick={() => setShowChanges(!showChanges)}
            className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            {showChanges ? <EyeOff size={14} /> : <Eye size={14} />}
            {showChanges ? 'Hide' : 'Show'} Details
          </button>
        </div>
        
        {showChanges && (
          <div className="space-y-1">
            {changes.length > 0 ? (
              changes.map((change, index) => (
                <div key={index} className="text-xs text-green-700">
                  {change}
                </div>
              ))
            ) : (
              <div className="text-xs text-gray-600">No changes detected</div>
            )}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={onApplyChanges}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
        >
          <Check size={16} />
          Apply Changes
        </button>
        <button
          onClick={onClose}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          <X size={16} />
          Discard
        </button>
      </div>

      {/* Optimized Resume Preview */}
      <div className="border-t border-gray-200 pt-4">
        <ResumePreview 
          data={optimizedData} 
          showLeadership={showLeadership} 
          showProjects={showProjects} 
          showPublications={showPublications}
        />
      </div>
    </div>
  );
};