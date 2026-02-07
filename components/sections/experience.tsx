export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Tech Startup Inc',
      period: '2022 - Present',
      description: 'Developing and maintaining full-stack web applications using React and Node.js. Implemented features that improved user engagement by 40%.',
      highlights: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Solutions Ltd',
      period: '2021 - 2022',
      description: 'Built responsive web interfaces and improved website performance by 30%. Collaborated with designers and backend teams.',
      highlights: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs']
    },
    {
      role: 'Junior Developer',
      company: 'Web Design Agency',
      period: '2020 - 2021',
      description: 'Started my career building static websites and learning fundamental web development concepts.',
      highlights: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="gradient-border p-8 rounded-lg card-hover">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
