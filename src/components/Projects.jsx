"use client"

import { useState } from "react"

const projectsData = [
  
  {
    id: 1,
    name: "HabitFlex",
    description: "Habit tracking app with real-time features and user authentication",
    url: "https://habit-flex.vercel.app/",
    github: "https://github.com/dharanidharansr/HabitFlex",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    image: "/HabitFlex.png"
  },
  {
    id: 2,
    name: "Loan Genius",
    description: "Data-driven loan approval prediction",
    url: "https://loan-approval-checker.onrender.com/", 
    github: "https://github.com/dharanidharansr/Ml-Loan-Approval",
    tech: ["HTML", "CSS", "JavaScript", "Machine Learning"],
    image: "/LOAN.png"
  },
  {
    id: 3,
    name: "AI Interviewer",
    description: "AI-powered mock interview platform",
    url: "https://ai-mock-interviewer.vercel.app/",
    github: "https://ai-mock-interview-rose-three.vercel.app/dashboard",
    tech: ["Next.js", "Clerk", "Drizzle", "Gemini API"],
    image: "/AI_Mock_Interviewer.png"
  }
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projectsData[0])

  return (
    <section className="pt-32 bg-white dark:bg-black px-4" id="projects">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            My Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">
            Here are some of my featured projects - not all of them, just the ones I'm most proud of!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex justify-center gap-4 mb-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
                activeProject.id === project.id
                  ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                  : "bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
              }`}
            >
              <h3 className="font-semibold text-sm text-center">{project.name}</h3>
            </div>
          ))}
        </div>

        {/* Active Project Display */}
        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          {/* Project Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
              {activeProject.name}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-3">
              {activeProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {activeProject.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white dark:bg-black text-xs rounded border border-neutral-200 dark:border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Screenshot */}
          <div className="w-full bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-lg">
            {/* Responsive container that maintains aspect ratio */}
            <div className="relative w-full" style={{ aspectRatio: '1332/768' }}>
              <img
                src={activeProject.image}
                alt={`${activeProject.name} Screenshot`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback placeholder if image doesn't exist
                  e.target.src = `https://via.placeholder.com/1332x768/e5e5e5/666666?text=${encodeURIComponent(activeProject.name)}+Preview`;
                }}
              />
            </div>
          </div>

          {/* Project Links */}
          <div className="mt-6 flex gap-3">
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Live Demo
            </a>
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-black dark:text-white rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
