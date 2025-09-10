import React from 'react';

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    portfolio: string;
  };
  summary: string;
  workExperience: Array<{
    id: string;
    position: string;
    company: string;
    duration: string;
    responsibilities: string[];
  }>;
  projects: Array<{
    id: string;
    position: string;
    company: string;
    duration: string;
    responsibilities: string[];
  }>;
  leadership: Array<{
    id: string;
    title: string;
    organization: string;
  }>;
  skills: Array<{
    id: string;
    category: string;
    skills: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    location: string;
    degree: string;
    field: string;
    additionalInfo: string;
  }>;
  publications?: Array<{
    id: string;
    details: string;
  }>;
}

interface ResumePreviewProps {
  data: ResumeData;
  showLeadership?: boolean;
  showProjects?: boolean;
  showPublications?: boolean;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data, showLeadership = true, showProjects = false, showPublications = true }) => {
  const styles = {
    fontSize: "9pt",
    sectionMargin: "12px",
    itemMargin: "6px",
    bulletSpacing: "3px",
    lineHeight: "1.3"
  };
  const formatLinkedIn = (linkedin: string) => {
    if (!linkedin) return '';
    if (linkedin.startsWith('http')) {
      return 'LinkedIn';
    }
    return linkedin;
  };

  const formatPortfolio = (portfolio: string) => {
    if (!portfolio) return '';
    if (portfolio.startsWith('http')) {
      return 'Portfolio';
    }
    return portfolio;
  };

  const getLinkedInUrl = (linkedin: string) => {
    if (!linkedin) return '#';
    if (linkedin.startsWith('http')) {
      return linkedin;
    }
    return `https://linkedin.com/in/${linkedin}`;
  };

  const getPortfolioUrl = (portfolio: string) => {
    if (!portfolio) return '#';
    if (portfolio.startsWith('http')) {
      return portfolio;
    }
    return `https://${portfolio}`;
  };

  const resumeContent = (
      <>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "12px" }}>
              <div
                  style={{
                      fontSize: "16px",
                      marginBottom: "4px",
                      fontWeight: "bold",
                  }}
              >
                  {data.personalInfo.name || "Your Name"}
              </div>
              <div style={{ fontSize: "9pt", marginBottom: "4px" }}>
                  {data.personalInfo.title || "Your Professional Title"}
              </div>
              <div style={{ fontSize: "9pt" }}>
                  {data.personalInfo.phone}
                  {data.personalInfo.email && (
                      <>
                          {" | "}
                          <a
                              href={`mailto:${data.personalInfo.email}`}
                              style={{ color: "blue", textDecoration: "none" }}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              {data.personalInfo.email}
                          </a>
                      </>
                  )}
                  {data.personalInfo.location && (
                      <>
                          {" | "}
                          {data.personalInfo.location}
                      </>
                  )}
                  {data.personalInfo.linkedin && (
                      <>
                          {" | "}
                          <a
                              href={getLinkedInUrl(data.personalInfo.linkedin)}
                              style={{ color: "blue", textDecoration: "none" }}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              {formatLinkedIn(data.personalInfo.linkedin)}
                          </a>
                      </>
                  )}
                  {data.personalInfo.portfolio && (
                      <>
                          {" | "}
                          <a
                              href={getPortfolioUrl(
                                  data.personalInfo.portfolio
                              )}
                              style={{ color: "blue", textDecoration: "none" }}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              {formatPortfolio(data.personalInfo.portfolio)}
                          </a>
                      </>
                  )}
              </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: "12px" }}>
              <div
                  style={{
                      fontSize: "9pt",
                      borderBottom: "1px solid #000",
                      paddingBottom: "2px",
                      marginBottom: "6px",
                      fontWeight: "bold",
                  }}
              >
                  SUMMARY
              </div>
              <div
                  style={{
                      textAlign: "justify",
                      fontSize: "9pt",
                      lineHeight: "1.3",
                  }}
              >
                  {data.summary ||
                      "Your professional summary will appear here..."}
              </div>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: "12px" }}>
              <div
                  style={{
                      fontSize: "9pt",
                      borderBottom: "1px solid #000",
                      paddingBottom: "2px",
                      marginBottom: "6px",
                      fontWeight: "bold",
                  }}
              >
                  WORK EXPERIENCE
              </div>
              {data.workExperience.length > 0 ? (
                  data.workExperience.map((exp, index) => (
                      <div key={exp.id} style={{ marginBottom: "8px" }}>
                          <div
                              style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "flex-start",
                                  marginBottom: "3px",
                              }}
                          >
                              <div
                                  style={{
                                      fontSize: "9pt",
                                      fontWeight: "bold",
                                  }}
                              >
                                  {exp.position}
                                  {exp.company && `, ${exp.company}`}
                              </div>
                              <div
                                  style={{
                                      fontSize: "9pt",
                                      fontWeight: "bold",
                                  }}
                              >
                                  {exp.duration}
                              </div>
                          </div>
                          {exp.responsibilities.map(
                              (resp, respIndex) =>
                                  resp.trim() && (
                                      <div
                                          key={respIndex}
                                          style={{
                                              display: "flex",
                                              alignItems: "flex-start",
                                              marginBottom: "3px",
                                          }}
                                      >
                                          <span
                                              style={{
                                                  fontSize: "9pt",
                                                  marginRight: "4px",
                                                  minWidth: "8px",
                                              }}
                                          >
                                              •
                                          </span>
                                          <div
                                              style={{
                                                  textAlign: "justify",
                                                  fontSize: "9pt",
                                                  lineHeight: "1.3",
                                              }}
                                          >
                                              {resp}
                                          </div>
                                      </div>
                                  )
                          )}
                      </div>
                  ))
              ) : (
                  <div
                      style={{
                          fontSize: "9pt",
                          fontStyle: "italic",
                          color: "#666",
                      }}
                  >
                      Your work experience will appear here...
                  </div>
              )}
          </div>

          {/* Projects - Only show if enabled */}
          {showProjects && data.projects && data.projects.length > 0 && (
              <div style={{ marginBottom: "12px" }}>
                  <div
                      style={{
                          fontSize: "9pt",
                          borderBottom: "1px solid #000",
                          paddingBottom: "2px",
                          marginBottom: "6px",
                          fontWeight: "bold",
                      }}
                  >
                      PROJECTS
                  </div>
                  {data.projects.map((project, index) => (
                      <div key={project.id} style={{ marginBottom: "8px" }}>
                          <div
                              style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "flex-start",
                                  marginBottom: "3px",
                              }}
                          >
                              <div
                                  style={{
                                      fontSize: "9pt",
                                      fontWeight: "bold",
                                  }}
                              >
                                  {project.position}
                                  {project.company && `, ${project.company}`}
                              </div>
                              <div
                                  style={{
                                      fontSize: "9pt",
                                      fontWeight: "bold",
                                  }}
                              >
                                  {project.duration}
                              </div>
                          </div>
                          {project.responsibilities.map(
                              (resp, respIndex) =>
                                  resp.trim() && (
                                      <div
                                          key={respIndex}
                                          style={{
                                              display: "flex",
                                              alignItems: "flex-start",
                                              marginBottom: "3px",
                                          }}
                                      >
                                          <span
                                              style={{
                                                  fontSize: "9pt",
                                                  marginRight: "4px",
                                                  minWidth: "8px",
                                              }}
                                          >
                                              •
                                          </span>
                                          <div
                                              style={{
                                                  textAlign: "justify",
                                                  fontSize: "9pt",
                                                  lineHeight: "1.3",
                                              }}
                                          >
                                              {resp}
                                          </div>
                                      </div>
                                  )
                          )}
                      </div>
                  ))}
              </div>
          )}

          {/* Leadership & Volunteering - Only show if enabled */}
          {showLeadership && data.leadership && data.leadership.length > 0 && (
              <div style={{ marginBottom: "12px" }}>
                  <div
                      style={{
                          fontSize: "9pt",
                          borderBottom: "1px solid #000",
                          paddingBottom: "2px",
                          marginBottom: "6px",
                          fontWeight: "bold",
                      }}
                  >
                      LEADERSHIP & VOLUNTEERING
                  </div>
                  {data.leadership.map((item) => (
                      <div
                          key={item.id}
                          style={{ fontSize: "9pt", marginBottom: "3px" }}
                      >
                          {item.title}
                          {item.organization && `, ${item.organization}`}
                      </div>
                  ))}
              </div>
          )}

          {/* Skills */}
          <div style={{ marginBottom: "12px" }}>
              <div
                  style={{
                      fontSize: "9pt",
                      borderBottom: "1px solid #000",
                      paddingBottom: "2px",
                      marginBottom: "6px",
                      fontWeight: "bold",
                  }}
              >
                  SKILLS
              </div>
              {data.skills.length > 0 ? (
                  data.skills.map((category) => (
                      <div
                          key={category.id}
                          style={{
                              fontSize: "9pt",
                              marginBottom: "4px",
                              lineHeight: "1.3",
                          }}
                      >
                          <span style={{ fontWeight: "bold" }}>
                              {category.category} :{" "}
                          </span>
                          <span>{category.skills}</span>
                      </div>
                  ))
              ) : (
                  <div
                      style={{
                          fontSize: "9pt",
                          fontStyle: "italic",
                          color: "#666",
                      }}
                  >
                      Your skills will appear here...
                  </div>
              )}
          </div>

          {/* Education - This section will expand to fill remaining space */}
          <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
              <div
                  style={{
                      fontSize: "9pt",
                      borderBottom: "1px solid #000",
                      paddingBottom: "2px",
                      marginBottom: "6px",
                      fontWeight: "bold",
                  }}
              >
                  EDUCATION
              </div>
              <div style={{ flex: "1" }}>
                  {data.education.length > 0 ? (
                      data.education.map((edu, index) => (
                          <div key={edu.id} style={{ marginBottom: "6px" }}>
                              <div
                                  style={{
                                      fontSize: "9pt",
                                      marginBottom: "2px",
                                  }}
                              >
                                  <span style={{ fontWeight: "bold" }}>
                                      {edu.institution}
                                      {edu.location && `, ${edu.location}`}
                                  </span>
                                  <span>
                                      {" "}
                                      - {edu.degree}
                                      {edu.field && `, ${edu.field}`}
                                  </span>
                              </div>
                              {edu.additionalInfo && (
                                  <div style={{ fontSize: "9pt" }}>
                                      {edu.additionalInfo}
                                  </div>
                              )}
                          </div>
                      ))
                  ) : (
                      <div
                          style={{
                              fontSize: "9pt",
                              fontStyle: "italic",
                              color: "#666",
                          }}
                      >
                          Your education will appear here...
                      </div>
                  )}
              </div>
              {/* Publications */}
              {showPublications &&
                  data.publications &&
                  data.publications.length > 0 && (
                      <div
                          style={{
                              marginBottom: styles.sectionMargin,
                              breakInside: "auto",
                          }}
                      >
                          <div
                              style={{
                                  fontSize: styles.fontSize,
                                  borderBottom: "1px solid #000",
                                  paddingBottom: "2px",
                                  marginBottom: styles.itemMargin,
                                  fontWeight: "bold",
                              }}
                          >
                              PUBLICATIONS
                          </div>
                          {data.publications.map(
                              (item) =>
                                  item.details.trim() && (
                                      <div
                                          key={item.id}
                                          style={{
                                              display: "flex",
                                              alignItems: "flex-start",
                                              marginBottom:
                                                  styles.bulletSpacing,
                                              breakInside: "auto",
                                              pageBreakInside: "auto",
                                          }}
                                      >
                                          <span
                                              style={{
                                                  fontSize: styles.fontSize,
                                                  marginRight: "4px",
                                                  minWidth: "8px",
                                              }}
                                          >
                                              •
                                          </span>
                                          <div
                                              style={{
                                                  textAlign: "justify",
                                                  fontSize: styles.fontSize,
                                                  lineHeight: styles.lineHeight,
                                              }}
                                          >
                                              {item.details}
                                          </div>
                                      </div>
                                  )
                          )}
                      </div>
                  )}
          </div>
      </>
  );

  return (
    <>
      {/* Screen Preview */}
      <div 
        className="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden no-print" 
        style={{ height: '800px', overflow: 'auto' }}
      >
        <div 
          style={{ 
            fontFamily: '"Times New Roman", Times, serif', 
           fontSize: '9pt', 
            lineHeight: '1.2',
            color: '#000000',
            padding: '0.1in 0.3in',
            margin: '0',
            height: 'auto',
            background: 'white',
            boxSizing: 'border-box',
            width: '100%'
          }}
        >
          {resumeContent}
        </div>
      </div>

      {/* Print-Only Version - Hidden on screen, visible only when printing */}
      <div 
        id="resume-print-only"
        style={{ 
          display: 'none', // Hidden on screen
          fontFamily: '"Times New Roman", Times, serif', 
         fontSize: '9pt', 
          lineHeight: '1.2',
          color: '#000000',
          background: 'white',
          boxSizing: 'border-box',
          width: '100%',
          height: '100vh',
          margin: '0',
          padding: '0.1in 0.3in',
          flexDirection: 'column'
        }}
      >
        {resumeContent}
      </div>
    </>
  );
};