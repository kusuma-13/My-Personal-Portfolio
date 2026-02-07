export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Authentication', 'Server Architecture']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Database Design', 'SQL']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'GitHub', 'VS Code', 'Vercel']
    },
    {
      category: 'Data & Analytics',
      skills: ['Python', 'Pandas', 'Data Visualization', 'Tableau', 'Excel', 'Statistics']
    },
    {
      category: 'Other',
      skills: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Communication', 'Leadership']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="gradient-border p-6 rounded-lg card-hover">
              <h3 className="text-lg font-semibold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary/30 transition-colors"
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
