function Achievements() {
  try {
    const achievements = [
      {
        title: "Campus Ambassador",
        organization: "Unstop – Student Director",
        period: "Oct 2024 – Mar 2025",
        description: "Leading campus engagement and student outreach programs",
        icon: "users",
        type: "Leadership",
        iconColor: "text-blue-400",
        bgColor: "bg-blue-500"
      },
      {
        title: "1st Prize – RJ/VJ Hunt",
        organization: "Orlia'2K25",
        period: "2025",
        description: "Won first place in radio/video jockey competition",
        icon: "trophy",
        type: "Competition",
        iconColor: "text-yellow-400",
        bgColor: "bg-yellow-500"
      },
      {
        title: "3rd Prize – Best Manager",
        organization: "Orlia'2K25", 
        period: "2025",
        description: "Recognized for exceptional management skills",
        icon: "award",
        type: "Competition",
        iconColor: "text-orange-400",
        bgColor: "bg-orange-500"
      },
      {
        title: "Student of the Month",
        organization: "College Recognition",
        period: "Sep 2024",
        description: "Outstanding academic and extracurricular performance",
        icon: "star",
        type: "Recognition",
        iconColor: "text-purple-400",
        bgColor: "bg-purple-500"
      },
      {
        title: "1st Prize – Paper Presentation",
        organization: "Gencraft",
        period: "2024",
        description: "Excellence in technical paper presentation",
        icon: "file-text",
        type: "Academic",
        iconColor: "text-green-400",
        bgColor: "bg-green-500"
      },
      {
        title: "1st Prize – English Speech",
        organization: "Club Event",
        period: "2024",
        description: "Outstanding performance in public speaking",
        icon: "mic",
        type: "Communication",
        iconColor: "text-pink-400",
        bgColor: "bg-pink-500"
      }
    ];

    return (
      <section id="achievements" className="py-20" data-name="achievements" data-file="components/Achievements.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="card">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${achievement.bgColor} bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <div className={`icon-${achievement.icon} text-2xl ${achievement.iconColor}`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">{achievement.title}</h3>
                        <span className="bg-[var(--primary-color)] text-white px-2 py-1 rounded text-xs w-fit">
                          {achievement.type}
                        </span>
                      </div>
                      <p className="text-[var(--primary-color)] font-semibold mb-2">{achievement.organization}</p>
                      <p className="text-[var(--text-secondary)] text-sm mb-2">{achievement.description}</p>
                      <span className="text-[var(--accent-color)] text-sm">{achievement.period}</span>
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
    console.error('Achievements component error:', error);
    return null;
  }
}