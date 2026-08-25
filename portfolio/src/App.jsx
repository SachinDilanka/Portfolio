import { Github, Mail, Activity, Server, Database, Terminal, Code2, Wrench, Globe } from 'lucide-react';

export default function App() {
  const projects = [
    {
      title: "Real-Time System & AI Anomaly Monitor",
      role: "Microservices & Real-Time Pipeline",
      tech: ["React", "Node.js", "WebSockets", "Python", "FastAPI", "Scikit-Learn"],
      description: "A multi-service telemetry app streaming real-time metric updates via WebSockets, paired with an Isolation Forest ML model for automated anomaly detection.",
      icon: <Activity className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "KnowVerse: Academic Note-Sharing Platform",
      role: "Full-Stack Web Application",
      tech: ["React", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS"],
      description: "A peer-to-peer resource management portal featuring secure user roles, moderation workflows, and instant resource searching.",
      icon: <Server className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Incident & Maintenance Ticketing Microservice",
      role: "Backend API Service",
      tech: ["Node.js", "Express", "MongoDB", "REST API", "Mongoose"],
      description: "A decoupled ticketing module engineered for resource request routing, strict payload validation, and status transition logging.",
      icon: <Database className="w-6 h-6 text-purple-400" />
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      skills: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "State Management"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      skills: ["Node.js", "Express.js", "Python (FastAPI)", "RESTful APIs", "WebSockets", "Authentication & JWT"]
    },
    {
      title: "Databases & Architecture",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      skills: ["MongoDB / Mongoose", "SQL / PostgreSQL", "Microservices", "Data Pipelines", "System Monitoring"]
    },
    {
      title: "Testing & Tools",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      skills: ["Playwright", "Git / GitHub", "Power BI", "Postman", "Vite", "Linux CLI"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight text-emerald-400">&lt;DevPortfolio /&gt;</span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          Full-Stack Software Engineer
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-6 mb-4">
          Building resilient web apps & <span className="text-emerald-400">real-time systems.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Specializing in React frontends, Node.js microservices, real-time data streaming, and robust database architectures.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-lg transition">
            View Projects
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="border border-slate-700 hover:bg-slate-900 px-6 py-3 rounded-lg flex items-center gap-2 transition">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </header>

      {/* Featured Projects Grid */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Terminal className="text-emerald-400" /> Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <div className="mb-4">{proj.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
                <p className="text-xs text-emerald-400 font-medium mb-3">{proj.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[11px] bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 border-t border-slate-800/80 pt-4 text-xs font-medium">
                  <a href="#" className="flex items-center gap-1 text-slate-300 hover:text-emerald-400">
                    <Github className="w-3.5 h-3.5" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Code2 className="text-emerald-400" /> Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                {cat.icon}
                <h3 className="font-semibold text-slate-200 text-sm">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="border-t border-slate-800 mt-12 py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3">Let's Connect</h2>
          <p className="text-slate-400 text-sm mb-6">
            Open to software engineering roles, full-stack projects, and technical collaborations.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:your.email@example.com" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition">
              <Mail className="w-4 h-4 text-emerald-400" /> Email Me
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition">
              <Github className="w-4 h-4 text-emerald-400" /> GitHub
            </a>
          </div>
          <p className="text-slate-600 text-xs mt-12">Designed & Built with React, Vite & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}