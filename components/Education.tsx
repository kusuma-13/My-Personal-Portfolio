import { GraduationCap } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'MLA Academy of Higher Learning, Bengaluru',
      period: '2023 - 2026 (Expected)',
      highlights: [
        'Relevant Coursework: Data Structures, Database Management Systems, Advanced Algorithms, and Web Development Principles.',
      ],
    },
    {
      degree: 'Pre-University Certification (PUC) - Commerce Stream',
      institution: 'JS Pre-University College, Bengaluru',
      period: '2021 - 2023',
      highlights: [
        'Core Subjects: Business Studies, Accountancy, Statistics, and Computer Science.',
        'Established a strong foundation in commercial operations, financial analysis, and quantitative methods.',
      ],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap size={28} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-background/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{edu.period}</span>
              </div>

              <div className="space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-3 text-muted-foreground text-sm">
                    <span className="text-primary mt-1 flex-shrink-0">›</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
