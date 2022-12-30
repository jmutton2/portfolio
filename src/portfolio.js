const header = {
  homepage: "https://jmutton2.github.io",
  title: "Jacob",
};

const about = {
  name: "Jacob Mutton",
  role: "Software Engineer",
  description:
    "I am a fourth year Software Engineering student at Western University, currently looking for full-time positions starting in May 2023! Please feel free to contact me, I would love to chat!",
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/jmutton2/",
    github: "https://github.com/jmutton2",
  },
};

const projects = [
  {
    name: "Hearing Aid Calibration App",
    tag: "National Center for Audiology",
    description:
      "A fullstack web application designed to automate data collection through an in-house hearing aid calibration library. ",
    stack: ["JavaScript", "VueJS", "Rust", "MongoDB"],
    // sourceCode: "https://github.com",
    // livePreview: "https://github.com",
  },
  {
    name: "Offline Survey App",
    tag: "National Center for Audiology",
    description:
      "Modified an existing surveying application to allow for seamless offline surveying capabilities. ",
    stack: ["PHP", "JavaScript", "SQL"],
    // sourceCode: "https://github.com",
    // livePreview: "https://github.com",
  },
  {
    name: "Parcade",
    tag: "Personal",
    description:
      "An application that provides users with a platform to host and rent driveways.",
    stack: ["JavaScript", "ReactJS", "AWS", "Capacitor"],
    // sourceCode: "https://github.com",
    // livePreview: "https://github.com",
  },
  {
    name: "Home Security System",
    tag: "Personal",
    description:
      "Modular home security system using C and ESP32 development boards running RTOS",
    stack: ["C", "FreeRTOS", "ESP32"],
    sourceCode: "https://github.com/jmutton2/pi_sec",
    // livePreview: "https://github.com",
  },
  {
    name: "Baremetal Kubernetes Infrastructure",
    tag: "National Center for Audiology",
    description:
      "Implemented a Kubernetes cluster on a set of in-house computers that featured various docker containers and ceph storage.",
    stack: ["ClearLinuxOS", "Kubernetes", "RookCeph", "Gitea", "LDAP"],
  },
  {
    name: "AWS Kubernetes Infrastructure",
    tag: "Highmark",
    description:
      "Provisioned a Kubernetes system on AWS with focus on improving CI/CD.",
    stack: ["AWS", "Kubernetes", "Git"],
  },
];

const skills = [
  "Rust",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "C",
  "Python",
  "Kubernetes",
  "Docker",
  "NodeJS",
  "VueJS",
  "ReactJS",
];

const contact = {
  email: "jmutton2@uwo.ca",
};

export { header, about, projects, skills, contact };
