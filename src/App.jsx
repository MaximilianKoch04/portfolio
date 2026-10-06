import { useEffect, useState } from 'react';

const profile = {
  name: 'Maximiliano Koch',
  email: 'maxikoch40@gmail.com',
  github: 'https://github.com/MaximilianKoch04',
  // URL de LinkedIn proporcionada por Maximiliano.
  linkedin: 'https://www.linkedin.com/in/maximiliano-undefined-a04414429/',
  // Agregá la URL del repositorio de este portfolio cuando esté publicado.
  portfolioRepo: '',
  videoPortfolio: '',
};

const sections = [['inicio', 'Inicio'], ['sobre-mi', 'Sobre mí'], ['proyectos', 'Proyectos'], ['edicion', 'Edición'], ['contacto', 'Contacto']];

// Miniaturas originales tomadas del portfolio de Canva.
// Para habilitar la reproducción local, agregar los MP4 a public/edicion
// y completar el campo src. No usar URLs blob ni enlaces temporales de Canva.
const edits = [
  { title: 'Unión Soviética', poster: './edicion/union-sovietica.jpg', src: '' },
  { title: 'Llados', poster: './edicion/llados.jpg', src: '' },
  { title: 'MrBeast', poster: './edicion/mrbeast.jpg', src: '' },
  { title: 'Ramiro Cumbria', poster: './edicion/ramiro-cumbria.jpg', src: '' },
];

function Heart({ className = '' }) {
  return <svg className={`heart ${className}`} viewBox="0 0 9 8" aria-hidden="true" shapeRendering="crispEdges"><path d="M1 0h2v1h1v1h1V1h1V0h2v1h1v3H8v1H7v1H6v1H5v1H4V7H3V6H2V5H1V4H0V1h1Z" fill="currentColor" /></svg>;
}

export default function App() {
  const [active, setActive] = useState('inicio');
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting);
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-15% 0px -55% 0px' });
    sections.forEach(([id]) => observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied('Email copiado.');
    } catch {
      setCopied(`Copiá este email: ${profile.email}`);
    }
  }

  const projects = [
    { title: 'Futbolle', category: 'JUEGO WEB', text: 'Un jugador secreto, ocho intentos. Un juego de fútbol en el que cada respuesta revela pistas para descubrir al jugador.', details: 'Pistas por nacionalidad, liga, equipo y posición. Búsqueda de jugadores, historial de intentos y temporizador.', tech: ['HTML', 'CSS', 'JavaScript'], link: `${profile.github}/proyecto-futbolle`, label: 'Ver repositorio' },
    { title: 'FoodRoute', category: 'GESTIÓN DE STOCK', text: 'Una aplicación para gestionar productos y lotes de alimentos, con módulos de clientes y proveedores.', details: 'Desarrollada con ASP.NET Core y Entity Framework, con autenticación de usuarios y base de datos SQL Server.', tech: ['C#', 'ASP.NET Core', 'SQL Server'], link: `${profile.github}/FoodRoute`, label: 'Ver repositorio' },
    { title: 'Portfolio personal', category: 'DESARROLLO FRONTEND', text: 'Este sitio: una presentación de mis proyectos, mis tecnologías y las formas de contactarme.', details: 'Una interfaz inspirada en el pixel art, con navegación por secciones, diseño responsive y acceso con teclado.', tech: ['React', 'Vite', 'CSS'], link: profile.portfolioRepo || '#inicio', label: profile.portfolioRepo ? 'Ver repositorio' : 'Explorar este sitio' },
  ];

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="Maximiliano Koch, inicio">MK<span className="brand-dot">.</span></a>
        <nav aria-label="Navegación principal">
          {sections.map(([id, label]) => <a href={`#${id}`} key={id} className={active === id ? 'selected' : ''} aria-current={active === id ? 'location' : undefined}><Heart />{label}</a>)}
        </nav>
        <span className="header-note">PORTFOLIO / 2026</span>
      </div>
    </header>

    <main id="contenido">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-top"><span>DESARROLLADOR EN FORMACIÓN · EDITOR DE VIDEO</span><span className="hero-location">C# / SQL / WEB</span></div>
        <h1 id="hero-title"><span>MAXIMILIANO</span><span>KOCH<span className="name-cursor" aria-hidden="true">_</span></span></h1>
        <div className="hero-bottom">
          <div className="dialogue"><span className="dialogue-star" aria-hidden="true">*</span><p>Desarrollo aplicaciones y experiencias web.<br /><span className="muted">También cuento historias con video.</span></p></div>
          <div className="hero-actions"><a className="pixel-button primary" href="#proyectos"><Heart />Ver proyectos</a><a className="pixel-button" href="#contacto">Contactarme</a></div>
        </div>
        <div className="hero-footer"><span>APRENDER. CREAR. SEGUIR.</span><a href="#sobre-mi">SCROLL PARA CONTINUAR <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="about section" id="sobre-mi" aria-labelledby="about-title">
        <div className="section-heading"><h2 id="about-title">SOBRE MÍ</h2></div>
        <div className="about-grid">
          <div className="bio"><p>Soy Maximiliano Koch, estudiante de Ingeniería en Sistemas y editor de video. Desarrollo proyectos con C# y SQL, y páginas web con HTML, CSS y JavaScript. También edito videos cortos para redes y marca personal, combinando programación y creatividad en lo que hago.</p><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Conocer mi GitHub <span className="external-label">[abrir]</span></a></div>
          <div className="skills"><h3>MI INVENTARIO</h3><div className="skill-row"><span className="skill-label">Frontend</span><div className="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div></div><div className="skill-row"><span className="skill-label">Backend</span><div className="tags"><span>C#</span><span>SQL</span></div></div><div className="skill-row"><span className="skill-label">Herramientas</span><div className="tags"><span>GitHub</span></div></div></div>
        </div>
      </section>

      <section className="projects section" id="proyectos" aria-labelledby="projects-title">
        <div className="section-heading"><h2 id="projects-title">PROYECTOS</h2></div>
        <div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}>
          <div className="card-top"><span>{project.category}</span></div>
          <h3>{project.title}</h3><p>{project.text}</p><p className="project-detail">{project.details}</p><ul className="project-tech" aria-label="Tecnologías">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul><a className="project-link" href={project.link} {...(project.link.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><span aria-hidden="true">+</span>{project.label}<span className="external-label">[{project.link.startsWith('https:') ? 'código' : 'inicio'}]</span></a>
        </article>)}</div>
      </section>

      <section className="editing section" id="edicion" aria-labelledby="editing-title">
        <div className="section-heading"><h2 id="editing-title">EDICIÓN DE VIDEO</h2></div>
        <div className="editing-intro"><div><p className="intro">Otra forma de contar una historia.</p><p className="muted">Una selección de mis ediciones para videos cortos y marca personal.</p></div><span className="editing-label">MI LADO CREATIVO</span></div>
        <div className="editing-grid">{edits.map(edit => <article className="edit-card" key={edit.title}>
          <div className="edit-media">{edit.src ? <video controls playsInline preload="metadata" poster={edit.poster} aria-label={`Edición de video: ${edit.title}`}><source src={`./edicion/${edit.src}`} type="video/mp4" />Tu navegador no puede reproducir este video.</video> : <img src={edit.poster} alt={`Miniatura original de mi edición: ${edit.title}`} width="405" height="720" loading="lazy" />}</div>
          <div className="edit-caption"><div><h3>{edit.title}</h3><p>EDICIÓN / VIDEO CORTO</p></div></div>
        </article>)}</div>
        <div className="editing-bottom"><p>Estas son miniaturas de mis trabajos.<br />Los videos se pueden ver en mi portfolio de Canva.</p><a className="pixel-button" href={profile.videoPortfolio} target="_blank" rel="noopener noreferrer">Ver videos en Canva</a></div>
      </section>

      <section className="contact section" id="contacto" aria-labelledby="contact-title">
        <div className="section-heading"><h2 id="contact-title">CONTACTO</h2></div>
        <div className="contact-box"><div><p className="contact-kicker">EL SIGUIENTE PROYECTO</p><h3>¿Hablamos?</h3><p>Si querés conocer más sobre mis proyectos<br className="desktop-break" /> o ponerte en contacto, escribime.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a></div><div className="contact-actions"><a className="pixel-button primary" href={`mailto:${profile.email}`}><Heart />Enviar un email</a><button className="pixel-button" type="button" onClick={copyEmail}>Copiar email</button><p className="copy-feedback" role="status" aria-live="polite">{copied}</p></div></div>
        <div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span>[abrir]</span></a>{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span>[abrir]</span></a> : <span className="linkedin-pending">LinkedIn <span>[próximamente]</span></span>}<a href="#inicio" className="back-top">Volver al inicio <span aria-hidden="true">↑</span></a></div>
      </section>
    </main>
    <footer className="footer"><span>© 2026 Maximiliano Koch</span><span>HECHO CON CÓDIGO Y DETERMINACIÓN.</span><Heart /></footer>
  </>;
}
