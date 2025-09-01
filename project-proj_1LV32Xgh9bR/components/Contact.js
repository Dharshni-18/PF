function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // Create mailto link
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:gdharshni2004@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <section id="contact" className="py-20" style={{background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(139, 92, 246, 0.05) 100%)'}} data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Get In Touch</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[var(--primary-color)]">Let's Connect!</h3>
                <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborations, or just have a conversation about 
                  data science and AI. Feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">Email</p>
                      <a 
                        href="mailto:gdharshni2004@gmail.com" 
                        className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                        onClick={(e) => { window.location.href = "mailto:gdharshni2004@gmail.com"; }}
                      >
                        gdharshni2004@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <div className="icon-linkedin text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/dharshni-31127a259" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                        onClick={(e) => { window.open("https://linkedin.com/in/dharshni-31127a259", "_blank"); }}
                      >
                        linkedin.com/in/dharshni-31127a259
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <div className="icon-github text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">GitHub</p>
                      <a 
                        href="https://github.com/Dharshni-18" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                        onClick={(e) => { window.open("https://github.com/Dharshni-18", "_blank"); }}
                      >
                        github.com/Dharshni-18
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--primary-color)] text-[var(--text-primary)]"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--primary-color)] text-[var(--text-primary)]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--primary-color)] text-[var(--text-primary)]"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--primary-color)] text-[var(--text-primary)] resize-vertical"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}