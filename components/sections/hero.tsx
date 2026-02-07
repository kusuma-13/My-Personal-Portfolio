import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Full Stack Developer</span>
          <br />
          & Data Analytics Enthusiast
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Crafting elegant solutions to complex problems. Passionate about building scalable applications with modern technologies and turning data into actionable insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            View My Work
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center gap-6 text-muted-foreground">
          <div>
            <p className="text-3xl font-bold text-primary">5+</p>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div className="w-px bg-border"></div>
          <div>
            <p className="text-3xl font-bold text-primary">3+</p>
            <p className="text-sm">Years of Experience</p>
          </div>
          <div className="w-px bg-border"></div>
          <div>
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-sm">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  )
}
