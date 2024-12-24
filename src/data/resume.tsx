import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Uttam Kumar",
  initials: "UK",
  url: "https://portfolio-uk1619.vercel.app/",
  location: "Madhya Pradesh, India",
  locationLink: "https://www.google.com/maps/place/VIT+Bhopal+University/@23.0774764,76.8487122,17z/data=!3m1!4b1!4m6!3m5!1s0x397ce9ceaaaaaaab:0xa224b6b82b421f83!8m2!3d23.0774715!4d76.8512871!16s%2Fg%2F11c61hcx7z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Full Stack Developer | Part-Time Freelancer. I am a Tech enthusiast and passionate about building innovative solutions and staying updated with the latest trends. I use AI tools to enhance productivity and deliver results efficiently. Active on LinkedIn and GitHub—explore my blogs, projects, and ideas. Turn on some music and  stay tuned with me.!",
  summary:
    "Pre-final Year B.Tech CSE Student  Passionate about exploring open-source projects and continuously expanding my technical expertise. Currently delving into emerging technologies such as Blockchain, Figma, UI/UX design, LLM models, and cross-platform development.and [competed in over 5+ hackathons for fun](/#hackathons). Currently Building [EasyPrints](#link) & [ConseptConnect](https://www.linkedin.com/in/uttamofficial005/)",
  avatarUrl: "/me.png",
  skills: [
    "C++",
    "Python",
    "Android OS",
    "Tester",
    "Flutter",
    "React",
    "React-Native",
    "Next.js",
    "laravel",
    "php",
    "Codeigniter",
    "Nest.js",
    "Typescript",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Appwrite",
    "Firebase",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Linux",
    "Odoo",
    "Payload CMS",
    "Wordpress",
    "Sanity",
    "V0",
    "TailwindCSS",
    "Technically",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "conseptconnect@gmail.com",
    tel: "+917488339742",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/uk1619",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/uttamofficial005/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/UttamKumar_005",
        icon: Icons.x,

        navbar: true,
      },
      Chat: {
        name: "Chat",
        url:"https://wa.me/7488339742?text=Hey , Uttam!" ,
        icon: Icons.whatsapp,

        navbar: true,
      },
      
     // Youtube: {
       // name: "Youtube",
      //  url: "https://dub.sh/dillion-youtube",
      //  icon: Icons.youtube,
      //  navbar: true,
    //  },
      email: {
        name: "Send Email",
        url: "mailto:uttamofficial005@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Smart Internz",
      href: "https://smartinternz.com/",
      badges: [],
      location: "Virtual Intenship",
      title: "Google Cloud Generative AI Intern",
      logoUrl: "/splunk.png",
      start: "18 September 2024",
      end: "29 October 2024",
      description:
        "Throughout this internship, I learned the concepts and demonstrated a high level of efficiency in applying the same practically.",
    },
    
    {
      company: "Techotd Solutions Private Limited",
      href: "https://techotd.com/",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/atomic.png",
      start: "september 2024",
      end: "Present",
      description:
        "Working on assign project by Enhancing Frontend and Backend. Also, I am working on improving the overall performance of the application.",
    },
    {
      company: "Bharat Intern",
      badges: [],
      href: "https://bharatintern.live/",
      location: "Remote",
      title: "Python-Developer Intern",
      logoUrl: "/shopify.png",
      start: "July 2023",
      end: "september 2023",
      description:
        "Working on assign project and also make some models for peforming webscraping and copy pasting task.",},
    {
      company: "JP-Morgan Online job simulation",
      href: "https://jpmorgan.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Interface with a stock price data feed Use JPMorgan Chase & Co. frameworks and tools Display data visually for traders Bonus task: Open source contribution",
    },
    {
      company: "AWS APAC - Solutions Architecture Job Simulation",
      href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_AeMWYYeqEcPqZX8f5_1710394896690_completion_certificate.pdf",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/aws.png",
      start: "July 2024",
      end: "August 2024",
      description:
        "A practical assessment simulating real-world scenarios to evaluate skills in designing and implementing scalable, secure, and cost-effective solutions on AWS for the APAC region.",
    },
   
   
  ],
  education: [
    {
      school: "VIT",
      href: "https://vitbhopal.ac.in/",
      degree: "Btech CSE",
      logoUrl: "/buildspace.jpg",
      start: "2022",
      end: "2026",
    },
     
    
    
  ],
  projects: [
    {
      title: "Assignmate.works",
      href: "https://Assignmate.works",
      dates: "september 2023 - December 2023",
      active: true,
      description:
        "With the release of the [Assignment Assistance](https://assignmate.works/), I decided to build a SaaS which allows users to help students with their assignment. ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Razorpay",
        "Prisma",
        "TailwindCSS",
   
      ],
      links: [
        {
          type: "Website",
          href: "https://assignmate.works/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: 
        "/assignments.png",
      video:
        "https://youtu.be/bzAF9RGHJU8?si=AR6CKlDknqCsGZ",
    },
    {
      title: "FitBrainz",
      href: "https://super-cranachan-9d7d71.netlify.app/",
      dates: "June 2024 - september 2024",
      active: true,
      description:
        "Designed, developed and sold animated UI components and Fully Functional website with its own 30 days challange.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        
        "TailwindCSS",
       
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://fitbrainz.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/uk1619/FITBRAINZ",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fitbrainz.png",
      video: "https://cdn.magicui.design/bento-grid.m",
    },
   
  ],
  hackathons: [
    {
      title: "Appwrite Hacktober Fest Global Hackathon",
      dates: "1st October - 31st October 2024",
      location: "Remote",
      description:
        "Developed  Social media Application For Aritst Like Linkedin to Connect and create thier own Community , Manage Workshops and to show case thier artform.",
      image:
      "https://avatars.githubusercontent.com/u/25003669?s=280&v=4",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hacktober Fest",
      dates: "Present",
      location: "Banglore , India",
      description:
        "",
      image:
        "https://pbs.twimg.com/profile_images/1831003149072535554/leInyk8A_400x400.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "Sepetmber 2024",
      location: "VIT, Madhya Pradesh",
      description:
        "Developed a AI Driven mobile application for Farmers to predict disease and provide pestisides  to the crop with help of AI.",
      image:
        "https://static.wixstatic.com/media/b49d96_c2029acf7fa8411e8122eb976a1e7aeb~mv2.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  
    {
      title: "Aleo WorkShop",
      dates: "July 15th, 2024",
      location: "Attended Remote , Live Event  Dubai",
      description:
        "A standard game of Tic-Tac-Toe in Leo.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*oxVZIooRHQI4v8PauCpOOg.png",
      links: [
        // {
        //   title: "Source",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/Amanlabh/Aleo-Tiktactoe",
        // },
      ],
    },
    
    {
      title: "Google IT support Professional Certificate",
      dates: "December, 2023",
      location: "Attended Remote",
      description:
        "This is a course where I learned about the basics of IT support and the role of IT support in a business environment.",
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png",
      links: [
        // {
        //   title: "Source",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/Amanlabh/Aleo-Tiktactoe",
        // },
      ],
    },
    
    {
      title: "IDM - Deep Neural Networks with PyTorch",
      dates: "February, 2024",
      location: "Attended Remote",
      description:
        "This is a course where I learned about the basics of Deep Neural Networks and the role of Deep Neural Networks in a business environment.",
      image:
        "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1956.jpg?width=672&height=454&name=ibm-logo-1956.jpg",
      links: [
        // {
        //   title: "Source",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/Amanlabh/Aleo-Tiktactoe",
        // },
      ],
    },
    {
      title: "Google - Generative AI for Educators Certificate",
      dates: "February, 2024",
      location: "Attended Remote",
      description:
        "This is a course where I learned about the basics of Generative AI and the role of Generative AI in a business environment.",
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png",
      links: [
        // {
        //   title: "Source",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/Amanlabh/Aleo-Tiktactoe",
        // },
      ],
    },
    
    
  ],
} as const;
