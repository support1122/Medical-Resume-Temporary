import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  field: string;
  additionalInfo: string;
}

interface EducationProps {
  data: EducationItem[];
  onChange: (data: EducationItem[]) => void;
}

export const Education: React.FC<EducationProps> = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation: EducationItem = {
      id: Date.now().toString(),
      institution: '',
      location: '',
      degree: '',
      field: '',
      additionalInfo: ''
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (id: string) => {
    onChange(data.filter(item => item.id !== id));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onChange(data.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 flex-1">
          Education
        </h3>
        <button
          onClick={addEducation}
          className="ml-4 flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
          <Plus size={16} />
          Add Education
        </button>
      </div>

      {data.map((education, index) => (
        <div key={education.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-md font-medium text-gray-800">Education #{index + 1}</h4>
            {data.length > 1 && (
              <button
                onClick={() => removeEducation(education.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
              <input
                type="text"
                value={education.institution}
                onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., University of Southern California"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={education.location}
                onChange={(e) => updateEducation(education.id, 'location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Los Angeles, CA, United States"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Master of Science"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
              <input
                type="text"
                value={education.field}
                onChange={(e) => updateEducation(education.id, 'field', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Engineering Management"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Info (Awards, Specialization, etc.)</label>
              <textarea
                value={education.additionalInfo}
                onChange={(e) => updateEducation(education.id, 'additionalInfo', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="e.g., Dean's Master's Scholarship, Specialisation: UX/UI"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};