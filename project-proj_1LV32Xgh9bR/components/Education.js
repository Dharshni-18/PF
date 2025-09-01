function Education() {
  try {
    const educationData = [
      {
        degree: "B.Tech in Artificial Intelligence & Data Science",
        institution: "M. Kumarasamy College of Engineering, Karur",
        period: "Pursuing, 2026",
        grade: "8.9 CGPA",
        icon: "graduation-cap",
        current: true
      },
      {
        degree: "Senior Secondary School",
        institution: "Nivedhita Matric Higher Secondary School",
        period: "2022",
        grade: "91.33%",
        icon: "book-open"
      },
      {
        degree: "Secondary School",
        institution: "Nivedhita Matric Higher Secondary School",
        period: "2020",
        grade: "98.6%",
        icon: "school"
      }
    ];

    return (
      <section id="education" className="py-20" data-name="education" data-file="components/Education.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className={`card ${edu.current ? 'border-[var(--primary-color)]' : ''}`}>
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${edu.current ? 'bg-[var(--primary-color)]' : 'bg-[var(--accent-color)]'}`}>
                      <div className={`icon-${edu.icon} text-2xl text-white`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                        {edu.current && (
                          <span className="bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-sm w-fit">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[var(--primary-color)] font-semibold mb-2">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <span className="text-[var(--text-secondary)]">{edu.period}</span>
                        <span className="bg-[var(--bg-secondary)] px-3 py-1 rounded-lg text-[var(--accent-color)] font-semibold w-fit">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Education component error:', error);
    return null;
  }
}