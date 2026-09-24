// All of the site's content lives here. Edit this file to update the page;
// the components only decide how things look.

export const NAME = 'Annie Chakraborty'
export const HANDLE = '~/annie'

export const TYPING_STRINGS = [
  'MSc Computer Science',
  'LLMs & Neuro-Symbolic AI',
  'Agentic AI & RAG',
  'Full-Stack Developer',
]

export const HERO_INTRO =
  'MSc Computer Science student at the University of Stuttgart, specialising in Autonomous Systems. I work on neuro-symbolic reasoning for LLMs, devising reward functions for training. My interests include agentic AI and RAG, and building full-stack web applications. I enjoy solving complex problems in collaborative teams.'

/** The fake terminal window in the hero: each entry is a command and the lines it prints. */
export const TERMINAL = [
  { cmd: 'cat', arg: 'interests.txt', output: ['llms, neuro_symbolic_reasoning,', 'agentic_ai, rag, reinforcement_learning', 'web_dev, web_design, '] },
  { cmd: 'echo', arg: '$THESIS', output: ['proof-guided neuro-symbolic reasoning for LLMs'] },
]

export const ABOUT_PARAGRAPHS = [
  "I'm a master's student in Computer Science at the University of Stuttgart, specialising in Autonomous Systems with coursework in Machine Learning, Deep Learning, GenAI, Computer Vision, Reinforcement Learning and Information Visualisation.",
  "My master thesis, Proof-Guided Neuro-Symbolic Reasoning for Large Language Models, uses OWL 2 RL rules together with Supervised Finetuning (SFT) and Reinforcement Learning with Verifiable Rewards (RLVR) to make LLM reasoning more correct and faithful.",
  'Alongside my studies I have worked at Mercedes-Benz Tech Innovation, Daimler Truck and Fraunhofer IAO in Stuttgart as a work student in different projects. Before my master\'s, I was a Software Engineer at Spring and River in Kolkata and a Technology Consultant at PwC India in Bengaluru.',
  'I enjoy solving complex problems and do my best work in collaborative teams. I speak English fluently (C2) and a little German (A2).',
]

// ─── Work ────────────────────────────────────────────────────────────────────

export type Job = {
  period: string
  role: string
  company: string
  location: string
  points: string[]
  tags: string[]
}

export const WORK: Job[] = [
  {
    period: 'Jun 2025 – Sep 2025',
    role: 'Work Student',
    company: 'Mercedes-Benz Tech Innovation',
    location: 'Stuttgart, Germany',
    points: [
      'Developed frontend features for quality assurance (QA) of navigation systems',
      'Implemented backend logic for new QA metrics',
      'Implemented Pydantic test cases to evaluate LLMs on structured outputs for single- and multi-turn conversations',
    ],
    tags: ['Angular', 'Go', 'MongoDB', 'Pydantic', 'Azure DevOps', 'LLMs'],
  },
  {
    period: 'Sep 2024 – Feb 2025',
    role: 'Work Student, PMO Support',
    company: 'Daimler Truck AG',
    location: 'Stuttgart, Germany',
    points: [
      'Standardised the on/off-boarding pipeline by creating a central tracking dashboard for internal stakeholders',
      'Implemented protocols to streamline user access and privileges, ensuring data safety',
      'Created standardised blueprints for project documentation to address pain points in the existing process',
    ],
    tags: ['Microsoft Excel', 'Microsoft Power Point', 'SharePoint', 'Confluence', 'Jira'],
  },
  {
    period: 'Jul 2024 – Mar 2025',
    role: 'Student Research Assistant',
    company: 'Fraunhofer IAO',
    location: 'Stuttgart, Germany',
    points: [
      'Implemented a proof of concept for secure communication using Spring Boot, Apache Kafka and Docker',
      'Researched and evaluated standard text-to-speech implementations for React Native applications',
      'Researched new technologies for optimising frontend design for mobile and web applications',
    ],
    tags: ['Spring Boot', 'Apache Kafka', 'Docker', 'React Native'],
  },
  {
    period: 'Feb 2023 – Mar 2024',
    role: 'Software Engineer',
    company: 'Spring and River',
    location: 'Kolkata, India',
    points: [
      "Developed the company's flagship product using Angular, Python Flask, REST APIs and Material UI",
      'Led development of an e-commerce application for booksellers in ReactJS, and its companion mobile app in React Native',
      'Built a dashboard in Angular and Flask for a private electricity company in West Bengal to better identify consumer complaints',
    ],
    tags: ['Angular', 'Flask', 'React', 'React Native', 'REST APIs', 'MongoDB', 'Material UI', 'Bootstrap'],
  },
  {
    period: 'Aug 2021 – Feb 2023',
    role: 'Technology Consultant',
    company: 'PwC India',
    location: 'Bengaluru, India',
    points: [
      'Implemented custom Microsoft Dynamics 365 Finance & Operations solutions for tax, accounting, sales and other modules',
      'Optimised the creation of custom sales reports, invoices and billing information, reducing manual effort by 80%',
      'Implemented the Sales module and a custom Laytime Calculation module for a Fortune 500 company',
      'Trained new hires and interns, and streamlined collaboration and code maintenance within the team',
    ],
    tags: ['Dynamics 365 F&O', 'X++', 'SSRS'],
  },
]

// ─── Education & achievements ────────────────────────────────────────────────

export type LinkItem = { label: string; href: string }

/**
 * `links` is optional. For a PDF, put the file in public/certificates/ and use
 * { label: 'Certificate', href: '/certificates/file-name.pdf' }; for a badge, use its full URL.
 */
export type TimelineEntry = { year: string; role: string; place: string; note: string; links?: LinkItem[] }

export const EDUCATION: TimelineEntry[] = [
  {
    year: '2024 – now',
    role: 'MSc Computer Science',
    place: 'University of Stuttgart',
    note: 'Autonomous Systems · Grade 1.6 · Thesis: Proof-Guided Neuro-Symbolic Reasoning for LLMs',
  },
  {
    year: '2018 – 2021',
    role: 'BSc Computer Science',
    place: "St. Xavier's College, Kolkata",
    note: 'Grade 1.9 · Dissertation: a new cryptographic algorithm for small texts, passwords and OTPs',
  },
]

export const ACHIEVEMENTS: TimelineEntry[] = [
  {
    year: '2024 – 2025',
    role: 'Femtec Scholarship, Class 46',
    place: 'Femtec',
    note: 'One of 55 scholarship holders across the TU9 universities, in a career-building programme for women in STEM',
    links: [
    { label: 'Certificate', href: '/certificates/Chakraborty_Annie_Certificate.pdf' },
  ],
  },
  {
    year: '2025',
    role: 'Femtec Innovation Lab',
    place: 'E.ON',
    note: 'Collaborative research project on sustainability and affordability in energy systems',
  },
  {
    year: '2025',
    role: 'e-fellows Online Stipendium',
    place: 'e-fellows.net',
    note: 'Awarded to students performing in the top 10% of the academic year',
    links: [
      { label: 'Certificate', href: '/certificates/e_fellows.pdf' },
    ],
  },
  {
    year: '2025',
    role: '5-Day Gen AI Intensive',
    place: 'Certification',
    note: 'LLMs, RAG and Gemini',
    links: [
      { label: 'Certificate', href: 'https://www.kaggle.com/certification/badges/anniechakraborty/96' },
    ],
  },
  {
    year: '2018 – 2020',
    role: 'Fr. Lafont Scholarship',
    place: "St. Xavier's College, Kolkata",
    note: 'Awarded for academic performance in the 2018–19 and 2019–20 sessions',
  },
]

// ─── Projects ────────────────────────────────────────────────────────────────

export type Project = {
  id: string
  title: string
  period: string
  desc: string
  longDesc: string
  tags: string[]
  links: LinkItem[]
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Proof-Guided Neuro-Symbolic Reasoning for LLMs',
    period: '12/2025 – now',
    desc: 'My master thesis: a pipeline to improve symbolic reasoning in LLMs using OWL 2 RL rules.',
    longDesc:
      'Implemented QA baselines with binary questions and multiple-choice questions (with generated distractors) to evaluate model reasoning. Developed a two-stage training process, Supervised Fine-tuning(SFT) followed by Reinforcement Learning with Verifiable Rewards (RLVR), to safely update model parameters and improve reasoning correctness and faithfulness. Evaluated models on their direct entailment generation capabilities with intermediary proof traces.',
    tags: ['LLMs', 'Symbolic Reasoning', 'OWL/RDF', 'SFT', 'RLVR'],
    links: [{ label: 'View the code (GitHub)', href: 'https://github.com/anniechakraborty/proof_guided_reasoning_for_llms' }],
  },
  {
    id: '02',
    title: 'STARTARCH',
    period: '06/2026',
    desc: 'Hackathon project: a multi-agent AI platform that turns research papers into commercialisation opportunities.',
    longDesc:
      'Produces market assessments and investor-style venture recommendations from academic papers. Fine-tuned a Pioneer GLiNER2 model on synthetic data to classify commercialisation bottlenecks, and used Gemini and Tavily for competitor analysis, market sizing, funding research, regulatory assessment and partnership discovery. Parallel agent execution cut workflow latency.',
    tags: ['Agentic AI', 'Gemini', 'Tavily', 'Flask', 'React'],
    links: [{ label: 'View the code (GitHub)', href: 'https://github.com/tuanady/Tech-AI-Hackhatlon' }],
  },
  {
    id: '03',
    title: 'LiverLLM',
    period: '04/2025 – 07/2025',
    desc: 'An end-to-end continual learning pipeline fine-tuning Llama-3-8B on liver disease and liver cancer research.',
    longDesc:
      'Curated datasets from liver cancer research publications and targeted QA pairs for liver diseases, then addressed the static knowledge limits of LLMs through domain adaptation and retrieval-augmented generation (RAG).',
    tags: ['LLMs', 'Continual Learning', 'Fine-Tuning', 'RAG'],
    links: [{ label: 'View the code (GitHub)', href: 'https://github.com/Rajarshi20/Liver-LLM' }],
  },
  {
    id: '04',
    title: 'AI Job Application Assistant',
    period: '04/2025 – 07/2025',
    desc: 'A web app that uses LLMs to tailor CVs and cover letters to a job description.',
    longDesc:
      'Scrapes and processes job postings, reads the user\'s documents (CVs, cover letters), and uses LLMs to customise them to align with the job description, streamlining the application process end to end.',
    tags: ['LLMs', 'Groq', 'Web Scraping', 'Flask', 'React'],
    links: [
      { label: 'View the app', href: 'https://jobhuntct.netlify.app/' },
      { label: 'View the code (GitHub)', href: 'https://github.com/raihhann/Job_Hunter_VERCEL_EVENT' },
    ],
  },
  {
    id: '05',
    title: 'Kanban Board',
    period: '01/2025 – 02/2025',
    desc: 'A full-stack Kanban application with user authentication and CRUD operations.',
    longDesc:
      'This is an Angular-based Kanban Board application that allows users to create, manage, and track tasks. The application uses Reactive Forms for user input, integrates API data for task retrieval and updates, implements user authentication and authorization, and route protection using authGuard. The backend of this application is written using Python\'s Flask framework, and the database is implemented using MongoDB. We have used RestAPIs to implement all the CRUD operations.',
    tags: ['Angular', 'Flask', 'MongoDB', 'REST APIs'],
    links: [
      { label: 'View the frontend (GitHub)', href: 'https://github.com/anniechakraborty/simpleKanbanBoard' },
      { label: 'View the backend (GitHub)', href: 'https://github.com/anniechakraborty/simpleKanbanBackend' },
    ],
  },
  {
    id: '06',
    title: 'Monolithic Cloud Architecture',
    period: '02/2025',
    desc: 'A low-cost, cloud-native AWS architecture for a growing e-commerce business.',
    longDesc:
      'Implemented an AWS hosting stack with EC2, RDS (MySQL), S3, CloudFront and Route 53, with auto-scaling and CDN support, and integrated WordPress and WooCommerce while justifying the trade-offs in consistency, security and scalability. Written for the Service Management and Cloud Computing course at the University of Stuttgart.',
    tags: ['AWS', 'Cloud Architecture'],
    links: [
      {
        label: 'Project report',
        href: 'https://medium.com/@annie.chakraborty/implementing-a-monolithic-cloud-architecture-1e9e48e4b47e',
      },
    ],
  },
  {
    id: '07',
    title: 'LLM-based Planning',
    period: '11/2024 – 02/2025',
    desc: 'A seminar paper on how Large Language Models can be used in plan generation and evaluation.',
    longDesc:
      'Examines planning problems in detail, the existing algorithms and their drawbacks, and how LLMs and prompting frameworks could be used to address those drawbacks.',
    tags: ['LLMs', 'Planning', 'Prompting'],
    links: [{ label: 'Read the paper', href: 'https://drive.google.com/file/d/1oNrQxqtCTMqyNS9Va1GQji1zqnzJ7EXR/view?usp=sharing'}],
  },
  {
    id: '08',
    title: 'Personal Website',
    period: '04/2025 · redesigned 09/2026',
    desc: 'This website: a React frontend with a Flask backend that pulls in my latest Medium posts.',
    longDesc:
      'Rebuilt with React, Vite, TypeScript and Tailwind CSS. A small Flask backend hosted on Render fetches my Medium feed, and the frontend is hosted on Netlify.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Flask'],
    links: [
      { label: 'View the frontend (GitHub)', href: 'https://github.com/anniechakraborty/anniechakraborty.github.io' },
      { label: 'View the backend (GitHub)', href: 'https://github.com/anniechakraborty/PersonalWebsiteBackend' },
    ],
  },
  {
    id: '09',
    title: 'Book Quest',
    period: '06/2024 – 07/2024',
    desc: "Book discovery using MongoDB's full-text search, benchmarked against PostgreSQL.",
    longDesc:
      "Aims to streamline book discovery by leveraging MongoDB's Full-Text Search, then compares it with PostgreSQL on query execution efficiency and the complexity of searches each supports.",
    tags: ['Python', 'XML', 'XSLT', 'MongoDB', 'PostgreSQL'],
    links: [{ label: 'View the code (GitHub)', href: 'https://github.com/anniechakraborty/BookQuest' }],
  },
  {
    id: '10',
    title: 'NBPLEA v2',
    period: '08/2020 – 04/2021',
    desc: 'New Bit Level Positional Encryption Algorithm, developed for my bachelor thesis.',
    longDesc:
      'A new cryptographic algorithm, written in Java, that encrypts and decrypts text files. Spectral analysis showed the process is resistant to standard cryptographic attacks: brute force, known plaintext and differential attacks.',
    tags: ['Java', 'Cryptography'],
    links: [{ label: 'Read the paper', href: 'https://ijsrcseit.com/paper/CSEIT217350.pdf' }],
  },
]

// ─── Skills ──────────────────────────────────────────────────────────────────

export type Skill = { name: string; learnedAt?: string }
export type SkillCategory = { category: string; items: Skill[] }

export const SKILLS: SkillCategory[] = [
  {
    category: 'AI / Machine Learning',
    items: [
      { name: 'LLMs', learnedAt: 'Master thesis · LiverLLM · Mercedes-Benz (LLM evaluation)' },
      { name: 'SFT', learnedAt: 'Master thesis · LiverLLM' },
      { name: 'GRPO', learnedAt: 'Master thesis' },
      { name: 'RLHF', learnedAt: 'Master thesis' },
      { name: 'RLVR', learnedAt: 'Master thesis' },
      { name: 'Knowledge Graphs', learnedAt: 'Master thesis' },
      { name: 'Ontologies', learnedAt: 'Master thesis' },
      { name: 'RAG', learnedAt: 'LiverLLM · 5-Day Gen AI Intensive' },
      { name: 'Agentic AI', learnedAt: 'STARTARCH hackathon' },
      { name: 'Multi-Agent Systems', learnedAt: 'STARTARCH hackathon' },
      { name: 'Continual Learning', learnedAt: 'LiverLLM' },
      { name: 'Prompt Engineering', learnedAt: 'LLM-based Planning seminar' },
      { name: 'LangChain', learnedAt: 'STARTARCH hackathon' },
      { name: 'Vector Databases', learnedAt: 'LiverLLM · 5-Day Gen AI Intensive' },
      { name: 'PyTorch', learnedAt: 'LiverLLM · Master thesis' },
      { name: 'Scikit-learn', learnedAt: 'MSc (University of Stuttgart)' },
    ],
  },
  {
    category: 'Languages & Frameworks',
    items: [
      { name: 'Python', learnedAt: 'Master thesis · LiverLLM · Flask projects' },
      { name: 'Angular', learnedAt: 'Mercedes-Benz · Spring and River · Kanban Board' },
      { name: 'ReactJS', learnedAt: 'Spring and River · STARTARCH · this website' },
      { name: 'React Native', learnedAt: 'Spring and River · Fraunhofer IAO' },
      { name: 'Flask', learnedAt: 'Spring and River · Kanban Board · this website' },
      { name: 'Go', learnedAt: 'Mercedes-Benz' },
      { name: 'Streamlit', learnedAt: 'LiverLLM · Mercedes-Benz' },
      { name: 'HTML/CSS', learnedAt: 'almost all my projects (hard to put a date)' },
      { name: 'JavaScript', learnedAt: 'almost all my projects (hard to put a date)' },
      { name: 'REST APIs', learnedAt: 'Spring and River · Kanban Board' },
      { name: 'Bootstrap', learnedAt: 'Spring and River · Kanban Board' },
      { name: 'SQL', learnedAt: 'Spring and River · PwC · Book Quest (PostgreSQL)' },
      { name: 'MongoDB', learnedAt: 'Spring and River · Mercedes-Benz · Kanban Board · Book Quest' },
      { name: 'SPARQL', learnedAt: 'Master thesis' },
      { name: 'RDF', learnedAt: 'Master thesis' },
      { name: 'OWL', learnedAt: 'Master thesis' },
    ],
  },
  {
    category: 'Tools',
    items: [{ name: 'Git', learnedAt: 'all my projects (hard to put a date)' }, { name: 'Linux', learnedAt: 'BSc (St. Xavier\'s College)' }, { name: 'NumPy', learnedAt: 'MSc (University of Stuttgart)' }, { name: 'Pandas', learnedAt: 'MSc (University of Stuttgart)' }, { name: 'RDFox', learnedAt: 'Master thesis' }],
  },
]

// ─── Writing & contact ───────────────────────────────────────────────────────

/** Served from public/resume.pdf — replace that file to update the resume. */
export const RESUME_URL = '/resume.pdf'

export const MEDIUM_API = 'https://personalwebsitebackend-1772.onrender.com/api/medium-posts'
export const MEDIUM_PROFILE = 'https://medium.com/@annie.chakraborty'

export const CONTACT_INTRO =
  'If you like my work, get in touch by email or LinkedIn. You can find more of my work on GitHub and on my blog.'

export const CONTACT_LINKS = [
  { label: 'Email', value: 'chakrabortyannie20@gmail.com', href: 'mailto:chakrabortyannie20@gmail.com' },
  { label: 'LinkedIn', value: 'in/annie-chakraborty', href: 'https://www.linkedin.com/in/annie-chakraborty/' },
  { label: 'GitHub', value: 'anniechakraborty', href: 'https://github.com/anniechakraborty' },
  { label: 'Blog', value: '@annie.chakraborty', href: MEDIUM_PROFILE },
  { label: 'Book reviews', value: '@tinybookishreviews', href: 'https://www.instagram.com/tinybookishreviews/' },
]
