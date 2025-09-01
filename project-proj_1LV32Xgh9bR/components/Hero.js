function Hero() {
  try {
    return (
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary-color)] bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 bg-[var(--accent-color)] bg-opacity-10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 bg-opacity-10 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full animate-pulse"></div>
                <span className="text-[var(--accent-color)] font-medium">Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
                Hi, I'm <span className="gradient-text">Dharshni G</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-[var(--text-secondary)]">
                Aspiring Data Scientist | AI & Data Science Student
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                Passionate Data Science student with a strong foundation in data analysis, problem-solving, and communication. 
                Eager to contribute to cutting-edge projects while continuously learning and growing.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                  <div className="icon-award text-[var(--accent-color)]"></div>
                  <span className="text-sm font-medium">5+ Certifications</span>
                </div>
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                  <div className="icon-code text-[var(--primary-color)]"></div>
                  <span className="text-sm font-medium">Multiple Projects</span>
                </div>
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                  <div className="icon-graduation-cap text-purple-400"></div>
                  <span className="text-sm font-medium">8.9 CGPA</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary flex items-center gap-2"
                >
                  <div className="icon-mail text-sm"></div>
                  Get In Touch
                </button>
                <button 
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary flex items-center gap-2"
                >
                  <div className="icon-eye text-sm"></div>
                  View Projects
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                {/* Main Profile Image */}
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] p-2 shadow-2xl shadow-purple-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Dharshni G"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--accent-color)] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <div className="icon-brain text-3xl text-white"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
                  <div className="icon-database text-2xl text-white"></div>
                </div>
                <div className="absolute top-1/4 -left-8 w-16 h-16 glass-effect rounded-full flex items-center justify-center animate-pulse">
                  <div className="icon-chart-bar text-xl text-[var(--accent-color)]"></div>
                </div>
                <div className="absolute bottom-1/4 -right-8 w-16 h-16 glass-effect rounded-full flex items-center justify-center animate-pulse delay-700">
                  <div className="icon-lightbulb text-xl text-yellow-400"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-[var(--primary-color)] rounded-full animate-ping"></div>
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-[var(--accent-color)] rounded-full animate-ping delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
