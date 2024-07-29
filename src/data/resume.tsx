import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Gabriel Gomes",
  initials: "GG",
  description:
    "Software developer, on a journey of constant learning and innovation",
  summary:
    "Currently, I am always looking to expand my knowledge and skills, with the aim of enriching my professional experience and contributing to technological development in different sectors.Outside of work, I enjoy exploring new technologies, reading books, and playing video games.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Vue.js",
    "Typescript",
    "Javascript",
    "HTML",
    "CSS",
    "Python",
    "Go",
    "Django",
    "MySQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "gomesgalikosky@gmail.com",
    tel: "(47)997425897",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ggg21on",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gabriel-gomes-574287258/?locale=en_US",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/gomesgalikosky/",
        icon: Icons.Instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ecar Fleet",
      href: "https://ecarfleet.com.br/",
      badges: [],
      location: "São Paulo, SP",
      title: "Administrative internship",
      logoUrl: "https://th.bing.com/th/id/OIP.92tw08ECl21hkb01q9BTswHaBu?w=319&h=81&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      start: "January 2024",
      end: "Moment",
      description:
        "• Telemetry Data Incorporation: Collection and integration of telemetry data for analysis and monitoring • Fuel Supply Data Provision: Input and management of information related to fuel supply • Various Expenses Data Feeding: Input and management of data related to a variety of operational expenses • Odometer Correction: Verification and correction of odometer data to ensure accuracy in distance traveled information.",},

  ],

  projects: [
    {
      title: "Django Bookstore",
      href: "https://chatcollect.com",
      dates: "Jan 2022 - Nov 2022",
      active: true,
      description:
        "REST API development library using Django, with DRF (Django Rest Framework).",
      technologies: [
        "Django",
        "Python",
        "JavaSript",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ggg21on/livraria_ended",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/bookstore.mp4",
    },
    {
      title: "Numerical Base Converter",
      href: "https://ggg21on-numeric-base-converter-calculadora-pku1vr.streamlit.app/",
      dates: "Jun 2023 - Jul 2023",
      active: true,
      description:
        "Numerical base calculator using the open source Streamlit framework that allows conversion between different number systems, including binary, octal, decimal, and hexadecimal.",
      technologies: [
        "Python",
        "Streamlit",
      ],
      links: [
        {
          type: "Website",
          href: "https://ggg21on-numeric-base-converter-calculadora-pku1vr.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ggg21on/numeric-base-converter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/numerical-base.mp4",
    },
    {
      title: "ChatBot",
      href: "https://github.com/ggg21on/chatbot-example",
      dates: "April 2022 - September 2022",
      active: true,
      description:
        "Conversational chatbot.",
      technologies: [
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ggg21on/chatbot-example",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/chatbot.mp4",
    },
    {
      title: "C.A.F.S",
      href: "https://automatic.chat",
      dates: "Jan 2022 - Dez 2022",
      active: true,
      description:
        "Project made in order to meet the demands of the Software Factory of the Federal Institute of Santa Catarina Campus Araquari.",
      technologies: [
        "Vue.js",
        "JavaScript",
        "CSS",
        "HTML",
        "Django",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://cafs.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Hagatanga2022/cafs-front.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/cafs.mp4",
    },
  ],
  hackathons: [
    {
      title: "Information Technology",
      dates: "January 2020 - February 2022",
      location: "Instituto Federal Catarinense, Araquari",
      description:
        "During my Technical Course in Computer Science Integrated with High School, which I completed at the Federal Institute of Santa Catarina - Campus Araquari, I acquired knowledge in programming, requirements analysis for system development, and computer maintenance.",
      image:
        "https://th.bing.com/th/id/OIP.I6NK72FR1sZ9Pf0xnV6CqQAAAA?rs=1&pid=ImgDetMain",
      links: [],
    },
    {
      title: "Bachelor of Information Systems",
      dates: "January 2023 - December 2026 (In progress)",
      location: "Instituto Federal Catarinense, Araquari",
      description:
        "In the Information Systems Course, which I am currently graduating from the Federal Institute Catarinense – Araquari Campus, I acquire the knowledge of planning, acquisition and management of Information Technology and Computing services and resources applied to the development and development of the evolution of systems and infrastructures for the automation of organizational processes.",
      image:
        "https://th.bing.com/th/id/OIP.I6NK72FR1sZ9Pf0xnV6CqQAAAA?rs=1&pid=ImgDetMain",
      links: [],
    },
    {
      title: "It Essentials",
      dates: "Verification issued in 2022",
      location: "Cisco Networking Academy",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://www.onlinecoursereport.com/wp-content/uploads/2020/09/Cisco-Logo-2-e1571393703762.png",
      links: [
        {
          title: "View Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/96c9ba97-4a06-43c9-965a-bdc8ca6d79f2/linked_in_profile",
        },
      ],
    },
    {
      title: "NDG Linux Essentials",
      dates: "Verification issued in 2023",
      location: "Cisco Networking Academy",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://www.onlinecoursereport.com/wp-content/uploads/2020/09/Cisco-Logo-2-e1571393703762.png",
      links: [
        {
          title: "View Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1lgU4IkB4AJIyt3qcI0F1cS4OBG8Aftr8/view?usp=sharing",
        },
      ],
    },
  ],
} as const;
