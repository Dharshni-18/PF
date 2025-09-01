function About() {
  try {
    return (
      <section id="about" className="py-20" style={{background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(139, 92, 246, 0.05) 100%)'}} data-name="about" data-file="components/About.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[var(--primary-color)]">My Objective</h3>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                  As a passionate Data Science student, I am driven by the endless possibilities that data holds. 
                  My strong foundation in data analysis, combined with excellent problem-solving and communication skills, 
                  positions me to make meaningful contributions to innovative projects.
                </p>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                  I believe in continuous learning and growth, always seeking new challenges that push the boundaries 
                  of what's possible with artificial intelligence and data science.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:gdharshni2004@gmail.com" 
                    className="flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors"
                    onClick={(e) => { window.location.href = "mailto:gdharshni2004@gmail.com"; }}
                  >
                    <div className="icon-mail text-xl"></div>
                    Email
                  </a>
                  <a 
                    href="https://linkedin.com/in/dharshni-31127a259" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors"
                    onClick={(e) => { window.open("https://linkedin.com/in/dharshni-31127a259", "_blank"); }}
                  >
                    <div className="icon-linkedin text-xl"></div>
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/Dharshni-18" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors"
                    onClick={(e) => { window.open("https://github.com/Dharshni-18", "_blank"); }}
                  >
                    <div className="icon-github text-xl"></div>
                    GitHub
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="card text-center">
                  <div className="w-16 h-16 bg-[var(--primary-color)] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-brain text-2xl text-[var(--primary-color)]"></div>
                  </div>
                  <h4 className="font-semibold mb-2">AI Enthusiast</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Passionate about artificial intelligence and machine learning</p>
                </div>
                
                <div className="card text-center">
                  <div className="w-16 h-16 bg-[var(--accent-color)] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-chart-bar text-2xl text-[var(--accent-color)]"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Data Analyst</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Strong foundation in data analysis and visualization</p>
                </div>
                
                <div className="card text-center">
                  <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-users text-2xl text-green-500"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Team Player</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Excellent communication and teamwork skills</p>
                </div>
                
                <div className="card text-center">
                  <div className="w-16 h-16 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-lightbulb text-2xl text-purple-500"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Problem Solver</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Creative approach to solving complex challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}