import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Database, Cloud, MailCheck, Rocket, Code2, GitBranch,
  Layers3, Terminal, Cpu, Globe, Zap, ExternalLink, MapPin, Download
} from 'lucide-react';
import './styles.css';

const GITHUB = 'https://github.com/Muneeswaranm2003';
const projects = [
  {
    number: '01', icon: Cloud, category: 'CLOUD AUTOMATION',
    title: 'AWS SES Bounce & Complaint Management',
    description: 'Handles bounce and complaint events from Amazon SES to give clear visibility into sending outcomes and support day-to-day email operations.',
    tags: ['AWS SES', 'SNS', 'Lambda'],
    link: `${GITHUB}?tab=repositories`, accent: 'purple'
  },
  {
    number: '02', icon: MailCheck, category: 'EMAIL INTELLIGENCE',
    title: 'Email Validation & Data Pipeline',
    description: 'A Python validation workflow with multiple stages: SMTP checks, domain validation, catch-all detection, risk scoring and reuse of recent verification results.',
    tags: ['Python', 'SMTP', 'PostgreSQL'],
    link: `${GITHUB}?tab=repositories`, accent: 'orange'
  },
  {
    number: '03', icon: Layers3, category: 'EMAIL INFRASTRUCTURE',
    title: 'Email Marketing Infrastructure',
    description: 'Architecture for queued sending, subdomain and IP strategy, SES integration and SNS event collection, with reporting for deliverability.',
    tags: ['Redis', 'BullMQ', 'AWS SES'],
    link: `${GITHUB}?tab=repositories`, accent: 'blue'
  }
];

const services = [
  [Database, 'orange-bg', 'Data Solutions', 'Data processing, pipeline development, validation workflows and analytics support.'],
  [Cloud, 'purple-bg', 'Cloud Solutions', 'Cloud setup and infrastructure support with an emphasis on AWS.'],
  [MailCheck, 'blue-bg', 'Email Solutions', 'Email infrastructure setup, validation, deliverability optimization and marketing tool configuration.'],
  [Mail, 'orange-bg', 'Deliverability', 'SPF, DKIM and DMARC guidance, IP warm-up planning, bounce and complaint monitoring.']
];

const experience = [
  ['Founder-led', 'GoAurex / MailVerifyPro', 'Founder / Builder', 'Building GoAurex, a technology services brand for data, cloud and email solutions, and MailVerifyPro, its email validation platform.'],
  ['Current', 'Ultraship', 'Email Infrastructure / Software Implementation Engineer', 'Software implementation alongside email infrastructure work: email delivery performance, validation status, bounce and suppression issues, and deliverability troubleshooting.'],
  ['Jun 2025 — Nov 2025', 'Regami Solutions', 'Junior Executive, SBD / Email Marketing Specialist', 'Email marketing operations and campaign execution, with a focus on infrastructure and deliverability troubleshooting.'],
  ['Jun 2024 — Jan 2025', 'Klodev', 'Junior Data Engineer', 'Data pipelines, email analytics, and data processing and operational analysis workflows.'],
  ['May 2023 — May 2024', 'Infynd', 'Junior Data Engineer Intern', 'Email-generation patterns and email validation tasks, with hands-on exposure to data quality.']
];

const logo = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;
const stack = [
  ['Python', [['python', '5FA8E8']]],
  ['SQL / PostgreSQL', [['postgresql', '6FA0E8']]],
  ['AWS (SES, S3, Lambda)', null],
  ['Docker', [['docker', '2496ED']]],
  ['Terraform', [['terraform', 'A77BFF']]],
  ['Kafka / PySpark', [['apachekafka', 'FFFFFF'], ['apachespark', 'FF8A31']]],
  ['Redis / BullMQ', [['redis', 'FF5A4A']]],
  ['React / Vite', [['react', '61DAFB'], ['vite', 'A78BFA']]],
  ['Linux', [['linux', 'FCC624']]],
  ['n8n / Selenium', [['n8n', 'FF6D5A'], ['selenium', '5FD068']]]
];

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function HeroVisual() {
  return (
    <div className="visual-wrap" aria-label="Decorative 3D-style developer illustration">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <motion.div className="float-chip chip-aws" animate={{ y: [0, -10, 0], rotate: [-3, 2, -3] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <span className="chip-symbol aws-mark">aws</span><small>CLOUD</small>
      </motion.div>
      <motion.div className="float-chip chip-mail" animate={{ y: [0, 9, 0], rotate: [3, -2, 3] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
        <Mail size={24} /><small>EMAIL</small>
      </motion.div>
      <motion.div className="float-chip chip-data" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <Database size={25} /><small>DATA</small>
      </motion.div>
      <motion.div className="laptop-scene" animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="laptop-screen">
          <div className="screen-top"><span /><span /><span /><b>muneeswaran.dev</b></div>
          <div className="code-lines">
            <p><i>01</i> <span className="code-purple">const</span> engineer = {'{'}</p>
            <p><i>02</i> &nbsp; focus: <span className="code-orange">'data'</span>,</p>
            <p><i>03</i> &nbsp; cloud: <span className="code-green">true</span>,</p>
            <p><i>04</i> &nbsp; email: <span className="code-green">'reliable'</span></p>
            <p><i>05</i> {'}'}</p>
            <p className="code-cursor"><i>06</i> <span>▍</span></p>
          </div>
        </div>
        <div className="laptop-base"><div /></div>
        <div className="laptop-glow" />
      </motion.div>
      <div className="visual-caption"><span className="status-dot" /> BUILDING SYSTEMS THAT SCALE <ArrowUpRight size={14} /></div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['Services', '#services'], ['Projects', '#projects'], ['Experience', '#experience'], ['Stack', '#stack'], ['Contact', '#contact']];
  return <header className="header">
    <a className="brand" href="#home"><span className="brand-mark">M</span><span>MUNEESWARAN<small>.DEV</small></span></a>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15} /></a>
    </nav>
  </header>;
}

function App() {
  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <Header />
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <Reveal><div className="eyebrow"><span className="eyebrow-dot" /> MUNEESWARAN M — EMAIL, DATA, CLOUD</div></Reveal>
          <Reveal delay={0.08}><h1>Data, cloud &amp;<br />email systems that <span className="gradient-text">deliver</span><span className="orange">.</span></h1></Reveal>
          <Reveal delay={0.16}><p className="hero-description">Data Engineer | AWS Cloud | Email Infrastructure &amp; Deliverability. I build practical pipelines, automation and email systems, and I run GoAurex.</p></Reveal>
          <Reveal delay={0.23}><div className="hero-tags"><span><Database size={14} /> Data Engineering</span><span><Cloud size={14} /> AWS Cloud</span><span><MailCheck size={14} /> Email Infrastructure</span></div></Reveal>
          <Reveal delay={0.3}><div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowRight size={17} /></a><a className="button button-secondary" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile <ArrowUpRight size={15} /></a></div></Reveal>
          <Reveal delay={0.38}><div className="hero-note"><span className="status-dot" /> Open to opportunities <span className="note-divider">/</span> India <MapPin size={13} /></div></Reveal>
        </div>
        <Reveal delay={0.2} className="hero-art"><HeroVisual /></Reveal>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
      </section>

      <section className="metrics section-wrap" aria-label="Profile highlights">
        <div className="metric"><span className="metric-icon"><Rocket /></span><div><strong>2023<span>+</span></strong><small>Hands-on in data and email</small></div></div>
        <div className="metric"><span className="metric-icon"><Cloud /></span><div><strong>AWS<span>.</span></strong><small>SES, S3, Lambda, Glue, Redshift</small></div></div>
        <div className="metric"><span className="metric-icon"><MailCheck /></span><div><strong>SPF<span>/</span>DKIM<span>/</span>DMARC</strong><small>Authentication and deliverability</small></div></div>
        <div className="metric"><span className="metric-icon"><Zap /></span><div><strong>4<span>+</span></strong><small>Roles across data and email</small></div></div>
      </section>

      <section className="section-wrap about-section section-block" id="about">
        <Reveal><div className="section-label">01 / ABOUT ME</div><h2>Engineer by mindset.<br /><span className="muted-heading">Builder by habit.</span></h2></Reveal>
        <div className="about-grid">
          <Reveal className="about-main"><p className="large-copy">Data engineer with a B.E. in Computer Science, working across data pipelines, AWS and email infrastructure.</p><p className="body-copy">I combine email marketing operations with email validation and infrastructure knowledge. I care about clean data, bounce and complaint monitoring, and sender reputation, and I like practical implementation, automation and troubleshooting. Based in India.</p><a className="text-link" href={GITHUB} target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16} /></a></Reveal>
          <Reveal delay={0.12} className="about-cards">
            <div className="mini-card"><span className="mini-icon orange-bg"><Database /></span><div><h3>Data pipelines</h3><p>ETL, validation and analytics with Python, SQL, PySpark and Kafka.</p></div><ArrowUpRight className="mini-arrow" size={16} /></div>
            <div className="mini-card"><span className="mini-icon purple-bg"><Cloud /></span><div><h3>Cloud systems</h3><p>AWS, Docker, Terraform and Linux deployments.</p></div><ArrowUpRight className="mini-arrow" size={16} /></div>
            <div className="mini-card"><span className="mini-icon blue-bg"><MailCheck /></span><div><h3>Email engineering</h3><p>Validation, SES events, SPF/DKIM/DMARC and warm-up.</p></div><ArrowUpRight className="mini-arrow" size={16} /></div>
          </Reveal>
        </div>
      </section>

      <section className="section-wrap section-block" id="stack">
        <Reveal><div className="section-label">02 / TOOLKIT</div><div className="section-heading-row"><h2>Tools of the <span className="gradient-text">trade.</span></h2><p>Technologies I work with and continue to explore.</p></div></Reveal>
        <div className="stack-grid">{stack.map(([name, logos], i) => <Reveal key={name} delay={i * 0.035}><div className="stack-card"><span className={`stack-glyph glyph-${i}`}>{logos ? logos.map(([slug, color]) => <img key={slug} src={logo(slug, color)} alt="" width="18" height="18" loading="lazy" />) : <b className="aws-text">aws</b>}</span><span>{name}</span><ArrowUpRight size={13} className="stack-arrow" /></div></Reveal>)}</div>
      </section>

      <section className="section-wrap section-block" id="services">
        <Reveal><div className="section-label">03 / GOAUREX &amp; MAILVERIFYPRO</div><div className="section-heading-row"><h2>Services &amp; <span className="gradient-text">products.</span></h2><a className="text-link" href="https://goaurex.com" target="_blank" rel="noreferrer">goaurex.com <ArrowUpRight size={16} /></a></div><p className="section-intro">GoAurex helps teams build reliable data workflows, cloud infrastructure and email systems through practical engineering and automation. MailVerifyPro is its dedicated email validation platform: upload a CSV or TXT list, get addresses classified as valid, invalid or risky, and download the results.</p></Reveal>
        <div className="about-cards">{services.map(([Icon, bg, title, text], i) => <Reveal key={title} delay={i * 0.06}><div className="mini-card"><span className={`mini-icon ${bg}`}><Icon /></span><div><h3>{title}</h3><p>{text}</p></div></div></Reveal>)}
          <Reveal delay={0.25}><a className="mini-card" href="https://mailverify.pro" target="_blank" rel="noreferrer"><span className="mini-icon purple-bg"><MailCheck /></span><div><h3>MailVerifyPro</h3><p>Email list validation for marketing teams, at mailverify.pro.</p></div><ArrowUpRight className="mini-arrow" size={16} /></a></Reveal></div>
      </section>

      <section className="section-wrap section-block" id="projects">
        <Reveal><div className="section-label">04 / SELECTED WORK</div><div className="section-heading-row"><h2>Projects with <span className="gradient-text">purpose.</span></h2><a className="text-link" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={16} /></a></div><p className="section-intro">Technical work in email and data systems. Open my GitHub for current code and status.</p></Reveal>
        <div className="projects-grid">{projects.map((project, i) => {
          const Icon = project.icon;
          return <Reveal key={project.number} delay={i * 0.1}><article className={`project-card ${project.accent}`}>
            <div className="project-top"><span className="project-number">{project.number} / 03</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repositories`}><ArrowUpRight size={19} /></a></div>
            <div className="project-icon"><Icon size={24} /></div><div className="project-category">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p>
            <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Explore repository <ArrowRight size={15} /></a>
          </article></Reveal>;
        })}</div>
      </section>

      <section className="section-wrap section-block" id="experience">
        <Reveal><div className="section-label">05 / THE JOURNEY</div><div className="section-heading-row"><h2>Experience & <span className="gradient-text">growth.</span></h2><p>Data, email and cloud roles.</p></div></Reveal>
        <div className="timeline">
          {experience.map(([date, company, role, desc], i) => <Reveal key={company} delay={i * 0.08}><div className="timeline-item"><div className="timeline-date">{date}</div><div className="timeline-dot" /><div className="timeline-content"><div><h3>{company}</h3><span>{role}</span></div><p>{desc}</p></div></div></Reveal>)}
        </div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <Reveal><div className="contact-card"><div className="contact-orb" /><div className="section-label">06 / NEXT UP</div><h2>Have a good problem?<br /><span className="gradient-text">Let's build a solution.</span></h2><p>Data engineering, AWS, email infrastructure, deliverability or GoAurex services: I'd be glad to connect.</p><div className="contact-actions"><a className="button button-primary" href="mailto:muneeswaran@goaurex.com">Get in touch <ArrowUpRight size={17} /></a><a className="button button-secondary" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> Follow my work</a></div></div></Reveal>
      </section>
    </main>
    <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">M</span><span>MUNEESWARAN<small>.DEV</small></span></a><span>Designed with curiosity. Built with intent.</span><div className="socials"><a href={GITHUB} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17} /></a><a href="https://www.linkedin.com/in/muneeswaran-m-0aa120203/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17} /></a><a href="mailto:muneeswaran@goaurex.com" aria-label="Email"><Mail size={17} /></a></div><a className="back-top" href="#home">Back to top ↑</a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);