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
      name: 'KANCHAN YADAV',
      title: 'Biostatistician | Epidemiologist | Health Data Scientist',
      phone: '+1-781-456-0523',
      email: 'kanchanyad90@gmail.com',
      location: 'Cambridge, MA, USA',
      linkedin: 'LinkedIn',
      portfolio: '',
      github: ''
    },
    summary: 'MPH in Population Sciences and PhD in Physical Chemistry with 7+ years of biostatistics, epidemiology, and public health research. Expertise spans statistical programming (R, STATA, SAS, SPSS), data visualization (Tableau, Power BI, Excel), survival analysis, causal inference, and Bayesian modeling. Led 20+ studies impacting 1M+ participants and produced 50+ reports/dashboards that guided policy and program evaluation.',
    workExperience: [
      {
        id: '1',
        position: 'Research Assistant – Occupational Safety & Health',
        company: 'Harvard University, School of Public Health',
        location: 'Boston, MA',
        duration: 'Nov 2024 – May 2025',
        roleType: 'Full-time',
        responsibilities: [
          'Applied psychometric modeling techniques (Item Response Theory, bifactor analysis, graded response models) to validate the Thriving from Work Questionnaire, achieving >0.85 reliability for the general factor and identifying structural inconsistencies in subdomains.',
          'Designed and managed a Qualtrics survey with 500+ participants via Prolific; executed end-to-end data workflows including cleaning, transformation, and 5% missing data imputation, ensuring high-quality datasets across age cohorts (20–49 vs. 50+).',
          'Engineered advanced statistical analyses (logistic regression, t-tests, Pearson & polychoric correlations) in R, building 15+ reproducible data models that revealed strong score correlations (r > 0.80) and predictive links to workplace well-being outcomes.',
          'Built automated R pipelines to generate validated psychometric outputs, demonstrating positive correlations with job satisfaction (+0.65), flourishing (+0.70), well-being (+0.72) and strong negative correlations with burnout (–0.55) and turnover intention (–0.50).'
        ]
      },
      {
        id: '2',
        position: 'Research Intern – Environmental Health & Public Technology',
        company: 'MIT (PathCheck Foundation) & Harvard Bloomberg Center for Cities',
        location: 'Cambridge, MA',
        duration: 'Jun 2024 – Aug 2024',
        roleType: 'Full-time',
        responsibilities: [
          'Performed time-series modeling and variance estimation on 1M+ air quality datapoints, quantifying pollutant concentration trends and population-level exposures with high statistical confidence.',
          'Built and validated multivariate regression models in R to benchmark low-cost air quality sensors, demonstrating >85% correlation with gold-standard health outcome datasets.',
          'Developed interactive Tableau dashboards visualizing exposure-risk relationships and quantified uncertainty margins (±10–15%), enhancing transparency in public health decision-making.',
          'Delivered statistical evidence supporting the scalability of low-cost sensors in environmental health surveillance, providing data-driven insights that influenced adoption in urban public health monitoring systems.'
        ]
      },
      {
        id: '3',
        position: 'Research Assistant – Viral Diagnostic Validation',
        company: 'Harvard University, School of Public Health',
        location: 'Boston, MA',
        duration: 'Mar 2024 – Jun 2024',
        roleType: 'Full-time',
        responsibilities: [
          'Implemented biostatistical reliability testing by computing Intraclass Correlation Coefficients (ICC) across 62 viral markers and two assay timepoints in R, ensuring reproducibility of high-dimensional serological datasets and confirming consistency of diagnostic outputs for downstream analysis.',
          'Executed comparative diagnostic performance assessments through correlation modeling and variance estimation, generating statistically robust evidence that strengthened the association between viral exposure history and maternal health outcomes in diverse population cohorts.',
          'Executed end-to-end data validation workflows, including cleaning, reproducibility checks, and sensitivity analysis, to enhance statistical accuracy, minimize assay bias, and increase confidence in the use of large-scale serological datasets for epidemiological research.',
          'Produced evidence-based recommendations validating the VirScan framework as a reliable diagnostic tool, enabling its application in maternal and child health studies and providing actionable insights for advancing precision medicine and public health interventions.'
        ]
      },
      {
        id: '4',
        position: 'Program Coordinator – Mental Health (Mindrise)',
        company: 'Progressive Foundation / PIIndia.org',
        location: 'India',
        duration: 'Aug 2021 – Dec 2022',
        roleType: 'Full-time',
        responsibilities: [
          'Designed and automated an Excel-based logging and analysis system that consolidated data from 8,200+ counseling calls and 4,000+ child beneficiaries, improving reporting efficiency, reducing manual errors, and enabling large-scale monitoring of mental health outreach programs.',
          'Engineered descriptive and inferential statistical methods (t-tests, stratification by age/gender, and urban–rural comparisons) to evaluate session effectiveness and access disparities, generating actionable evidence that informed targeted program improvements and stakeholder decision-making.',
          'Conducted qualitative coding of counselor notes into structured categories such as grief, withdrawal, dropout risk, and depression, and combined findings with k-means clustering to identify high-risk profiles, allowing interventions to be tailored for children showing early warning symptoms.',
          'Produced evidence-driven insights showing that 23% of children—primarily aged 11–14—required more than three sessions, and demonstrated that regional language compatibility increased session engagement and follow-up compliance by 40%, guiding recruitment and training of culturally aligned counselors.'
        ]
      },
      {
        id: '5',
        position: 'Program Manager – Cervical Cancer Screening & HPV Vaccination',
        company: 'Progressive Foundation / CSR',
        location: 'India',
        duration: 'Apr 2019 – Dec 2022',
        roleType: 'Full-time',
        responsibilities: [
          'Directed a large-scale cervical cancer prevention program across 200 villages, delivering awareness sessions to 10,000+ women, screening 1,000, and vaccinating 500 girls and women (ages 9–25), significantly expanding preventive health access in low-resource settings.',
          'Conducted statistical analysis of Health and Wellness Centre (HWC) datasets using R, SPSS, and Tableau, applying descriptive statistics, sensitivity/specificity testing, and regression-based inference to identify a 3.5x higher likelihood of cervical symptoms among women aged 40–55 with ≥3 childbirths.',
          'Established Tableau dashboards and monitoring frameworks to track screening coverage, vaccination uptake, and referral patterns at the village level, equipping stakeholders with real-time visibility into diagnostic gaps and resource allocation needs.',
          'Produced evidence-based recommendations for targeted community mobilization campaigns, strengthening early detection pathways and improving compliance rates for screening and vaccination programs in rural populations.'
        ]
      },
      {
        id: '6',
        position: 'Program Manager – Arogya Parivar Digital Health Program',
        company: 'Progressive Foundation & Novartis (with Tech Mahindra)',
        location: 'India',
        duration: 'Jan 2019 – Oct 2019',
        roleType: 'Full-time',
        responsibilities: [
          'Designed and implemented a mixed-method evaluation framework to assess digital consultation platforms, measuring patient throughput, diagnostic accuracy, consultation-to-referral efficiency, and overall program scalability in rural healthcare settings.',
          'Performed descriptive and inferential statistical analyses (age/gender stratification, disease-type segmentation, pre–post intervention comparisons) on 10,000+ patient records, identifying key usage patterns and gaps in digital healthcare adoption.',
          'Delivered impact assessments showing a 35–40% increase in early medical consultations and significant reductions in unnecessary referrals, providing evidence for scaling digital health models in underserved communities.'
        ]
      },
      {
        id: '7',
        position: 'Project Assistant – Cancer Prioritization in India',
        company: 'Progressive Foundation & Roche',
        location: 'India',
        duration: 'Sep 2018 – Oct 2020',
        roleType: 'Full-time',
        responsibilities: [
          'Conducted multi-source data analysis by integrating NFHS, NCRP, hospital records, and insurance claim datasets to evaluate cancer incidence, diagnostic delays, treatment discontinuation, and financial burden across diverse regions.',
          'Generated evidence-driven insights through descriptive statistics, cross-tabulations, and geospatial visualizations (heat maps, survival trend charts), enabling policymakers to identify high-burden states and bottlenecks in patient treatment pathways.'
        ]
      },
      {
        id: '8',
        position: 'Project Research Director – Tuberculosis Drug Adherence',
        company: 'Progressive Foundation / State Govt.',
        location: 'India',
        duration: 'Sep 2016 – Aug 2018',
        roleType: 'Full-time',
        responsibilities: [
          'Applied statistical modeling techniques including logistic regression, chi-square testing, and time-series analysis to evaluate adherence patterns, quantify intervention effects, and assess outcome disparities between control and intervention groups.',
          'Implemented patient-level cohort tracking models using unique IDs to measure drop-out and cure rates, and delivered interactive adherence dashboards that informed decision-making at district and state health administration levels.'
        ]
      },
      {
        id: '9',
        position: 'Project Analyst – JE/AES Control & Management',
        company: 'Progressive Foundation & PATH',
        location: 'India',
        duration: 'Sep 2015 – Aug 2016',
        roleType: 'Full-time',
        responsibilities: [
          'Consolidated and analyzed multi-year case data from PHCs, CHCs, and regional hospitals to identify outbreak clusters, measure age-specific and district-level burden, and track seasonal epidemic spikes using descriptive epidemiological methods.',
          'Produced geospatial heat maps and trend visualizations of case fatality rates, providing data-driven justification for the establishment of 108 decentralized treatment centers in high-prevalence districts, which improved early access to care and reduced mortality rates.'
        ]
      },
      {
        id: '10',
        position: 'Researcher – Molecular Interaction & Physicochemical Profiling Lab',
        company: 'Deen Dayal Upadhyaya Gorakhpur University (State University)',
        location: 'India',
        duration: 'Oct 2012 – Oct 2019',
        roleType: 'Full-time',
        responsibilities: [
          'Investigated molecular interaction mechanisms in binary liquid mixtures by applying statistical and physicochemical analysis (regression modeling, multivariate techniques, t-tests), generating insights relevant to drug–receptor binding behavior.',
          'Authored and co-authored peer-reviewed publications in international journals on thermodynamics, viscosities, and liquid mixture profiling, contributing to advancements in physical chemistry and molecular modeling research.'
        ]
      }
    ],
    projects: [],
    leadership: [],
    skills: [
      {
        id: '1',
        category: 'Statistical & Analytical Methods',
        skills: 'Hypothesis testing, regression modeling (linear, logistic, Cox), survival analysis, mixed-effects models, generalized estimating equations (GEE), causal inference (PSM, DID, IV), Bayesian modeling, MCMC simulations.'
      },
      {
        id: '2',
        category: 'Study Design & Epidemiology',
        skills: 'Clinical trials, cohort, case-control, cross-sectional, longitudinal studies, survey design, incidence/prevalence estimation, treatment adherence, sensitivity/specificity, ROC curves, cost-effectiveness analysis.'
      },
      {
        id: '3',
        category: 'Data Management & Visualization',
        skills: 'Large dataset cleaning & transformation, missing data imputation, R, STATA, SAS, SPSS, Excel (advanced), Tableau, Power BI, ggplot2.'
      },
      {
        id: '4',
        category: 'Qualitative & Program Evaluation',
        skills: 'Thematic coding (NVivo), clustering, intervention evaluation, program monitoring, policy impact assessment.'
      },
      {
        id: '5',
        category: 'Tools & Technical',
        skills: 'Git/GitHub, LaTeX, workflow automation.'
      },
      {
        id: '6',
        category: 'Domain Expertise',
        skills: 'Occupational health, infectious diseases (TB, JE/AES, viral diagnostics), cancer screening & HPV vaccination, environmental health, mental health interventions.'
      }
    ],
    education: [
      {
        id: '1',
        institution: 'Harvard University, School of Public Health, Boston, MA, USA.',
        location: 'Boston, MA',
        degree: 'Master of Public Health (MPH), Population Sciences',
        field: 'Population Sciences',
        duration: 'Aug 2023 – Mar 2025',
        additionalInfo: 'Aug 2023 – Mar 2025'
      },
      {
        id: '2',
        institution: 'Deen Dayal Upadhyaya Gorakhpur University, UP, India',
        location: 'UP, India',
        degree: 'Doctor of Philosophy (PhD), Physical Chemistry',
        field: 'Physical Chemistry',
        duration: 'Dec 2014 – Oct 2019',
        additionalInfo: 'Dec 2014 – Oct 2019'
      },
      {
        id: '3',
        institution: 'Deen Dayal Upadhyaya Gorakhpur University, UP, India',
        location: 'UP, India',
        degree: 'Master of Science (MS), Organic Chemistry',
        field: 'Organic Chemistry',
        duration: 'Jul 2009 – Jun 2011',
        additionalInfo: 'Jul 2009 – Jun 2011'
      },
      {
        id: '4',
        institution: 'Deen Dayal Upadhyaya Gorakhpur University, UP, India',
        location: 'UP, India',
        degree: 'Bachelor of Science (BS), Biology & Chemistry',
        field: 'Biology & Chemistry',
        duration: 'Jul 2006 – Jun 2009',
        additionalInfo: 'Jul 2006 – Jun 2009'
      }
    ],
    publications: [
      {
        id: '1',
        details: 'Thriving from Work Questionnaire: Validation of a measure of worker wellbeing among older U.S. workers. Co-Author (Under peer review, Manuscript ID: ijerph-3753172).'
      },
      {
        id: '2',
        details: 'Strategies for Enhancing Air Quality and Public Health through Low-Cost Sensors. Data-smart city solutions, Bloomberg Center for cities, Harvard University. Author: Kanchan Yadav.'
      },
      {
        id: '3',
        details: 'Co-editor, Integrated Management of Water Resources in India: A Computational Approach. Springer Nature, 2024.'
      },
      {
        id: '4',
        details: 'Viscosities and excess molar volumes of binary liquid mixtures of 1,4-dichlorobutane and some hydrocarbon solvents at 308.15K, 313.15K, 318.15K. Author: Kanchan Yadav and S.S. Yadava, Physics and Chemistry of Liquids, 2018, 57(3), 325-337.'
      },
      {
        id: '5',
        details: 'Densities and Viscosities of binary liquid mixtures of 1,6-dichlorohexane with different hydrocarbons at several temperature 308.15K, 313.15K, and 318.15K. Author: Kanchan Yadav and S.S. Yadava, J. sol. Chem., 2018, 47, 1172-1191. (+ 2more)'
      }
    ]
  };

  const [resumeData, setResumeData] = useState(initialData);
  const [showLeadership, setShowLeadership] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const [showPublications, setShowPublications] = useState(true);
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