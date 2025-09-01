function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 w-full glass-effect z-50 border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              Dharshni G
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-[var(--primary-color)] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-[var(--primary-color)] transition-colors">About</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-[var(--primary-color)] transition-colors">Education</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-[var(--primary-color)] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-[var(--primary-color)] transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="icon-menu text-xl text-[var(--text-primary)]"></div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[var(--border-color)] pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left hover:text-[var(--primary-color)] transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left hover:text-[var(--primary-color)] transition-colors">About</button>
                <button onClick={() => scrollToSection('education')} className="text-left hover:text-[var(--primary-color)] transition-colors">Education</button>
                <button onClick={() => scrollToSection('projects')} className="text-left hover:text-[var(--primary-color)] transition-colors">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-left hover:text-[var(--primary-color)] transition-colors">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="btn-primary w-fit">Contact</button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}