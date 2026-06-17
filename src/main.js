import './style.css'
import profile from './assets/profile.jpeg'

document.querySelector('#app').innerHTML = `
<nav class="navbar">
  <div class="logo">Susmida K</div>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<section class="hero">
  <img src="${profile}" alt="Profile" class="profile-img">

  <h1>Hi, I'm Susmida K</h1>
  <h2>Software Engineer</h2>

  <p>
    Passionate about Java, Python, SQL,
    Web Development and Data Analytics.
  </p>
  <div class="btn-group">
  <a href="/SUSMIDA_RESUME.pdf" target="_blank" class="SUSMIDA_RESUME-btn">
    View Resume
  </a>

  <a href="/SUSMIDA_RESUME.pdf" download class="SUSMIDA_RESUME-btn">
    Download Resume
  </a>
</div>
</section>

<section id="about">
  <h2>About Me</h2>
  <p>
    I am a Software Engineer interested in building modern
    web applications and data-driven solutions.
  </p>
</section>

<section id="skills">
  <h2>Skills</h2>
  <div class="cards">
    <div class="card">Java</div>
    <div class="card">Python</div>
    <div class="card">SQL</div>
    <div class="card">JavaScript</div>
    <div class="card">Power BI</div>
    <div class="card">MySQL</div>
  </div>
</section>
<section id="projects">
    <h2>Projects</h2>

    <div class="cards">
         <div class="card">
        <h3>Mini Web Applications</h3>
        <p>
        Created beginner-friendly web applications using HTML, CSS, and JavaScript
        </p>

        <a href="https://susmidakathir-max.github.io/responsive-landing-page/" target="_blank">
        View Live Project
        </a>
        </div>

        <div class="card">
            <h3>Sales AI Dashboard</h3>
            <p>
                Developed an AI-powered sales analytics dashboard using modern web technologies.
                Features include interactive charts, sales performance tracking, and business insights.
            </p>
            <a href="https://github.com/susmidakathir-max/sales-ai-dashboard"
               target="_blank"
               class="project-link">
               View Project →
            </a>
        </div>

        <div class="card">
            <h3>Personal Portfolio Website</h3>
            <p>
                Designed and developed a responsive portfolio website to showcase my projects,
                technical skills, resume, and contact information.
            </p>
            <a href="https://portfolio-umber-delta-63.vercel.app/"
               target="_blank"
               class="project-link">
               View Project →
            </a>
        </div>

      
    </div>
</section>
<section id="contact">
  <h2>Contact</h2>
  <p>Email: susmidakathir@gmail.com</p>
  <p>Contact no +918681889600</p>
</section>
`