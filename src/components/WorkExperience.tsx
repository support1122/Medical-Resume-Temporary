import React from 'react';
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

interface WorkExperienceItem {
  id: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

interface WorkExperienceProps {
  data: WorkExperienceItem[];
  onChange: (data: WorkExperienceItem[]) => void;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience: WorkExperienceItem = {
      id: Date.now().toString(),
      position: '',
      company: '',
      location: '',
      duration: '',
      responsibilities: ['']
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (id: string) => {
    onChange(data.filter(item => item.id !== id));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    onChange(data.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const updateResponsibilities = (id: string, index: number, value: string) => {
    onChange(data.map(item => 
      item.id === id 
        ? { ...item, responsibilities: item.responsibilities.map((resp, i) => i === index ? value : resp) }
        : item
    ));
  };

  const addResponsibility = (id: string) => {
    onChange(data.map(item => 
      item.id === id 
        ? { ...item, responsibilities: [...item.responsibilities, ''] }
        : item
    ));
  };

  const removeResponsibility = (id: string, index: number) => {
    onChange(data.map(item => 
      item.id === id 
        ? { ...item, responsibilities: item.responsibilities.filter((_, i) => i !== index) }
        : item
    ));
  };

  const moveExperience = (id: string, direction: 'up' | 'down') => {
    const currentIndex = data.findIndex(item => item.id === id);
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === data.length - 1)
    ) {
      return; // Can't move further
    }

    const newData = [...data];
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    
    // Swap the items
    [newData[currentIndex], newData[targetIndex]] = [newData[targetIndex], newData[currentIndex]];
    
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 flex-1">
          Work Experience
        </h3>
        <button
          onClick={addExperience}
          className="ml-4 flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
          <Plus size={16} />
          Add Experience
        </button>
      </div>

      {data.map((experience, expIndex) => (
        <div key={experience.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-md font-medium text-gray-800">Experience #{expIndex + 1}</h4>
            <div className="flex items-center gap-2">
              {data.length > 1 && (
                <>
                  <button
                    onClick={() => moveExperience(experience.id, 'up')}
                    disabled={expIndex === 0}
                    className={`transition-colors ${
                      expIndex === 0 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : 'text-blue-600 hover:text-blue-800'
                    }`}
                    title="Move up"
                  >
                    <ChevronUp size={16} />
                  </button>
                  <button
                    onClick={() => moveExperience(experience.id, 'down')}
                    disabled={expIndex === data.length - 1}
                    className={`transition-colors ${
                      expIndex === data.length - 1 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : 'text-blue-600 hover:text-blue-800'
                    }`}
                    title="Move down"
                  >
                    <ChevronDown size={16} />
                  </button>
                  <button
                    onClick={() => removeExperience(experience.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position Title</label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Product Manager"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., FLASHFIRE"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={experience.location}
                onChange={(e) => updateExperience(experience.id, 'location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Boston, MA"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <input
                type="text"
                value={experience.duration}
                onChange={(e) => updateExperience(experience.id, 'duration', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Jul 2024 - May 2025"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Key Responsibilities</label>
              <button
                onClick={() => addResponsibility(experience.id)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                + Add Bullet Point
              </button>
            </div>
            
            {experience.responsibilities.map((responsibility, respIndex) => (
              <div key={respIndex} className="flex items-start gap-2 mb-2">
                <span className="text-gray-400 mt-2">•</span>
                <textarea
                  value={responsibility}
                  onChange={(e) => updateResponsibilities(experience.id, respIndex, e.target.value)}
                  rows={2}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Describe your key achievement or responsibility..."
                />
                {experience.responsibilities.length > 1 && (
                  <button
                    onClick={() => removeResponsibility(experience.id, respIndex)}
                    className="text-red-600 hover:text-red-800 mt-2"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};