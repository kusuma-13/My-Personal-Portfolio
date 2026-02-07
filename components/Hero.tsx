'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-block">
            <span className="px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-full">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Kusuma V
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
            Student & Data Analytics Enthusiast
          </p>

          <p className="max-w-2xl text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
            I am a Bachelor of Computer Applications student with a solid foundation in data analytics and web development. With practical experience in Python, SQL, and data visualization, I thrive on creating innovative solutions through hands-on projects and internships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 group"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://github.com/kusuma-13"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card/50 transition-colors duration-200"
            >
              View on GitHub
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/kusuma-13"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-card/80 text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/kusuma-v"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-card/80 text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:kusumavkusumav13@gmail.com"
              className="p-3 rounded-lg bg-card hover:bg-card/80 text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
