import { Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analytics Intern',
      company: 'Rooman Technologies Pvt. Ltd.',
      period: 'September 2025 (1 Month)',
      description: [
        'Assisted in cleaning and preprocessing raw datasets using Pandas and NumPy, improving data reliability by 15%.',
        'Developed interactive dashboards using Power BI for the sales team, reducing report generation time by 2 hours daily.',
        'Wrote and optimized MySQL queries for complex data extraction, supporting a system migration project.',
        'Contributed to data quality checks using Streamlit to build a lightweight data validation application.',
      ],
      highlights: ['Data Cleaning', 'Power BI', 'MySQL', 'Pandas'],
    },
    {
      title: 'Web Full Stack Development Intern',
      company: 'Future Interns',
      period: 'October 2025 (1 Month)',
      description: [
        'Developing full-stack web applications using React for frontend and Node.js for backend.',
        'Building responsive UI components with Tailwind CSS and modern JavaScript frameworks.',
        'Implementing RESTful APIs and database management with MySQL/MongoDB.',
        'Collaborating with development teams to deploy applications using Git, Docker, and cloud platforms.',
      ],
      highlights: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase size={28} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

              <div>
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <p className="text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
