function Projects() {
  try {
    const projects = [
      {
        title: "Sailor's Sentinel – Indian Ocean",
        role: "Team Leader",
        description: "A Ship Route Optimization System that leverages machine learning to optimize maritime routes for safety, fuel efficiency, and passenger comfort.",
        tech: ["Python", "Decision Trees", "Random Forests", "Folium"],
        features: [
          "Machine learning route optimization",
          "Real-time safety analysis",
          "Fuel efficiency calculations",
          "Interactive route visualization"
        ],
        icon: "ship"
      },
      {
        title: "MBA Project",
        role: "Data Analyst",
        description: "Focused on applying business intelligence and data analytics techniques to solve real-world organizational challenges.",
        tech: ["Business Intelligence", "Data Analytics", "Visualization"],
        features: [
          "Strategic decision-making support",
          "Predictive analysis implementation",
          "Management insights visualization",
          "Organizational challenge solutions"
        ],
        icon: "briefcase"
      }
    ];

    return (
      <section id="projects" className="py-20" style={{background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(139, 92, 246, 0.05) 100%)'}} data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-20 rounded-lg flex items-center justify-center">
                    <div className={`icon-${project.icon} text-xl text-[var(--primary-color)]`}></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{project.title}</h3>
                    <p className="text-[var(--accent-color)] font-semibold">{project.role}</p>
                  </div>
                </div>
                
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-[var(--text-primary)]">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-[var(--text-secondary)]">
                        <div className="icon-check-circle text-green-500 text-sm"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tIndex) => (
                    <span 
                      key={tIndex}
                      className="bg-[var(--bg-primary)] px-3 py-1 rounded-full text-[var(--primary-color)] text-sm border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}