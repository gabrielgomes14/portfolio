import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Gabriel Gomes",
  initials: "GG",
  description:
    "Desenvolvedor de software, em uma jornada de aprendizado e inovação constantes.",
  summary:
    "Atualmente, estou sempre buscando expandir meus conhecimentos e habilidades, com o objetivo de enriquecer minha experiência profissional e contribuir para o desenvolvimento tecnológico em diferentes setores. Fora do trabalho, gosto de explorar novas tecnologias, ler livros e jogar video games.",
  avatarUrl: "/me.png",
  url: "https://github.com/ggg21on",
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
    { href: "/", icon: HomeIcon, label: "Início" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projetos" },
    { href: "#contact", icon: PencilLine, label: "Contato" },
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
        name: "Enviar e-mail",
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
      title: "Estágio administrativo",
      logoUrl: "https://th.bing.com/th/id/OIP.92tw08ECl21hkb01q9BTswHaBu?w=319&h=81&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      start: "Janeiro de 2025",
      end: "Atual",
      description:
        "• Incorporação de dados de telemetria: coleta e integração de dados de telemetria para análise e monitoramento. • Lançamento de dados de abastecimento: inserção e gestão de informações relacionadas ao abastecimento de combustível. • Alimentação de despesas diversas: inserção e gestão de dados referentes a uma variedade de despesas operacionais. • Correção de odômetro: verificação e correção dos dados de odômetro para garantir a precisão das informações de distância percorrida.",},
  
  {
      company: "Ecar Fleet",
      href: "https://ecarfleet.com.br/",
      badges: [],
      location: "São Paulo, SP",
      title: "Assistente de Dados III",
      logoUrl: "https://th.bing.com/th/id/OIP.92tw08ECl21hkb01q9BTswHaBu?w=319&h=81&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      start: "Janeiro de 2025",
      end: "Atual",
      description:
        "• Incorporação e importação de dados; Desenvolvimento de soluções para análise e gestão de informações; Automações (RPA) para automatizar processos; Desenvolvimento de softwares e integrações com APIs.",},
  
  ],

  projects: [
        {
      title: "Aurora (Site institucional)",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Nov 2025",
      active: true,
      description:
        "Site institucional para a empresa (fictícia para um projeto academico) Aurora, desenvolvido utilizando React e next.js. O site apresenta informações sobre a empresa, seus serviços e contato, proporcionando uma experiência de usuário moderna e responsiva, além de um catalogo de produtos.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      image: "",
      video:
        "/aurora.mp4",
    },
    {
      title: "Livraria em Django",
      href: "https://chatcollect.com",
      dates: "Jan 2022 - Nov 2022",
      active: true,
      description:
        "Desenvolvimento de uma API REST para uma livraria usando Django, com DRF (Django Rest Framework).",
      technologies: [
        "Django",
        "Python",
        "JavaScript",
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
      title: "Conversor de Bases Numéricas",
      href: "https://ggg21on-numeric-base-converter-calculadora-pku1vr.streamlit.app/",
      dates: "Jun 2023 - Jul 2023",
      active: true,
      description:
        "Calculadora de bases numéricas usando o framework open source Streamlit, que permite a conversão entre diferentes sistemas numéricos, incluindo binário, octal, decimal e hexadecimal.",
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
      dates: "Abr 2022 - Set 2022",
      active: true,
      description:
        "Chatbot conversacional.",
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
        "Projeto desenvolvido para atender às demandas da Fábrica de Software do Instituto Federal Catarinense, Campus Araquari.",
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
      title: "Bacharelado em Sistemas de Informação",
      dates: "Janeiro de 2023 - Dezembro de 2026 (em andamento)",
      location: "Instituto Federal Catarinense, Araquari",
      description:
        "No curso de Sistemas de Informação, que estou cursando atualmente no Instituto Federal Catarinense – Campus Araquari, adquiro conhecimentos sobre planejamento, aquisição e gestão de serviços e recursos de Tecnologia da Informação e Computação, aplicados ao desenvolvimento e à evolução de sistemas e infraestruturas para a automação de processos organizacionais.",
      image:
        "https://th.bing.com/th/id/OIP.I6NK72FR1sZ9Pf0xnV6CqQAAAA?rs=1&pid=ImgDetMain",
      links: [],
    },
    {
      title: "Técnico em Informática",
      dates: "Janeiro de 2020 - Fevereiro de 2022",
      location: "Instituto Federal Catarinense, Araquari",
      description:
        "Durante o Curso Técnico em Informática Integrado ao Ensino Médio, que concluí no Instituto Federal Catarinense – Campus Araquari, adquiri conhecimentos em programação, análise de requisitos para o desenvolvimento de sistemas e manutenção de computadores.",
      image:
        "https://th.bing.com/th/id/OIP.I6NK72FR1sZ9Pf0xnV6CqQAAAA?rs=1&pid=ImgDetMain",
      links: [],
    },
    {
      title: "IT Essentials",
      dates: "Certificação emitida em 2022",
      location: "Cisco Networking Academy",
      description:
        "",
      icon: "public",
      image:
        "https://www.onlinecoursereport.com/wp-content/uploads/2020/09/Cisco-Logo-2-e1571393703762.png",
      links: [
        {
          title: "Ver credencial",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/96c9ba97-4a06-43c9-965a-bdc8ca6d79f2/linked_in_profile",
        },
      ],
    },
    {
      title: "NDG Linux Essentials",
      dates: "Certificação emitida em 2023",
      location: "Cisco Networking Academy",
      description:
        "",
      image:
        "https://www.onlinecoursereport.com/wp-content/uploads/2020/09/Cisco-Logo-2-e1571393703762.png",
      links: [
        {
          title: "Ver credencial",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1lgU4IkB4AJIyt3qcI0F1cS4OBG8Aftr8/view?usp=sharing",
        },
      ],
    },
    {
      title: "CCNA: Introduction to Networks",
      dates: "Certificação emitida em 2024",
      location: "Cisco Networking Academy",
      description:
        "Cisco verifies the earner of this badge successfully completed the Introduction to Networks course and achieved this student level credential. Earner has knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources. Earner participated in up to 54 labs and accumulated up to 14 hours of hands-on labs using Cisco hardware or Packet Tracer tool",
      image:
        "https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
      links: [
        {
          title: "Ver credencial",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/cdd5eb8e-f8d0-4cee-9685-3c2f4ddb05a1/public_url",
        },
      ],
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
      dates: "Certificação emitida em 2026",
      location: "AWS academy",
      description:
        "O treinamento e a certificação da AWS desenvolvem sua competência, confiança e credibilidade com habilidades práticas em nuvem que ajudam você a inovar e a progredir em sua carreira. Seja para explorar novas ideias, aprimorar suas habilidades em nuvem, aprender sobre serviços ou se preparar para uma certificação, temos treinamentos para ajudá-lo a alcançar seus objetivos. Use nossos badges digitais para exibir suas conquistas, incluindo as Certificações AWS, que validam suas habilidades em nuvem com uma credencial reconhecida pelo setor.",
      image:
        "https://images.credly.com/size/340x340/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob",
      links: [
        {
          title: "Ver credencial",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/c8aa4fbd-caf4-404e-8a64-412dbd9dc4ae/public_url",
        },
      ],
    }
  ],
} as const;
