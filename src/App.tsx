import { useEffect, useMemo, useState, type ChangeEvent } from 'react'
import './App.css'

type Project = {
  id: number
  name: string
  emoji: string
  description: string
  tech: string[]
  github: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Trackeador de Objetivos',
    emoji: '🎯',
    description: 'React dashboard for goal tracking and performance evaluation.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Charts'],
    github: 'https://github.com/mqtissj/obgR',
  },
  {
    id: 2,
    name: 'Manejo de Alimentos',
    emoji: '🍲',
    description: 'Food management system with user authentication and geolocation.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Geolocation API'],
    github: 'https://github.com/mqtissj/OBGTALLER',
  },
  {
    id: 3,
    name: 'Sistema de Gestión de Atletas',
    emoji: '🏃',
    description: 'Sports management system with C#, .NET, and SQL Server.',
    tech: ['C#', '.NET', 'ASP.NET MVC', 'SQL Server', 'Bootstrap'],
    github: 'https://github.com/mqtissj/gestionDeAtletas',
  },
  {
    id: 4,
    name: 'EGA Web',
    emoji: '🚛',
    description: 'Corporate responsive website for a transport company.',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/mqtissj/paginaEGA',
  },
  {
    id: 5,
    name: 'Sistema de Alquiler de Libros',
    emoji: '📚',
    description: 'Library management using TADs and advanced data structures in Java.',
    tech: ['Java', 'TAD', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/mqtissj/proyectoAlgoritmos',
  },
  {
    id: 6,
    name: 'Sistema de Peajes',
    emoji: '🛣️',
    description: 'Rest API for toll management built with Spring Boot and Swagger.',
    tech: ['Java', 'Spring Boot', 'REST API', 'Swagger', 'Maven'],
    github: 'https://github.com/mqtissj',
  },
]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitError, setSubmitError] = useState('')

  const i18n = {
    en: {
      home: 'Home',
      certifications: 'Certifications',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      heroEyebrow: 'Montevideo, Uruguay • IT Analyst Student',
      heroTitle: 'Matías Filgueiras',
      heroSubtitle: 'Backend Developer & IT Analyst',
      heroDescription:
        'Advanced IT Analyst at ORT University. Seeking first professional opportunity in backend development, full stack, or software engineering.',
      btnDownloadEn: 'Download CV (English)',
      btnDownloadEs: 'Download CV (Spanish)',
      btnViewProjects: 'View Projects',
      btnContact: 'Contact Me',
      certTitle: 'Certifications & Achievements ⭐',
      certDescription: 'Highlighting verified credentials that show readiness for tech roles.',
      aboutTitle: 'About Me',
      aboutParagraph1:
        'I’m a soon-to-graduate IT Analyst at ORT University with a strong passion for backend development, cybersecurity, AI, and scalable architecture.',
      aboutParagraph2:
        'My journey includes projects in multiple stacks, certifications, and hands-on practice with REST APIs, databases, and agile methodologies.',
      projectSectionTitle: 'Projects Portfolio',
      projectSectionDesc: '6 real projects that demonstrate a practical and scalable mindset.',
      interestTitle: 'Areas of Interest',
      contactTitle: 'Contact',
      contactSubtitle:
        'I’m available for interview invitations and collaboration opportunities.',
      contactReach: 'Reach me directly',
      available: 'Available for opportunities',
    },
    es: {
      home: 'Inicio',
      certifications: 'Certificaciones',
      about: 'Acerca',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      heroEyebrow: 'Montevideo, Uruguay • Estudiante Analista IT',
      heroTitle: 'Matías Filgueiras',
      heroSubtitle: 'Desarrollador Backend y Analista IT',
      heroDescription:
        'Analista IT avanzado de ORT. Busco mi primera experiencia profesional en backend, full stack o ingeniería de software.',
      btnDownloadEn: 'Descargar CV (Inglés)',
      btnDownloadEs: 'Descargar CV (Español)',
      btnViewProjects: 'Ver Proyectos',
      btnContact: 'Contacto',
      certTitle: 'Certificaciones y Logros ⭐',
      certDescription: 'Destacando credenciales verificadas que muestran preparación para roles tecnológicos.',
      aboutTitle: 'Sobre Mí',
      aboutParagraph1:
        'Próximamente egresado como Analista IT en ORT con fuerte pasión por el desarrollo backend, ciberseguridad, IA y arquitectura escalable.',
      aboutParagraph2:
        'Incluye proyectos en varios stacks, certificaciones y práctica con APIs REST, bases de datos y metodologías ágiles.',
      projectSectionTitle: 'Portafolio de Proyectos',
      projectSectionDesc: '6 proyectos reales que demuestran un enfoque práctico y escalable.',
      interestTitle: 'Áreas de Interés',
      contactTitle: 'Contacto',
      contactSubtitle: 'Estoy disponible para entrevistas y oportunidades de colaboración.',
      contactReach: 'Contáctame directamente',
      available: 'Disponible para oportunidades',
    },
  }

  const text = i18n[lang]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const certifications = useMemo(
    () => [
      {
        title: 'GeneXus 18 Junior Analyst',
        level: '75% score',
        icon: '🛡️',
        description: 'March 2026',
      },
      {
        title: 'Cambridge English B2',
        level: 'Advanced English',
        icon: '📜',
        description: 'Certified',
      },
    ],
    [],
  )

  const handleChange = (key: 'name' | 'email' | 'message') => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitError('Please complete all fields before sending.')
      return
    }

    const mailto = `mailto:mfilgueirass13@gmail.com?subject=${encodeURIComponent(
      'Landing page contact request',
    )}&body=${encodeURIComponent(`Hello Matías,%0D%0A%0D%0AI would like to connect with you.\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)}`
    window.location.href = mailto
  }

  const openProject = (project: Project) => setSelectedProject(project)
  const closeProject = () => setSelectedProject(null)

  const baseURL = import.meta.env.BASE_URL || '/'
  const cvEN = `${baseURL}CV-Matias-Filgueiras-EN.pdf`
  const cvES = `${baseURL}CV-Matias-Filgueiras-ES.pdf`

  const forceDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('Archivo no disponible')
      const blob = await response.blob()
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.error(error)
      window.open(url, '_blank', 'noopener')
    }
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">Matías Filgueiras</div>
        <nav>
          <a href="#hero">{text.home}</a>
          <a href="#certifications">{text.certifications}</a>
          <a href="#about">{text.about}</a>
          <a href="#skills">{text.skills}</a>
          <a href="#projects">{text.projects}</a>
          <a href="#contact">{text.contact}</a>
        </nav>
        <div className="toggles">
          <div className="language-switch">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
              🇺🇸 EN
            </button>
            <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>
              🇪🇸 ES
            </button>
            <div className="language-icon" aria-hidden="true">🌐</div>
          </div>
          <button
            className="theme-toggle"
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="main-container">
        <section id="hero" className="section hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <p className="caps">{text.heroEyebrow}</p>
              <h1>{text.heroTitle}</h1>
              <h2>{text.heroSubtitle}</h2>
              <p>{text.heroDescription}</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => forceDownload(cvEN, 'CV-Matias-Filgueiras-EN.pdf')}>
                  {text.btnDownloadEn}
                </button>
                <button className="btn btn-primary" onClick={() => forceDownload(cvES, 'CV-Matias-Filgueiras-ES.pdf')}>
                  {text.btnDownloadEs}
                </button>
                <a className="btn btn-secondary" href="#projects">
                  {text.btnViewProjects}
                </a>
                <a className="btn btn-outline" href="#contact">
                  {text.btnContact}
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/mqtissj" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/matiszn" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="hero-avatar">
              <div className="avatar-ring">
                <div className="avatar" aria-hidden="true">MF</div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section certifications-section">
          <h3>{text.certTitle}</h3>
          <p>{text.certDescription}</p>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.title} className="cert-card">
                <div className="cert-icon" aria-hidden="true">
                  {cert.icon}
                </div>
                <h4>{cert.title}</h4>
                <strong>{cert.level}</strong>
                <p>{cert.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <h3>{text.aboutTitle}</h3>
          <p>{text.aboutParagraph1}</p>
          <p>{text.aboutParagraph2}</p>
        </section>

        <section id="skills" className="section skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div>
              <h4>Backend</h4>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>C#</span>
              <span>.NET</span>
              <span>REST API</span>
            </div>
            <div>
              <h4>Frontend</h4>
              <span>JavaScript</span>
              <span>React</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
            </div>
            <div>
              <h4>Databases</h4>
              <span>MySQL</span>
              <span>SQL Server</span>
              <span>MongoDB</span>
              <span>Entity Framework</span>
            </div>
            <div>
              <h4>Tools</h4>
              <span>Git</span>
              <span>GitHub</span>
              <span>Postman</span>
              <span>Swagger</span>
              <span>IntelliJ IDEA</span>
            </div>
            <div>
              <h4>Cloud / Methodology</h4>
              <span>AWS Academy</span>
              <span>Microsoft Azure</span>
              <span>Scrum</span>
              <span>Agile</span>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <h3>{text.projectSectionTitle}</h3>
          <p>{text.projectSectionDesc}</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card" onClick={() => openProject(project)}>
                <div className="project-emoji">{project.emoji}</div>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((t) => (
                    <strong key={t}>{t}</strong>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  GitHub Repo ↗
                </a>
              </article>
            ))}
          </div>

          {selectedProject && (
            <div className="modal-overlay" onClick={closeProject}>
              <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeProject} aria-label="Close project details">
                  ×
                </button>
                <h4>{selectedProject.emoji} {selectedProject.name}</h4>
                <p>{selectedProject.description}</p>
                <div className="tech-tags">
                  {selectedProject.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Open on GitHub
                </a>
              </div>
            </div>
          )}
        </section>

        <section id="interests" className="section interest-section">
          <h3>{text.interestTitle}</h3>
          <div className="interest-grid">
            <div>🛡️ Cybersecurity</div>
            <div>🤖 Artificial Intelligence</div>
            <div>🧩 Backend Architecture</div>
            <div>☁️ Cloud Computing</div>
            <div>🔁 DevOps & Automation</div>
          </div>
        </section>

        <section id="education" className="section education-section">
          <h3>{lang === 'en' ? 'Education' : 'Educación'}</h3>
          <div className="education-grid">
            <article>
              <h4>ORT University</h4>
              <span>IT Analyst (2023 - present)</span>
              <p>Advanced degree in IT systems with backend and database focus.</p>
            </article>
            <article>
              <h4>High School (Engineering)</h4>
              <span>2020 - 2022</span>
              <p>Engineering-oriented education with strong problem-solving foundation.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h3>{text.contactTitle}</h3>
          <p>{text.contactSubtitle}</p>
          <div className="contact-layout">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                {lang === 'en' ? 'Name' : 'Nombre'}
                <input type="text" value={form.name} onChange={handleChange('name')} required />
              </label>
              <label>
                Email
                <input type="email" value={form.email} onChange={handleChange('email')} required />
              </label>
              <label>
                {lang === 'en' ? 'Message' : 'Mensaje'}
                <textarea value={form.message} onChange={handleChange('message')} required rows={5} />
              </label>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              {submitError && <p className="form-error">{submitError}</p>}
            </form>
            <aside className="contact-info">
              <h4>Reach me directly</h4>
              <p>📍 Montevideo, Uruguay</p>
              <p>✉️ mfilgueirass13@gmail.com</p>
              <p>📞 +598 92 346 566</p>
              <p>🌐 linkedin.com/in/matiszn</p>
              <p>🐙 github.com/mqtissj</p>
              <div className="badge available center">Available for opportunities</div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Matías Filgueiras — Ready to launch your next project.</p>
        <div>
          <a href="https://github.com/mqtissj" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/matiszn" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
