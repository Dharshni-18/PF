function Footer() {
  try {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-12" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Dharshni G</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Aspiring Data Scientist passionate about AI and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-semibold text-[var(--text-primary)] mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  About
                </button>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Projects
                </button>
                <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Skills
                </button>
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Contact
                </button>
              </div>
            </div>

            {/* Social Links & Back to Top */}
            <div className="text-center md:text-right">
              <div className="flex justify-center md:justify-end gap-4 mb-6">
                <a 
                  href="mailto:gdharshni2004@gmail.com" 
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors"
                  onClick={(e) => { window.location.href = "mailto:gdharshni2004@gmail.com"; }}
                >
                  <div className="icon-mail text-lg text-[var(--text-primary)]"></div>
                </a>
                <a 
                  href="https://linkedin.com/in/dharshni-31127a259" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors"
                  onClick={(e) => { window.open("https://linkedin.com/in/dharshni-31127a259", "_blank"); }}
                >
                  <div className="icon-linkedin text-lg text-[var(--text-primary)]"></div>
                </a>
                <a 
                  href="https://github.com/Dharshni-18" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors"
                  onClick={(e) => { window.open("https://github.com/Dharshni-18", "_blank"); }}
                >
                  <div className="icon-github text-lg text-[var(--text-primary)]"></div>
                </a>
              </div>
              
              <button 
                onClick={scrollToTop}
                className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2 mx-auto md:ml-auto"
              >
                <div className="icon-arrow-up text-sm"></div>
                Back to Top
              </button>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] mt-8 pt-6 text-center">
            <p className="text-[var(--text-secondary)] text-sm">
              © 2025 Dharshni G. All rights reserved. Built with passion for data science and AI.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}