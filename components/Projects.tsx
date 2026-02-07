import { Code, Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Transaction Fraud Pattern Analyzer',
      description:
        'A comprehensive data analysis project utilizing Python and MySQL to identify, visualize, and report fraudulent transaction patterns within large datasets.',
      tags: ['Python', 'MySQL', 'Data Analysis', 'Pandas', 'Visualization'],
      github: 'https://github.com/kusuma-13/Beginner_Project.git',
      demo: null,
    },
    {
      title: 'Job Portal Resume Keyword Analyzer',
      description:
        'A data analytics project using Python and MySQL to detect keywords in resumes for job portals, enhancing candidate-job matching efficiency.',
      tags: ['Python', 'MySQL', 'Streamlit', 'NLP'],
      github: 'https://github.com/kusuma-13/Intermediate_Project.git',
      demo: null,
    },
    {
      title: 'E-Gov API Misuse & Bot Pattern Detector',
      description:
        'A security-focused project investigating misuse of E-Government APIs and designing a detection system for bot patterns to enhance security measures.',
      tags: ['Python', 'API Security', 'Pattern Detection', 'Security Analysis'],
      github: '#',
      demo: null,
    },
    {
      title: 'E-Commerce Storefront',
      description:
        'A full-stack e-commerce application featuring a storefront interface with integrated payment systems and user authentication functionality.',
      tags: ['React', 'Node.js', 'Payment Integration', 'Authentication'],
      github: '#',
      demo: null,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code size={28} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border/50">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.github === '#' && (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground opacity-50">
                    <Github size={16} />
                    GitHub
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
