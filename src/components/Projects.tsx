import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface ProjectItem {
  id: string;
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

interface ProjectsProps {
  data: ProjectItem[];
  onChange: (data: ProjectItem[]) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ data, onChange }) => {
  const addProject = () => {
    const newProject: ProjectItem = {
      id: Date.now().toString(),
      position: '',
      company: '',
      duration: '',
      responsibilities: ['']
    };
    onChange([...data, newProject]);
  };

  const removeProject = (id: string) => {
    onChange(data.filter(item => item.id !== id));
  };

  const updateProject = (id: string, field: string, value: string) => {
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 flex-1">
          Projects
        </h3>
        <button
          onClick={addProject}
          className="ml-4 flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {data.map((project, projIndex) => (
        <div key={project.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-md font-medium text-gray-800">Project #{projIndex + 1}</h4>
            {data.length > 1 && (
              <button
                onClick={() => removeProject(project.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
              <input
                type="text"
                value={project.position}
                onChange={(e) => updateProject(project.id, 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., E-commerce Platform Development"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization/Company</label>
              <input
                type="text"
                value={project.company}
                onChange={(e) => updateProject(project.id, 'company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Personal Project, University, Company Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <input
                type="text"
                value={project.duration}
                onChange={(e) => updateProject(project.id, 'duration', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Jan 2024 - Mar 2024"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Key Achievements & Technologies</label>
              <button
                onClick={() => addResponsibility(project.id)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                + Add Bullet Point
              </button>
            </div>
            
            {project.responsibilities.map((responsibility, respIndex) => (
              <div key={respIndex} className="flex items-start gap-2 mb-2">
                <span className="text-gray-400 mt-2">•</span>
                <textarea
                  value={responsibility}
                  onChange={(e) => updateResponsibilities(project.id, respIndex, e.target.value)}
                  rows={2}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Describe your key achievement, technology used, or project outcome..."
                />
                {project.responsibilities.length > 1 && (
                  <button
                    onClick={() => removeResponsibility(project.id, respIndex)}
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