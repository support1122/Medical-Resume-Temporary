import React, { useState, useEffect } from 'react';
import { PersonalInfo } from './components/PersonalInfo';
import { Summary } from './components/Summary';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { Leadership } from './components/Leadership';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Publications } from './components/Publications';
import { ResumePreview } from './components/ResumePreview';
import { JobDescriptionInput } from './components/JobDescriptionInput';
import { OptimizedResumeView } from './components/OptimizedResumeView';
import { RotateCcw, Save, Check } from 'lucide-react';

function App() {
  const initialData = {
    personalInfo: {
      name: '',
      title: '',
      phone: '',
      email: '',
      location: '',
      linkedin: '',
      portfolio: ''
    },
    summary: '',
    workExperience: [{
      id: '1',
      position: '',
      company: '',
      location: '',
      duration: '',
      responsibilities: ['']
    }],
    projects: [{
      id: '1',
      position: '',
      company: '',
      location: '',
      duration: '',
      responsibilities: ['']
    }],
    leadership: [{
      id: '1',
      title: '',
      organization: ''
    }],
    skills: [{
      id: '1',
      category: '',
      skills: ''
    }],
    education: [{
      id: '1',
      institution: '',
      location: '',
      degree: '',
      field: '',
      additionalInfo: ''
    }],
    publications: []
  };

  const [resumeData, setResumeData] = useState(initialData);
  const [showLeadership, setShowLeadership] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const [showPublications, setShowPublications] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [jobDescription, setJobDescription] = useState('');
  const [optimizedResumeData, setOptimizedResumeData] = useState(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showOptimized, setShowOptimized] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    const savedLeadership = localStorage.getItem('showLeadership');
    const savedProjects = localStorage.getItem('showProjects');
    const savedPublications = localStorage.getItem('showPublications');
    const savedJobDescription = localStorage.getItem('jobDescription');
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setResumeData({
          ...parsedData,
          projects: parsedData.projects || initialData.projects,
          workExperience: parsedData.workExperience || initialData.workExperience,
          leadership: parsedData.leadership || initialData.leadership,
          skills: parsedData.skills || initialData.skills,
          education: parsedData.education || initialData.education,
          publications: parsedData.publications || initialData.publications
        });
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
    
    if (savedLeadership) {
      setShowLeadership(JSON.parse(savedLeadership));
    }
    
    if (savedProjects) {
      setShowProjects(JSON.parse(savedProjects));
    }
    
    if (savedPublications) {
      setShowPublications(JSON.parse(savedPublications));
    }
    
    if (savedJobDescription) {
      setJobDescription(savedJobDescription);
    }
  }, []);

  // Reset saved status when data changes
  useEffect(() => {
    setIsSaved(false);
  }, [resumeData, showLeadership, showProjects, showPublications, jobDescription]);

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const updateSummary = (value: string) => {
    setResumeData(prev => ({
      ...prev,
      summary: value
    }));
  };

  const updateWorkExperience = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      workExperience: data
    }));
  };

  const updateProjects = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      projects: data
    }));
  };

  const updateLeadership = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      leadership: data
    }));
  };

  const updateSkills = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      skills: data
    }));
  };

  const updateEducation = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      education: data
    }));
  };

  const updatePublications = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      publications: data
    }));
  };

  const handleSave = () => {
    try {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      localStorage.setItem('showLeadership', JSON.stringify(showLeadership));
      localStorage.setItem('showProjects', JSON.stringify(showProjects));
      localStorage.setItem('showPublications', JSON.stringify(showPublications));
      localStorage.setItem('jobDescription', jobDescription);
      setIsSaved(true);
      
      // Reset the saved status after 2 seconds
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  const handlePrint = () => {
    // Simple print with instructions
    const shouldPrint = window.confirm(
      '📄 PRINT SETTINGS:\n\n' +
      '• Set Margins to "None"\n' +
      '• Disable "Headers and footers"\n' +
      '• Set Scale to 100%\n' +
      '• Use "Save as PDF" for best quality\n\n' +
      'Click OK to print your resume.'
    );
    
    if (shouldPrint) {
      window.print();
    }
  };

  const handleStartOver = () => {
    if (window.confirm('Are you sure you want to start over? This will reset all your data.')) {
      // Clear localStorage
      localStorage.removeItem('resumeData');
      localStorage.removeItem('showLeadership');
      localStorage.removeItem('showProjects');
      localStorage.removeItem('showPublications');
      localStorage.removeItem('jobDescription');
      
      setResumeData({
        personalInfo: {
          name: '',
          title: '',
          phone: '',
          email: '',
          location: '',
          linkedin: '',
          portfolio: ''
        },
        summary: '',
        workExperience: [{
          id: '1',
          position: '',
          company: '',
          duration: '',
          responsibilities: ['']
        }],
        projects: [{
          id: '1',
          position: '',
          company: '',
          duration: '',
          responsibilities: ['']
        }],
        leadership: [{
          id: '1',
          title: '',
          organization: ''
        }],
        skills: [{
          id: '1',
          category: '',
          skills: ''
        }],
        education: [{
          id: '1',
          institution: '',
          location: '',
          degree: '',
          field: '',
          additionalInfo: ''
        }],
        publications: []
      });
      setIsSaved(false);
      setShowProjects(false);
      setShowPublications(false);
      setJobDescription('');
      setOptimizedResumeData(null);
      setShowOptimized(false);
    }
  };

  const optimizeResume = async () => {
    if (!jobDescription.trim()) {
      alert('Please enter a job description first.');
      return;
    }

    setIsOptimizing(true);
    
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      const apiEndpoint = import.meta.env.VITE_API_ENDPOINT || 'https://api.openai.com/v1/chat/completions';
      
      if (!apiKey) {
        alert('Please set your OpenAI API key in the .env file. See .env.example for instructions.');
        return;
      }

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are a professional resume optimization expert. Optimize the provided resume content to better match the job description while maintaining truthfulness. Return the response as a JSON object with the same structure as the input resume data, but with optimized content. Focus on: 1) Tailoring keywords to match job requirements 2) Emphasizing relevant experience 3) Improving impact statements with metrics 4) Enhancing skill alignment. Do not fabricate experience or skills.'
            },
            {
              role: 'user',
              content: `Job Description:\n${jobDescription}\n\nCurrent Resume Data:\n${JSON.stringify(resumeData, null, 2)}`
            }
          ],
          temperature: 0.7,
          max_tokens: 4000
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const optimizedContent = JSON.parse(data.choices[0].message.content);
      
      setOptimizedResumeData(optimizedContent);
      setShowOptimized(true);
      
    } catch (error) {
      console.error('Error optimizing resume:', error);
      alert('Error optimizing resume. Please check your API key and try again.');
    } finally {
      setIsOptimizing(false);
    }
  };

  const applyOptimizedChanges = () => {
    if (optimizedResumeData) {
      setResumeData(optimizedResumeData);
      setShowOptimized(false);
      alert('Optimized changes have been applied to your resume!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b no-print">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Professional Resume Builder Portal</h1>
          <p className="text-gray-600 mt-1">Edit sections on the left, see live preview on the right</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className={`grid gap-6 ${showOptimized ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {/* Left Side - Edit Sections */}
          <div className={`space-y-6 bg-white rounded-lg shadow-sm p-6 h-fit max-h-[800px] overflow-y-auto no-print ${showOptimized ? 'lg:col-span-1' : ''}`}>
            <JobDescriptionInput 
              value={jobDescription}
              onChange={setJobDescription}
              onOptimize={optimizeResume}
              isOptimizing={isOptimizing}
            />
            
            <PersonalInfo 
              data={resumeData.personalInfo} 
              onChange={updatePersonalInfo} 
            />
            <Summary 
              data={resumeData.summary} 
              onChange={updateSummary} 
            />
            <WorkExperience 
              data={resumeData.workExperience} 
              onChange={updateWorkExperience} 
            />
            
            {/* Projects Toggle */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="showProjects"
                  checked={showProjects}
                  onChange={(e) => setShowProjects(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="showProjects" className="text-sm font-medium text-gray-700">
                  Include Projects section
                </label>
              </div>
              
              {showProjects && (
                <Projects 
                  data={resumeData.projects} 
                  onChange={updateProjects} 
                />
              )}
            </div>
            
            {/* Leadership & Volunteering Toggle */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="showLeadership"
                  checked={showLeadership}
                  onChange={(e) => setShowLeadership(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="showLeadership" className="text-sm font-medium text-gray-700">
                  Include Leadership & Volunteering section
                </label>
              </div>
              
              {showLeadership && (
                <Leadership 
                  data={resumeData.leadership} 
                  onChange={updateLeadership} 
                />
              )}
            </div>
            
            <Skills 
              data={resumeData.skills} 
              onChange={updateSkills} 
            />
            <Education 
              data={resumeData.education} 
              onChange={updateEducation} 
            />
            
            {/* Publications Toggle */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="showPublications"
                  checked={showPublications}
                  onChange={(e) => setShowPublications(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="showPublications" className="text-sm font-medium text-gray-700">
                  Include Publications section
                </label>
              </div>
              
              {showPublications && (
                <Publications 
                  data={resumeData.publications} 
                  onChange={updatePublications} 
                />
              )}
            </div>
            
            {/* Save Button */}
            <button
              onClick={handleSave}
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-colors font-medium ${
                isSaved 
                  ? 'bg-green-600 text-white' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isSaved ? <Check size={18} /> : <Save size={18} />}
              {isSaved ? 'Saved!' : 'Save Resume'}
            </button>
            {!isSaved && (
              <p className="text-xs text-gray-500 text-center">
                Save your progress to keep data after refresh
              </p>
            )}
            
            {/* Start Over Button */}
            <button
              onClick={handleStartOver}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              <RotateCcw size={18} />
              Start Over
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              This will clear all your data and start fresh
            </p>
          </div>

          {/* Right Side - Live Preview */}
          <div className={`lg:sticky lg:top-6 h-fit no-print ${showOptimized ? 'lg:col-span-1' : ''}`}>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Live Preview</h2>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm"
                >
                  Print Resume
                </button>
              </div>
              <ResumePreview data={resumeData} showLeadership={showLeadership} showProjects={showProjects} showPublications={showPublications} />
            </div>
          </div>

          {/* Optimized Resume View */}
          {showOptimized && optimizedResumeData && (
            <div className="lg:sticky lg:top-6 h-fit no-print">
              <OptimizedResumeView 
                originalData={resumeData}
                optimizedData={optimizedResumeData}
                showLeadership={showLeadership}
                showProjects={showProjects}
                showPublications={showPublications}
                onApplyChanges={applyOptimizedChanges}
                onClose={() => setShowOptimized(false)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Print-only resume content - This is what gets printed */}
      <ResumePreview data={resumeData} showLeadership={showLeadership} showProjects={showProjects} showPublications={showPublications} />
    </div>
  );
}

export default App;