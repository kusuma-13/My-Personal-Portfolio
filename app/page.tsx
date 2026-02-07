'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(100,116,139,0.2)] bg-[#0f172a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#06b6d4] to-[#0891b2] bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="flex gap-8">
            <a href="#about" className="text-[#f8fafc] hover:text-[#06b6d4] transition">About</a>
            <a href="#skills" className="text-[#f8fafc] hover:text-[#06b6d4] transition">Skills</a>
            <a href="#projects" className="text-[#f8fafc] hover:text-[#06b6d4] transition">Projects</a>
            <a href="#contact" className="text-[#f8fafc] hover:text-[#06b6d4] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] text-sm font-medium mb-6">
              Welcome to my portfolio
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-[#f8fafc] leading-tight">
            Crafting Digital
            <span className="bg-gradient-to-r from-[#06b6d4] to-[#0891b2] bg-clip-text text-transparent"> Experiences</span>
          </h1>
          <p className="text-xl text-[#64748b] mb-8 max-w-2xl mx-auto leading-relaxed">
            I build accessible, pixel-perfect digital products that blend thoughtful design with robust engineering. Passionate about creating experiences that perform and delight users.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-[#06b6d4] text-[#0f172a] font-semibold rounded-lg hover:bg-[#0891b2] transition">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-[#06b6d4] text-[#06b6d4] font-semibold rounded-lg hover:bg-[#06b6d4]/10 transition">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#1e293b]/50 border-t border-[rgba(100,116,139,0.2)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-[#f8fafc]">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#64748b] leading-relaxed mb-6">
                I'm a full-stack developer with a passion for building beautiful and functional web applications. With expertise in modern JavaScript frameworks and design systems, I create experiences that users love.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Currently focused on accessibility, performance, and user experience. I believe great products come from understanding both the technical and human side of development.
              </p>
            </div>
            <div className="bg-[#0f172a] rounded-xl p-8 border border-[rgba(100,116,139,0.2)]">
              <h3 className="text-lg font-semibold mb-6 text-[#06b6d4]">Key Highlights</h3>
              <ul className="space-y-4 text-[#64748b]">
                <li className="flex items-start gap-3">
                  <span className="text-[#06b6d4] mt-1">→</span>
                  <span>Full-stack web development with React & Next.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#06b6d4] mt-1">→</span>
                  <span>Responsive design and accessibility (WCAG)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#06b6d4] mt-1">→</span>
                  <span>Performance optimization and best practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-[#f8fafc]">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
              { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'] },
              { category: 'Tools', items: ['Git', 'Docker', 'Vercel', 'AWS'] },
            ].map((skillGroup) => (
              <div key={skillGroup.category} className="bg-[#1e293b] rounded-xl p-8 border border-[rgba(100,116,139,0.2)] hover:border-[#06b6d4]/50 transition">
                <h3 className="text-xl font-semibold mb-6 text-[#06b6d4]">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[#0f172a] text-[#06b6d4] rounded-full text-sm border border-[#06b6d4]/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#1e293b]/50 border-t border-[rgba(100,116,139,0.2)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-[#f8fafc]">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Project One',
                description: 'A modern web application built with React and Next.js, featuring real-time data and responsive design.',
                tech: ['React', 'Next.js', 'Tailwind CSS'],
              },
              {
                title: 'Project Two',
                description: 'Full-stack application with authentication, database management, and REST API integration.',
                tech: ['Node.js', 'PostgreSQL', 'Express'],
              },
              {
                title: 'Project Three',
                description: 'Responsive e-commerce platform with advanced filtering and checkout functionality.',
                tech: ['React', 'TypeScript', 'Stripe'],
              },
              {
                title: 'Project Four',
                description: 'Real-time collaboration tool with WebSocket integration and user management.',
                tech: ['Next.js', 'WebSocket', 'MongoDB'],
              },
            ].map((project) => (
              <div key={project.title} className="bg-[#0f172a] rounded-xl overflow-hidden border border-[rgba(100,116,139,0.2)] hover:border-[#06b6d4]/50 transition group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-[#06b6d4]/20 to-[#0891b2]/20 group-hover:from-[#06b6d4]/30 group-hover:to-[#0891b2]/30 transition"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#f8fafc] group-hover:text-[#06b6d4] transition">{project.title}</h3>
                  <p className="text-[#64748b] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#1e293b] text-[#06b6d4] rounded border border-[#06b6d4]/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#f8fafc]">Let's Connect</h2>
          <p className="text-[#64748b] text-lg mb-12">
            I'm always interested in hearing about new projects and opportunities. Feel free to get in touch!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="mailto:hello@example.com" className="px-8 py-3 bg-[#06b6d4] text-[#0f172a] font-semibold rounded-lg hover:bg-[#0891b2] transition">
              Send me an email
            </a>
            <a href="#" className="px-8 py-3 border border-[#06b6d4] text-[#06b6d4] font-semibold rounded-lg hover:bg-[#06b6d4]/10 transition">
              LinkedIn
            </a>
            <a href="#" className="px-8 py-3 border border-[#06b6d4] text-[#06b6d4] font-semibold rounded-lg hover:bg-[#06b6d4]/10 transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(100,116,139,0.2)] py-8 px-6 text-center text-[#64748b]">
        <div className="max-w-4xl mx-auto">
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
