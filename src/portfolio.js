const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'index.html',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vyom Ranjan',
  role: 'Frontend Engineer',
  description:
    'As a web developer, I bring a strong foundation in web technologies and a passion for innovation. With exceptional problem-solving skills and a keen eye for detail, I excel in managing complex tasks andprioritizing effectively. I communicate ideas clearly, collaborate seamlessly, and am committed to continuous learning. I embrace challenges with enthusiasm, making me well-prepared to thrive in a dynamic work environment.',
  resume: 'https://drive.google.com/file/d/1GTI7b2OcnQmSJ-BUB6t6ck4iLDi02dJo/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/vyom-ranjan-b25638201/',
    github: 'https://github.com/VYOM-RANJAN',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Youtube-Clone',
    description:
      'Developed a captivating YouTube clone ensuring responsiveness. Integrated real-world API for dynamic video playback and functionality. Demonstrated proficiency in front-end, delivering a high-quality user experience and replicating key features of the original platform.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Weather App',
    description:
      'To predict the conditions of the atmosphere for a given location and time. Seamlessly integrated with an external RAPID API, showcasing strong teamwork and expertise in RAPID API integration.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'E-commerce website',
    description:
      'Developed a captivating e-commerce website ensuring responsiveness.Seamlessly integrated with an external RAPID API, showcasing strong teamwork and expertise in RAPID API integration.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'C',
  'C++',
  'Python',
  'SQL',
  'Bootstrap',
  'VS code',
  'Git',
  'Time Management',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ranjanvyom2019@mail.com',
}

export { header, about, projects, skills, contact }
