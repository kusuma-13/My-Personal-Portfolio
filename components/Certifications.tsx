import { Award } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    { name: 'Power BI', issuer: 'SimpliLearn', date: 'August 2025' },
    { name: 'Cloud Application Development', issuer: 'Skill India (PMKVY)', date: 'Mar 2024' },
    { name: 'Digital Marketing Short-term Course', issuer: 'Inspyr', date: 'April 2024' },
    { name: 'Office Automation', issuer: 'KSEAB', date: 'July 2023' },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award size={28} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 bg-background/50 border border-border rounded-lg hover:border-primary/50 hover:bg-card/30 transition-all duration-300 flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award size={20} className="text-primary" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-foreground">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <div className="text-sm font-medium text-primary whitespace-nowrap">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
