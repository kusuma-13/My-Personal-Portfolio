import { Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Scripting',
      skills: ['Python (Pandas, NumPy)', 'SQL (MySQL)', 'JavaScript', 'TypeScript', 'React', 'Node.js'],
    },
    {
      title: 'Data Visualization & BI',
      skills: ['Power BI', 'Streamlit', 'Seaborn', 'Matplotlib', 'Data Analysis', 'Excel'],
    },
    {
      title: 'Tools & Databases',
      skills: ['Git/GitHub', 'MySQL', 'MongoDB', 'Jupyter Notebooks', 'Docker', 'VS Code'],
    },
    {
      title: 'Web Development',
      skills: ['HTML/CSS', 'Tailwind CSS', 'REST APIs', 'Responsive Design', 'Web Performance', 'SEO'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Zap size={28} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Toolbox</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-background/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/30 rounded-full hover:bg-primary/20 transition-colors"
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

export default Skills
