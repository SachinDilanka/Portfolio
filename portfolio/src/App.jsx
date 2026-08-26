import { Github, Mail, Activity, Server, Database, Terminal, Code2, Wrench, Globe, ExternalLink } from 'lucide-react';

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
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Navigation - Edge to Edge Background */}
      <nav className="w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight text-emerald-400 hover:opacity-80 transition cursor-pointer">
            &lt;DevPortfolio /&gt;
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#projects" className="hover:text-emerald-400 transition-colors duration-200">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors duration-200">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Edge to Edge Background with Centered Content */}
      <header className="w-full py-28 px-6 relative border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-sm hover:border-emerald-500/40 transition-all">
            Full-Stack Software Engineer
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-6 mb-6 leading-tight">
            Building resilient web apps & <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">real-time systems.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Specializing in React frontends, Node.js microservices, real-time data streaming, and robust database architectures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              View Projects
            </a>
            <a 
              href="https://github.com/SachinDilanka" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-slate-800 hover:bg-slate-900/80 bg-slate-900/40 px-7 py-3.5 rounded-xl flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-200 text-slate-300"
            >
              <Github className="w-5 h-5 text-slate-300" /> GitHub Profile
            </a>
          </div>
        </div>
      </header>

      {/* Featured Projects Grid - Full Width Section */}
      <section id="projects" className="w-full py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <Terminal className="text-emerald-400 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="group bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-7 flex flex-col justify-between hover:bg-slate-900/70 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40"
              >
                <div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 w-fit mb-6 group-hover:scale-105 transition-transform duration-200">
                    {proj.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold mb-4 tracking-wide uppercase">{proj.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">{proj.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[11px] font-medium bg-slate-950/80 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 border-t border-slate-800/60 pt-4 text-xs font-semibold">
                    <a 
                      href="https://github.com/SachinDilanka" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source Code <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section - Edge to Edge */}
      <section id="skills" className="w-full py-24 px-6 border-t border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <Code2 className="text-emerald-400 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-5 border-b border-slate-800/60 pb-4">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-slate-100 text-sm">{cat.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-xs text-slate-400 flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer - Full Width */}
      <footer id="contact" className="w-full border-t border-slate-900 bg-slate-950 py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Open to software engineering roles, full-stack projects, and technical collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:sachin.dilanka@example.com" 
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:-translate-y-0.5 transition-all text-slate-200"
            >
              <Mail className="w-4 h-4 text-emerald-400" /> Email Me
            </a>
            <a 
              href="https://github.com/SachinDilanka" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:-translate-y-0.5 transition-all text-slate-200"
            >
              <Github className="w-4 h-4 text-emerald-400" /> GitHub
            </a>
          </div>
          <p className="text-slate-600 text-xs tracking-wide">
            Designed & Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}