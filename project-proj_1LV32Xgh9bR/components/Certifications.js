function Certifications() {
  try {
    const certifications = [
      {
        title: "Google Project Management",
        issuer: "Google",
        date: "Nov 2024",
        icon: "briefcase",
        bgColor: "bg-blue-500",
        iconColor: "text-blue-400"
      },
      {
        title: "Google Data Analytics",
        issuer: "Google",
        date: "Oct 2024",
        icon: "chart-bar",
        bgColor: "bg-green-500",
        iconColor: "text-green-400"
      },
      {
        title: "Google AI Essentials",
        issuer: "Google",
        date: "Jul 2024",
        icon: "brain",
        bgColor: "bg-purple-500",
        iconColor: "text-purple-400"
      },
      {
        title: "Responsible & Safe AI",
        issuer: "NPTEL",
        date: "Jul–Oct 2024",
        icon: "shield",
        bgColor: "bg-orange-500",
        iconColor: "text-orange-400"
      },
      {
        title: "Programming in Java",
        issuer: "NPTEL",
        date: "Jan–Apr 2024",
        icon: "coffee",
        bgColor: "bg-red-500",
        iconColor: "text-red-400"
      }
    ];

    return (
      <section id="certifications" className="py-20" style={{background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(139, 92, 246, 0.05) 100%)'}} data-name="certifications" data-file="components/Certifications.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Certifications</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="card text-center group hover:border-[var(--accent-color)]">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 ${cert.bgColor} bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto border-2 border-[var(--border-color)] group-hover:border-[var(--accent-color)] transition-all duration-300`}>
                      <div className={`icon-${cert.icon} text-3xl ${cert.iconColor}`}></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                      <div className="icon-check text-xs text-white"></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{cert.title}</h3>
                  <p className="text-[var(--primary-color)] font-semibold mb-3">{cert.issuer}</p>
                  <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-opacity-10 px-4 py-2 rounded-full">
                    <span className="text-[var(--accent-color)] font-medium text-sm">
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Certifications component error:', error);
    return null;
  }
}