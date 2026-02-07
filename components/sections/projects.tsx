import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing business metrics and analytics with multiple data sources.',
      technologies: ['React', 'Python', 'Pandas', 'Tableau', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with user authentication, posts, comments, and real-time notifications.',
      technologies: ['MERN Stack', 'JWT', 'Socket.io', 'Cloudinary'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and beautiful UI.',
      technologies: ['React', 'API', 'Tailwind CSS', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Blog Platform',
      description: 'Content management system for creating and sharing blog posts with markdown support.',
      technologies: ['Next.js', 'Markdown', 'MongoDB', 'Next-Auth'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 text-lg">Showcasing some of my recent work and highlighted projects</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`gradient-border p-6 rounded-lg card-hover flex flex-col ${
                project.featured ? 'lg:col-span-1 ring-2 ring-primary/50' : ''
              }`}
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/20 text-accent rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
