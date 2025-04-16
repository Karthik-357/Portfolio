import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
// Import your profile image - adjust the path as needed
import myProfilePic from "../../assets/KCT_Profile_image.jpg";
import { 
  FaCode, 
  FaServer, 
  FaUniversity, 
  FaBriefcase, 
  FaUserAlt, 
  FaTrophy,
  FaHeart,
  FaStar,
  FaTools
} from "react-icons/fa";

export const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  
  // Skills without expertise categorization
  const frontendSkills = ["HTML", "CSS", "JavaScript"];
  const backendSkills = ["Java", "REST API", "Spring Boot", "PostgreSQL"];
  const toolsSkills = ["Git"];
  
  const interests = [
    "Open Source", "AI & Machine Learning", "Web3", 
    "Mobile App Development", "Automation", "Cybersecurity"
  ];
  
  

  // Tab selection handler
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Title with animated underline */}
          <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-400">
  About Me
</h2>

            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Bio Card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-cyan-500/10 transition-all hover:shadow-cyan-400/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Picture - REPLACED THE PLACEHOLDER WITH ACTUAL IMAGE */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <img 
                  src={myProfilePic} 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bio text */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  Back End Developer & Problem Solver
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a passionate Back End developer who turns ideas into scalable, responsive digital products. 
                  With expertise in both frontend and backend technologies, I create intuitive user experiences backed by robust architecture.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My approach combines clean code, modern design principles, and performance optimization 
                  to deliver solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="mt-12">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { id: "skills", icon: <FaCode />, label: "Skills" },
                { id: "education", icon: <FaUniversity />, label: "Education" },
                { id: "interests", icon: <FaHeart />, label: "Interests" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-lg shadow-cyan-500/10"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              {/* Skills Tab */}
              {activeTab === "skills" && (
                <div className="animate-fadeIn">
                  <h3 className="text-xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Technical Proficiency
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-tr from-white/5 to-white/0 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
                        <FaCode /> Frontend
                      </h3>
                      
                      <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((skill, index) => (
                          <div key={index} className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="p-6 rounded-xl border border-purple-500/20 bg-gradient-to-tr from-white/5 to-white/0 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
                        <FaServer /> Backend
                      </h3>
                      
                      <div className="flex flex-wrap gap-2">
                        {backendSkills.map((skill, index) => (
                          <div key={index} className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="p-6 rounded-xl border border-blue-500/20 bg-gradient-to-tr from-white/5 to-white/0 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                        <FaTools /> Tools
                      </h3>
                      
                      <div className="flex flex-wrap gap-2">
                        {toolsSkills.map((skill, index) => (
                          <div key={index} className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === "education" && (
                <div className="animate-fadeIn">
                  <h3 className="text-xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                    Academic Background
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Timeline items */}
                    <div className="relative pl-8 border-l-2 border-indigo-500/30">
                      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 -translate-x-1/2"></div>
                      <div className="p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                        <div className="text-sm text-indigo-300 mb-1">2024 - 2026</div>
                        <h4 className="text-lg font-semibold mb-2">Masters in Computer Application</h4>
                        <p className="text-gray-300">KUMARAGURU COLLEGE OF TECHNOLOGY</p>
                        <p className="text-gray-400 mt-2">Focusing on advanced software development methodologies, AI applications, and enterprise systems.</p>
                      </div>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-indigo-500/30">
                      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 -translate-x-1/2"></div>
                      <div className="p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                        <div className="text-sm text-indigo-300 mb-1">2021 - 2024</div>
                        <h4 className="text-lg font-semibold mb-2">Bachelors in Computer Science</h4>
                        <p className="text-gray-300">KARPAGAM ACADEMY OF HIGHER EDUCATION</p>
                        <p className="text-gray-400 mt-2">Completed coursework in data structures, algorithms, database systems, and web technologies.</p>
                      </div>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 -translate-x-1/2"></div>
                      <div className="p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                        <div className="text-sm text-indigo-300 mb-1">Continuous Learning</div>
                        <h4 className="text-lg font-semibold mb-2">Professional Certifications</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          <li>Programming in java - Coursera</li>
                          <li>Automation Techniques in RPA - Ui Path</li>
                          <li>Introduction to Software Engineering - IBM</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
 

              {/* Interests Tab */}
              {activeTab === "interests" && (
                <div className="animate-fadeIn">
                  <h3 className="text-xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">
                    Fields I'm Passionate About
                  </h3>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                    {interests.map((interest, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-r from-pink-500/10 to-red-500/10 text-pink-300 py-3 px-5 rounded-full text-sm font-medium hover:from-pink-500/20 hover:to-red-500/20 transition-all duration-300 border border-pink-500/20 hover:shadow-lg hover:shadow-pink-500/10"
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 text-center mt-6">
                    I'm always exploring new technologies and looking for opportunities to expand my knowledge and skills.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};