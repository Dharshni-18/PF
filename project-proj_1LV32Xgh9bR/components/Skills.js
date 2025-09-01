function Skills() {
  try {
    const technicalSkills = [
      { name: "Java", icon: "coffee" },
      { name: "C++", icon: "code" },
      { name: "Python", icon: "settings" },
      { name: "Machine Learning", icon: "brain" },
      { name: "Data Visualization", icon: "chart-bar" }
    ];

    const softSkills = [
      { name: "Communication", icon: "message-circle" },
      { name: "Teamwork", icon: "users" },
      { name: "Leadership", icon: "crown" },
      { name: "Time Management", icon: "clock" }
    ];

    return (
      <section id="skills" className="py-20" data-name="skills" data-file="components/Skills.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-[var(--primary-color)] flex items-center gap-3">
                <div className="icon-code text-xl"></div>
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className={`icon-${skill.icon} text-[var(--primary-color)]`}></div>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <div className="w-full bg-[var(--bg-secondary)] rounded-full h-2">
                      <div 
                        style={{ width: '40%' }}
                        className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] h-2 rounded-full transition-all duration-1000">
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-[var(--accent-color)] flex items-center gap-3">
                <div className="icon-heart text-xl"></div>
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="card text-center">
                    <div className="w-16 h-16 bg-[var(--accent-color)] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className={`icon-${skill.icon} text-2xl text-[var(--accent-color)]`}></div>
                    </div>
                    <h4 className="font-semibold text-[var(--text-primary)]">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}
