export const site = {
  name: "Tech School",
  shortName: "TS",
  tagline: "Practical technology learning",
  description:
    "A small online learning community for people building practical skills in web development, data analysis, and cybersecurity.",
  communityUrl: "",
  adminWhatsAppNumber: "",
  email: "",
  instagramUrl: "",
  linkedinUrl: "",
};

export const courses = [
  {
    slug: "web-development",
    number: "01",
    label: "Web development",
    title: "Build for the web",
    shortDescription:
      "Learn how the web is put together, from semantic HTML and CSS to interactive JavaScript and a first React interface.",
    description:
      "This track gives you a clear route from web fundamentals to building and publishing useful interfaces. Each topic is connected to something you can make, inspect, and improve.",
    icon: "code",
    theme: "web",
    format: "Online sessions and guided practice",
    level: "Foundations to confident practice",
    modules: [
      "HTML structure and accessible content",
      "CSS layout, typography, and responsive design",
      "JavaScript fundamentals and browser interaction",
      "Git, GitHub, and a practical project workflow",
      "React components, state, and reusable interfaces",
      "Publishing a finished project on the web",
    ],
    tools: ["HTML", "CSS", "JavaScript", "React", "Git"],
    outcome:
      "Leave with a small collection of projects and a stronger understanding of how to keep building after the course.",
  },
  {
    slug: "data-analysis",
    number: "02",
    label: "Data analysis",
    title: "Find the story in data",
    shortDescription:
      "Learn how to turn messy tables into useful findings using spreadsheets, SQL, and clear visual stories.",
    description:
      "This track focuses on the habits behind useful analysis: asking a good question, cleaning what you have, checking your assumptions, and communicating the result clearly.",
    icon: "data",
    theme: "data",
    format: "Online sessions and guided practice",
    level: "Foundations to confident practice",
    modules: [
      "Working with tables, formulas, and structured data",
      "Cleaning, checking, and documenting datasets",
      "SQL queries for finding useful answers",
      "Choosing charts that clarify rather than decorate",
      "Building a simple report or dashboard",
      "Presenting findings to a non-technical audience",
    ],
    tools: ["Sheets", "Excel", "SQL", "Python", "Charts"],
    outcome:
      "Leave with a repeatable analysis process and a project that shows how you think with data.",
  },
  {
    slug: "cybersecurity",
    number: "03",
    label: "Cybersecurity",
    title: "Think like a defender",
    shortDescription:
      "Build a working foundation in networking, safe computing, common threats, and responsible security practice.",
    description:
      "This track introduces the language and habits of cybersecurity through a defensive lens. You will learn to recognise risk, investigate carefully, and make safer decisions.",
    icon: "shield",
    theme: "security",
    format: "Online sessions and guided practice",
    level: "Foundations to confident practice",
    modules: [
      "How devices, networks, and services connect",
      "Security principles and responsible practice",
      "Common attack patterns and social engineering",
      "Identity, access, passwords, and safer workflows",
      "Reading alerts and thinking through incidents",
      "Building a personal security checklist",
    ],
    tools: ["Networks", "Linux", "Security labs", "Threat models", "Checklists"],
    outcome:
      "Leave with a practical security mindset and a foundation for deeper study.",
  },
];

export const tutors = [
  {
    discipline: "Web development",
    title: "Web development tutor",
    initials: "WD",
    theme: "web",
    description:
      "Leads the track on building clear, responsive websites and learning the fundamentals that make interfaces work.",
  },
  {
    discipline: "Data analysis",
    title: "Data analysis tutor",
    initials: "DA",
    theme: "data",
    description:
      "Leads the track on asking better questions, working with messy information, and explaining findings with clarity.",
  },
  {
    discipline: "Cybersecurity",
    title: "Cybersecurity tutor",
    initials: "CS",
    theme: "security",
    description:
      "Leads the track on security fundamentals, safer habits, and responsible ways to investigate technology risks.",
  },
];

export const faqs = [
  {
    question: "Who are the courses for?",
    answer:
      "They are designed for people who want a structured way to start learning or strengthen their foundations. You do not need to arrive as an expert.",
  },
  {
    question: "How do I join a course?",
    answer:
      "You can complete the sign-up form on the website or join the general WhatsApp community and speak with an admin. An admin will explain the available course, payment, and next steps.",
  },
  {
    question: "Is the WhatsApp community free?",
    answer:
      "The general community is intended for announcements, questions, resources, and course information. Paid course groups are separate and are reserved for confirmed students.",
  },
  {
    question: "Do I need previous experience?",
    answer:
      "No formal experience is required for the foundations tracks. You will need a device, a reliable internet connection, and the willingness to practise between sessions.",
  },
];

export const legal = {
  lastUpdated: "September 2026",
  privacySections: [
    {
      heading: "Information we collect",
      body: "If you contact the school or complete an interest form, we may receive details such as your name, email address, WhatsApp number, selected course, and any message you choose to send.",
    },
    {
      heading: "How we use information",
      body: "We use this information to respond to enquiries, explain course and payment steps, manage enrolment conversations, and share important updates about the school. We do not sell your personal information.",
    },
    {
      heading: "WhatsApp and third-party services",
      body: "If you choose to join the WhatsApp community or contact an admin there, your interaction is also governed by WhatsApp's own terms and privacy policy.",
    },
    {
      heading: "Keeping information safe",
      body: "We take reasonable steps to keep enquiry information limited to the people responsible for the school. No online service can promise absolute security, so please avoid sending passwords or sensitive financial information through a contact form or chat.",
    },
    {
      heading: "Your choices",
      body: "You may ask what personal information we hold about you, request a correction, or ask us to stop contacting you. Use the official contact details listed on this website once they have been added.",
    },
  ],
  termsSections: [
    {
      heading: "Using this website",
      body: "This website provides information about the school's learning tracks, community, and enrolment process. Please read the course information carefully and contact an admin if you need clarification before making a payment.",
    },
    {
      heading: "Course information and availability",
      body: "Course schedules, prices, tutors, formats, and places may change before a cohort begins. The details confirmed by an official admin are the details that apply to your enrolment.",
    },
    {
      heading: "Payments and enrolment",
      body: "A place on a course is not confirmed until the school has verified the payment and communicated the next steps. Do not send money to anyone who is not an official admin of the school.",
    },
    {
      heading: "Community conduct",
      body: "Members of the WhatsApp community and course groups are expected to communicate respectfully, protect other learners' privacy, and avoid sharing private group links or course materials without permission.",
    },
    {
      heading: "Contact",
      body: "If you have a question about these terms, course participation, or a payment conversation, contact the school through an official channel listed on the website.",
    },
  ],
};
