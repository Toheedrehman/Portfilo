// import { useState } from "react";
// import Cards from "./components/card";
// import LifeCycle from "./components/Life_cycle";
// import App_layout from "./components/New_card";
// import App_card from "./components/New_cards";
// import New_method from "./components/class_components";

// function App() {
//   const name='Toheed';
//   return (
//     <div>
//   <App_layout tittle="New">
//     <h1>New gropu</h1>
//     <App_card/>
  
//   </App_layout>
//   <h1>{name}</h1>
//   <New_method></New_method>

//     </div>
//   );
// }

// export default App;




import { useState } from "react";
import "./App.css";
import profilePhoto from "./pics/one.png";
import resumePdf from "./cv/resume.pdf";
import blogPdf from "./blog/ClassificationandDetectionofSkinLesionsThroughMachineLearningMethods (1).pdf";

/* ---------------------------------------------------------
   Replace everything in this data block with your own info.
--------------------------------------------------------- */
const PROFILE = {
  name: "Toheed Rehman",
  role: "Computer Engineer",
  tagline: "I build fast, reliable products for the web — from the interface down to the infrastructure.",
  photo: profilePhoto,
  email: "Toheedrehman775@gmail.com",
  phone: "+923368894775",
  github: "https://github.com/Toheedrehman",
  linkedin: "https://www.linkedin.com/in/toheed-rehman-68b5a3247/",
  resume: resumePdf,
  stack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
};

const ABOUT = `Hi, I'm Toheed Rehman, a Computer Science graduate from Iqra University and a Full-Stack Developer with a strong passion for Artificial Intelligence and Machine Learning.

I specialize in designing and developing scalable, high-performance web applications using modern technologies such as React, Next.js, Node.js, Python, and Azure Cloud. My expertise spans both frontend and backend development, enabling me to build complete end-to-end solutions.

Beyond software development, I have a strong research interest in Artificial Intelligence, particularly Deep Learning and Computer Vision. During my academic journey, I worked on AI research projects focused on computer vision and intelligent systems, strengthening my ability to solve real-world problems with machine learning.

I enjoy turning ideas into impactful digital products, continuously learning new technologies, and building innovative solutions that create meaningful value.`

const EXPERIENCE = [
  {
    id: 1,
    role: "Web Developer",
    company: "ARCH TECHNOLOGIES",
    location: "Remote",
    period: "1st Oct 2025 — 30th Nov 2025",
    detail:
      "Developed responsive web applications using React.js, Next.js, Node.js, and Tailwind CSS. Built RESTful APIs with Node.js and MongoDB, improving user navigation and application performance.",
  },

  {
    id: 2,
    role: "Full Stack Developer",
    company: "Stellar Solutions",
    location: "Remote",
    period: "Aug 2024 — June 2025",
    detail:
      "Led development on an e-commerce platform using React and Node.js. Integrated payment gateways, implemented server-side rendering with Next.js, and optimized database queries (PostgreSQL) to reduce page load times by ~30%.",
  },

  {
    id: 3,
    role: "Frontend Engineer",
    company: "Innovative Labs",
    location: "City, Country",
    period: "Aug 2023 — Feb 2024",
    detail:
      "Built reusable UI components and a design system in React and TypeScript. Improved accessibility and test coverage, introduced performance budgets and lowered bundle size through code-splitting and lazy loading.",
  },

  {
    id: 4,
    role: "Full Stack Developer",
    company: "Random Company",
    location: "Remote",
    period: "Jan 2024 — Dec 2024",
    detail:
      "Built end-to-end features using React, Node.js, and PostgreSQL. Implemented CI/CD workflows, improved load times and UX, and collaborated across design and backend teams to ship production-ready components.",
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "Real Chat",
    description:
      "A real-time chat application with user authentication, messaging, image sharing, and MongoDB integration.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    link: "https://real-chat-roan.vercel.app/",
  },
  {
    
  id: 2,
  title: "E-Commerce Website",
  description:
    "A modern e-commerce website built with React and Node.js.",
  tech: ["React", "Node.js", "PostgreSQL"],
  link: "https://e-commerce-website-phi-sage.vercel.app/",
},
  {
    id: 3,
    title: "Task Manager",
    description: "A task management app for organizing and tracking daily tasks.",
    tech: ["React.js ", "Node.js", "Express", "MongoDB","JWT","Vercel"],
    link: "https://task-flow-beige-ten.vercel.app/",
  },
  {
  id: 3,
  title: "Nova AI Chatbot",
  description: "An intelligent AI chatbot with a modern conversational interface, user authentication, chat history, and Gemini-powered AI responses.",
  tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Gemini AI", "Vercel"],
  link: "https://nova-chatboot.vercel.app/",
},
];

const SKILLS = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "C"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "React Native"] },
  { group: "Backend", items: ["Node.js", "Express", "GraphQL", "Prisma"] },
  { group: "Data & infra", items: ["PostgreSQL", "MongoDB", "Redis", "AWS"] },
];

/* ---------------------------------------------------------
   Component
--------------------------------------------------------- */
export default function Portfolio() {
  const [openProject, setOpenProject] = useState(null);
  
  const [toast, setToast] = useState({ show: false, text: "" });

  const showToast = (text, ms = 3500) => {
    setToast({ show: true, text });
    window.setTimeout(() => setToast({ show: false, text: "" }), ms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    // For now log to console and reset form — integrate backend or email service later
    console.log("Contact form submitted:", data);
    e.target.reset();
    showToast("Message sent — thanks, I will reply soon.");
  };

  return (
    <div className="pf">
      {/* Nav */}
      <header className="pf-nav">
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pf-hero">
        <div className="pf-hero-text">
          <p className="pf-eyebrow">From Concept to Code</p>
          <h1>{PROFILE.name}</h1>
          <p className="pf-role">{PROFILE.role}</p>
          <p className="pf-tagline">{PROFILE.tagline}</p>
          <div className="pf-stack">
            {PROFILE.stack.map((s) => (
              <span key={s} className="pf-chip">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="pf-hero-photo">
          <img src={PROFILE.photo} alt={PROFILE.name} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="pf-section">
        <p className="pf-eyebrow">About</p>
        <p className="pf-about-text">{ABOUT}</p>
      </section>

      {/* Experience — ledger timeline */}
      <section id="experience" className="pf-section">
        <p className="pf-eyebrow">Experience</p>
        <div className="pf-ledger">
          {EXPERIENCE.map((job, i) => (
            <div className="pf-ledger-row" key={job.id}>
              <div className="pf-ledger-spine">
                <span className="pf-ledger-dot" />
                {i !== EXPERIENCE.length - 1 && <span className="pf-ledger-line" />}
              </div>
              <div className="pf-ledger-content">
                <span className="pf-ledger-no">No. {String(job.id).padStart(3, "0")}</span>
                <h3>{job.role}</h3>
                <p className="pf-ledger-meta">
                  {job.company} · {job.location} · {job.period}
                </p>
                <p className="pf-ledger-detail">{job.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pf-section">
        <p className="pf-eyebrow">Featured projects</p>
        <div className="pf-project-grid">
          {PROJECTS.map((p) => {
            const isOpen = openProject === p.id;
            return (
              <div
                key={p.id}
                className={`pf-project-card ${isOpen ? "is-open" : ""}`}
                onClick={() => setOpenProject(isOpen ? null : p.id)}
              >
                <h3>{p.title}</h3>
                <p className="pf-project-desc">{p.description}</p>
                <div className="pf-project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="pf-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {isOpen && (
                  <a
                    href={p.link}
                    className="pf-project-link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills */}
      <section className="pf-section">
        <p className="pf-eyebrow">Skills and tools</p>
        <div className="pf-skills-grid">
          {SKILLS.map((s) => (
            <div key={s.group} className="pf-skill-group">
              <h4>{s.group}</h4>
              <p>{s.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pf-section pf-contact">
        <p className="pf-eyebrow">Get in Touch</p>
        <h2>Who wants to talk? Enter your details below.</h2>

        <div className="pf-contact-links">
          <a href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + PROFILE.email} target="_blank" rel="noreferrer">{PROFILE.email}</a>
          <a href={`https://wa.me/${PROFILE.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">{PROFILE.phone}</a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-field">
              <span className="label">Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>

            <label className="form-field">
              <span className="label">Mobile</span>
              <input name="mobile" type="tel" placeholder="+92 433 68894775" required />
            </label>
          </div>

          <label className="message-field">
            <span className="label">Message</span>
            <textarea name="message" rows={6} placeholder="Write your message here..." required />
          </label>

          <div className="form-actions">
            <button type="submit" className="btn-primary">Send Message</button>
          </div>
        </form>
      </section>

      {/* Footer */}
      {/* Toast notification */}
      <div className={`toast ${toast.show ? "is-visible" : ""}`} role="status" aria-live="polite">
        <div className="toast-body">{toast.text}</div>
        <button className="toast-close" onClick={() => setToast({ show: false, text: "" })} aria-label="Close">×</button>
      </div>
      <footer className="pf-footer">
        <div className="pf-footer-grid">
          <div className="pf-footer-col">
            <a className="footer-item" href="#about">
              <span className="footer-icon">🏠</span>
              <span className="footer-label">Home</span>
            </a>
            <a className="footer-item" href="#about">
              <span className="footer-icon">👤</span>
              <span className="footer-label">About</span>
            </a>
            <a className="footer-item" href="#projects">
              <span className="footer-icon">📁</span>
              <span className="footer-label">Projects</span>
            </a>
          </div>

          <div className="pf-footer-col">
            <a className="footer-item" href={blogPdf} target="_blank" rel="noreferrer">
              <span className="footer-icon">📖</span>
              <span className="footer-label">Blog</span>
            </a>
            <a className="footer-item" href="#contact">
              <span className="footer-icon">✉️</span>
              <span className="footer-label">Contact</span>
            </a>
            <a className="footer-item" href="#notes">
              <span className="footer-icon">📝</span>
              <span className="footer-label">Notes</span>
            </a>
          </div>

          <div className="pf-footer-col">
            <a className="footer-item" href={PROFILE.github} target="_blank" rel="noreferrer">
              <span className="footer-icon">🐱</span>
              <span className="footer-label">GitHub</span>
            </a>
            <a className="footer-item" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              <span className="footer-icon">💼</span>
              <span className="footer-label">LinkedIn</span>
            </a>
            <a className="footer-item" href={PROFILE.resume} target="_blank" rel="noreferrer">
              <span className="footer-icon">📄</span>
              <span className="footer-label">My CV</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
