const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-sm font-semibold text-primary">About</p>
              </div>
              <div className="pl-4 text-muted-foreground">
                <p className="text-sm hover:text-foreground transition-colors cursor-pointer">Background</p>
              </div>
              <div className="pl-4 text-muted-foreground">
                <p className="text-sm hover:text-foreground transition-colors cursor-pointer">Interests</p>
              </div>
            </nav>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Me</h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                I am a Bachelor of Computer Applications student with a solid foundation in data analytics and web development. With practical experience in Python, SQL, and data visualization, I thrive on creating innovative solutions through hands-on projects and internships. I possess a strong passion for technology and am eager to apply my skills in dynamic environments.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Background</h3>
                <p className="leading-relaxed">
                  Currently pursuing my BCA degree at MLA Academy of Higher Learning (2023-2026), I have gained exposure to data structures, database management, algorithms, and web development principles. My journey started with a strong foundation in commerce and business studies during my PUC years.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">What I'm Passionate About</h3>
                <p className="leading-relaxed">
                  I'm particularly interested in data analytics, pattern recognition, and building full-stack applications. I enjoy transforming raw data into actionable insights and creating responsive user interfaces that solve real-world problems. Beyond academics, I'm always exploring new technologies and best practices in software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
