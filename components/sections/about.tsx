'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full-stack developer with expertise in building web applications using modern technologies. My journey in tech began with a curiosity about how things work, which has evolved into a career dedicated to creating impactful digital solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With experience in frontend development, backend architecture, and data analytics, I bring a holistic approach to problem-solving. I'm committed to writing clean, maintainable code and staying updated with the latest industry trends.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="gradient-border p-6 rounded-lg">
              <h3 className="text-primary font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground text-sm">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="gradient-border p-6 rounded-lg">
              <h3 className="text-primary font-semibold mb-2">Backend</h3>
              <p className="text-muted-foreground text-sm">Node.js, Express, REST APIs</p>
            </div>
            <div className="gradient-border p-6 rounded-lg">
              <h3 className="text-primary font-semibold mb-2">Database</h3>
              <p className="text-muted-foreground text-sm">MongoDB, PostgreSQL, SQL</p>
            </div>
            <div className="gradient-border p-6 rounded-lg">
              <h3 className="text-primary font-semibold mb-2">Analytics</h3>
              <p className="text-muted-foreground text-sm">Data Analysis, Python, Tableau</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
