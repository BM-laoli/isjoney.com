import { Icons } from "@/components/Icons";

export const BLUR_FADE_DELAY = 0.05;

export const DATA = {
  // Website data
  url: "https://iamjoney.com",
  lastUpdated: "Jun 2026",
  avatarUrl: "/mex.jpg",
  navbar: [ // @TODO: 需要换
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "/projects", icon: Icons.briefcase, label: "Projects" }, // Personal Produces
    { href: "/books", icon: Icons.notebook, label: "Books" }, // blog 需要改成外联
    // 暂时不开放 — CV 下载暂时不开放
    // { href: "/resume.pdf", icon: Icons.paper, label: "CV" },
  ],
  // Blog info
  blogDescription: // @TODO:需要换
    "Thoughts on AI, software, life and more. Short notes and longer write-ups.",
  blogCharacter: "Z", // @TODO:需要换
  blogInfo: {  // @TODO:需要换 blog 可以不用要了 链接到另外的地方去
    "bp-deduction": {
      title: "A Detailed Derivation of Backpropagation",
    },
    "proj-came": {
      title:
        "CAME Optimizer: Adam Performance with Adafactor Memory Requirements",
    },
    "proj-infobatch": {
      title: "InfoBatch: Dataset Pruning on the Fly",
    },
    "proj-sequence-schedule": {
      title: "Can We Use LLMs Itself to Speed Up LLM Inference?",
    },
    "proj-zscl": {
      title:
        "ZSCL: Fine-tuning Vision-Language Models without Zero‑Shot Transfer Degradation",
    },
    "note-aievaluation": {
      title: "Evaluation as Creation: How AI is Redefining Human Productivity",
    },
  },
  name: "Joney Li",
  // Generel data
  subtitle: "Game Developer(UE4) & Full Stack Architect(React)",
  description: "Crafting Immersive Worlds with Engineering Precision\n Unreal Engine C++ | React | Nodejs | .NET Core",
  summary:
    "Hi, I'm Joney👋, an **Independent Game Developer** with a unique engineering DNA. I bridge the gap between high-fidelity **Game Development** and scalable **Full Stack Architecture**.\n\ \n My journey evolved from a solid background in enterprise software (**React & .NET Core**) to mastering **Unreal Engine 4**. This cross-disciplinary expertise allows me to not only craft immersive gameplay using **C++**, but also engineer robust backend systems and custom pipeline tools that power them. I bring the rigor of web architecture to the creative chaos of game development.\n \n I earned my B.Sc. in Computer Science from ![NKU Logo](/icon/nku.png) [Nankai University](https://www.nankai.edu.cn/) (NKU). Currently, I operate as a freelancer, leveraging my hybrid skillset to build connected games and interactive 3D solutions. You can see my work in my [Portfolio](/projects).\n \n 🛠 **Tech Stack:** **Unreal Engine 4** (C++ Gameplay/Slate), **.NET Core 1Y** (Game Server/Backend), **React Native 3Y** (Web/Tools UI), HLSL.",
  surname: "Li",
  firstName: "Joney",
  initials: "J.S",
  location: "Chengdu, China",
  locationLink: "https://www.google.com/maps/place/Chengdu",
  // Chinese general data
  chinese: {
    name: "JoneySli",
    subtitle: "游戏开发者(UE4) & 全栈架构师(React)",
    description: "用工程师的严谨打造沉浸式世界\n Unreal Engine C++ | React | Nodejs | .NET Core",
    summary:
      "你好，我是JoneySli👋，一位独立游戏开发者，拥有独特的工程背景。我擅长将高保真游戏开发与可扩展的全栈架构相结合。\n\n我的旅程从扎实的企业软件背景（React & .NET Core）开始，到掌握Unreal Engine 4。这种跨学科的专业知识使我不仅能够使用C++打造沉浸式的游戏体验，还能构建稳健的后端系统和自定义的流水线工具来支持它们。我将Web架构的严谨性带入了游戏开发的创造性混沌中。\n\n我获得了南开大学计算机科学学士学位。目前，我作为自由职业者运营，利用我的混合技能集来构建连接的游戏和交互式3D解决方案。你可以在我的[作品集](/projects)中看到我的作品。\n\n🛠 **技术栈：** **Unreal Engine 4** (C++ Gameplay/Slate), **.NET Core** (Game Server/Backend), **React** (Web/Tools UI), HLSL。",
    blogDescription: "关于GamePlayer、 AI、软件、生活等的思考。短篇笔记和长篇写作。",
    blogInfo: {
      "note-aievaluation": {
        title: "人生有无限的可能",
      },
    },
  },
  // Contact
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/BM-laoli",
        icon: Icons.github,
        navbar: false,
        content: true,
        footer: true,
      },
      // GoogleScholar: {
      //   name: "Google Scholar",
      //   url: "https://scholar.google.com/citations?user=FTqutJEAAAAJ&hl=en",
      //   icon: Icons.googlescholar,
      //   navbar: false,
      //   content: true,
      //   footer: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joney-li-b360601b0?trk=contact-info",
        icon: Icons.linkedin,

        navbar: false,
        content: true,
        footer: true,
      },
      X: {
        name: "X",
        url: "https://x.com/joney_sli?s=21&t=NOZiEKdxztpat6wRgSZAtw",
        icon: Icons.x,

        navbar: false,
        content: true,
        footer: true,
      },
      facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100090021285773",
        icon: Icons.facebook,
        navbar: false,
        content: false,
        footer: true,
      },
      // instagram: {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/zangweizheng",
      //   icon: Icons.instagram,
      //   navbar: false,
      //   content: false,
      //   footer: true,
      // },
      // medium: {
      //   name: "Medium",
      //   url: "https://medium.com/@zangwei",
      //   icon: Icons.medium,
      //   navbar: false,
      //   content: false,
      //   footer: true,
      // },
      Zhihu: {
        name: "Zhihu",
        url: "https://www.zhihu.com/people/0dfe9146882abd5198015fe3612f9c71",
        icon: Icons.zhihu,

        navbar: false,
        content: true,
        footer: true,
      },
      weibo: {
        name: "Weibo",
        url: "https://weibo.com/u/5942960572",
        icon: Icons.weibo,
        navbar: false,
        content: false,
        footer: true,
      },
      // wechat: {
      //   name: "WeChat",
      //   url: "/wechat-qrcode.jpg",
      //   icon: Icons.wechat,
      //   navbar: false,
      //   content: false,
      //   footer: true,
      // },
      email: {
        name: "Email",
        url: "mailto:bmlishizeng@gmail.com",
        icon: Icons.email,
        navbar: false,
        content: true,
        footer: false,
      },
      rss: {
        name: "RSS",
        url: "/api/feed/atom.xml", // 自己想办法做一下这个功能
        icon: Icons.rss,
        navbar: false,
        content: false,
        footer: true,
      },
      calendly: {
        name: "Calendly",
        url: "https://calendly.com/bmlishizeng/30min",
        icon: Icons.calendly,
        navbar: false,
        content: false,
        footer: false,
      },
    },
  },
  // News only From Project/Blog 需要自己整理 @TODO: 目前Joney 在Game方向和前端方向都有很多文章 自己找AI设置和整理一下就好了，直接链接到掘金去
  news: [
    {
      date: "2026.06.29",
      title: "🏫 K-12 Master Teacher Classroom Analysis",
      content:
        "🤖 I designed an AI tool that scanned a large number of master teacher courses and automatically generated precise summaries and outlines, accurately organizing the teaching plan content. [Try it →](https://kjcodegen.iamjoney.com/) #AI #EdTech #Education",
    },
  ],
  // Projects 个人项目作品展示
  projects: [
    {
      title: "Lost Island",
      href: "https://github.com/BM-laoli/Godot_CottonPuzzle",
      dates: "",
      active: true,
      description:
        "A puzzle adventure game built with Godot Engine — explore a mysterious lost island and unravel its secrets.",
      technologies: [],
      authors: "",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/BM-laoli/Godot_CottonPuzzle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proj-misidao.png",
      video: "",
    },
    {
      title: "NestJS Tutorial Series",
      href: "https://juejin.cn/column/7179578893353877565",
      dates: "",
      active: true,
      description:
        "A comprehensive NestJS backend development tutorial series — from beginner to advanced, covering real-world projects and best practices.",
      technologies: [],
      authors: "",
      links: [
        {
          type: "Juejin",
          href: "https://juejin.cn/column/7179578893353877565",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/proj-nest-js.png",
      video: "",
    },
    {
      title: "Cross-Platform App with RN",
      href: "https://juejin.cn/column/7343606012581904410",
      dates: "",
      active: true,
      description:
        "Cross-platform mobile app design and practice — building high-performance, cross-platform mobile applications with React Native.",
      technologies: [],
      authors: "",
      links: [
        {
          type: "Juejin",
          href: "https://juejin.cn/column/7343606012581904410",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/proj-cross-app.png",
      video: "",
    },
  ],
  // Skills
  skills: [
    "React",
    "React Native",
    "Unreal Engine 4",
    ".NET Core",
    "NestJS",
    "C++",
    "C#",
    "Go",
    "Python",
    "Java",
    "Lua",
    "JavaScript",
    "TypeScript",
    "Objective-C",
    "Swift",
    "Kotlin",
    "SQL",
    "Docker/K8s",
  ],
  // Education
  education: [
    { //南开大学
      school: "Nankai University",
      href: "https://www.nankai.edu.cn/",
      degree: "Bachelor's Degree of Computer Science (top 20%)",
      logoUrl: "/icon/nku.png",
      start: "2021",
      end: "2025",
    },
    //天津职业大学 三流水平 就不写了
  ],
  // Work
  work: [
    {
      "company": "NetEase PES Studio",
      "href": "https://pes.163.com/",
      "badges": [],
      "location": "Guangzhou, China",
      "title": "Gameplay Client Engineer / Tools Developer (UE4/C++)",
      "logoUrl": "/icon/netease-logo.png",
      "start": "Sep. 2024",
      "end": "Present",
      "description": "Client engineer for the Chinese version of PES (Pro Evolution Soccer), responsible for gameplay system development and maintenance, as well as internal tool development. Tech stack: UE4/C++/Python."
    },
    {
      "company": "Newegg",
      "href": "https://www.newegg.com/",
      "badges": [],
      "location": "Chengdu, China",
      "title": "Senior Full-stack Engineer (React/.NET)",
      "logoUrl": "/icon/newegg-logo.png",
      "start": "Aug. 2021",
      "end": "Nov. 2023",
      "description": "Full-stack engineer responsible for development and maintenance of the main Newegg website. Tech stack: React Native, React, NestJS, and .NET Core."
    },
    {
      "company": "Meituan",
      "href": "https://about.meituan.com/en",
      "badges": [],
      "location": "Chengdu, China",
      "title": "React Frontend Developer",
      "logoUrl": "/icon/meituan-logo.png",
      "start": "Mar. 2021",
      "end": "Aug. 2021",
      "description": "Mid-level frontend developer in the SaaS catering platform team, responsible for feature development and maintenance for both merchant and user-facing sides. Tech stack: React."
    }
  ],
  // Awards
  awards: [
    { year: 2022, title: "2022 Chongqing Front-end Exchange Conference \"同舟\" Light Talk Guest 《React Native Bundle Split Solution》" },
  ],
  // Academic Services 学术服务 -- 暂时没有
  // reviewerConferences: ["NeurIPS", "ICLR", "CVPR", "ECCV", "AAAI"],
  // reviewerJournals: ["Pattern Recognition", "TIP", "TSMC-S"],
  // teaching: [
  //   {
  //     date: "Fall 2022",
  //     location: "National University of Singapore",
  //     title: "CS5242: Neural Networks and Deep Learning",
  //   },
  //   {
  //     date: "Fall 2020",
  //     location: "Nanjing University",
  //     title: "Algorithm Analysis & Design",
  //   },
  // ],
  // Invited Talks 被邀请去的演讲
  invitedTalks: [
    {
      host: "Ali RicLlab, invited by *GrayJoy*",
      url: "https://juejin.cn/post/7163824060776841246#heading-5",
      date: "2022.10",
      title: "2022 Chongqing Front-end Exchange Conference \"同舟\" Light Talk Guest 《React Native Bundle Split Solution》",
      logoUrl: "/icon/y-almy.png",
    },
  ],
  // @TODO: 这里放的几个你自己 比较知名的项目 ，挑出 4 个
  discover: [
    {
      name: "Lost Island",
      url: "https://github.com/BM-laoli/Godot_CottonPuzzle",
    },
    {
      name: "NestJS Tutorial Series",
      url: "https://juejin.cn/column/7179578893353877565",
    },
    {
      name: "Cross-Platform App with RN",
      url: "https://juejin.cn/column/7343606012581904410",
    },
  ],
  // Fun facts rehype-pretty-code shiki
  aiTools: {
    description:
      "The AI models and services I use are handpicked for their performance and reliability.",
    tools: [
      { category: "General", name: "GPT-5" },
      { category: "Code", name: "Cursor (Auto)" },
      { category: "Image", name: "Seedream-4" },
      { category: "Video", name: "Seedance-1" },
    ],
  },
  projectInfo: {
    description:
      "Here are some of my notable projects that showcase my skills and expertise.",
    moreLink: "/project",
  },
  // 配置项 Books 列表
  books: {
    booksList: [
      {
        slug: "Interview",
        metadata: {
          title: "Interview",
          summary: "An Interview book for demonstration purposes.",
          tags: ["Life", "Career"],
          image: "https://placehold.co/322x172/e2e8f0/1e293b.png?text=Interview",
          status: "Mar. 2024 - Mar. 2025",
          href: "/books/Interview/代码执行", // 都用相对链接
          authors: "Joney",//都通用Joney
          video: "", // 没有视频
          links: [
            { // 都用gitub！
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      },
      {
        slug: "Nodejs",
        metadata: {
          title: "Node.js 全栈与云原生开发指南",
          summary: "深入探讨 Node.js 后端应用开发，涵盖 MongoDB、NestJS 框架、GraphQL、Prisma ORM 以及 SSR 同构渲染与云原生结合的实战方案。",
          tags: ["Node.js", "Backend", "Cloud Native"],
          image: "https://placehold.co/322x172/e2e8f0/1e293b.png?text=Nodejs",
          status: "Mar. 2024 - Mar. 2025",
          href: "/books/Nodejs/偏后端的应用知识",
          authors: "Joney",
          video: "",
          links: [
            {
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      },
      {
        slug: "App", // 按照要求固定为 Nodejs
        metadata: {
          title: "React Native 跨平台与原生客户端实战",
          summary: "全方位解析移动端开发技术，涵盖 React Native 环境搭建、原生模块封装、自研热更新框架 HouYi 及 ToDoMax 实战。深入 iOS (OC/Swift) 与 Android 原生开发核心，从入门到大型应用架构设计。",
          tags: ["React Native", "iOS", "Android", "Mobile"],
          // 暖色调背景 (fff7ed - 浅橙色)，文字颜色 (ea580c - 深橙色)
          image: "https://placehold.co/322x172/fff7ed/ea580c.png?text=App",
          status: "Mar. 2024 - Mar. 2025",
          href: "/books/App/环境配置",
          authors: "Joney",
          video: "",
          links: [
            {
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      },
      {
        slug: "React", // 固定为 React
        metadata: {
          title: "React 生态与源码实战指南",
          summary: "从 React 基础语法、Hooks 深度解析、Router 与 Redux 状态管理，到 Ant Design Pro 中台实战、微前端 Qiankun 落地，以及源码级性能优化与面试技巧的全方位教程。",
          tags: ["React", "Frontend", "Source Code", "Architecture"],
          // 暖色调 (淡淡的橙红色背景 ffe4e6，深红文字 9f1239)
          image: "https://placehold.co/322x172/ffe4e6/9f1239.png?text=React",
          status: "Mar. 2024 - Mar. 2025",
          href: "/books/React/阅读指南",
          authors: "Joney",
          video: "",
          links: [
            {
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      },
      {
        slug: "Go", // 固定为 Go
        metadata: {
          title: "Go 语言从入门到微服务实战",
          summary: "全面覆盖 Go 语言核心语法、并发编程、Web 框架开发。深入解析 HTTP/RPC 应用构建、常用中间件原理，以及基于 IAM 系统的企业级项目开发全流程。",
          tags: ["Go", "Backend", "Microservices", "Project"],
          // 暖色调 (琥珀色背景 fffbeb，深琥珀色文字 b45309)
          image: "https://placehold.co/322x172/fffbeb/b45309.png?text=Go",
          status: "Mar. 2024 - Mar. 2025",
          href: "/books/Go/一个完整的程序",
          authors: "Joney",
          video: "",
          links: [
            {
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      },
      {
        slug: "Angular", // 固定为 Angular
        metadata: {
          title: "Angular 现代 Web 开发实战",
          summary: "深度解析 Angular 框架核心，涵盖 TypeScript 基础、组件化架构、DI 依赖注入、RxJS 响应式编程、路由守卫及表单处理。结合听书网实战项目，掌握 NgRx 状态管理与 Enterprise 级应用开发。",
          tags: ["Angular", "TypeScript", "RxJS", "Web"],
          image: "https://placehold.co/322x172/fef2f2/991b1b.png?text=Angular",
          status: "Mar. 2024 - Mar. 2025",
          href: "/books/Angular/一、项目的基础目录结构",
          authors: "Joney",
          video: "",
          links: [
            {
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      },
      {
        "slug": "善省",
        "metadata": {
          "title": "善省",
          "summary": "Monthly self-reflections, life summaries, and cognitive methodology records.",
          "tags": [
            "Life",
            "Reflection",
            "Cognition"
          ],
          "image": "https://placehold.co/322x172/fff7ed/d97706.png?text=SelfRevolution",
          "status": "Dec. 2020 - May. 2024",
          "href": "/books/善省/认知方法论_第一期",
          "authors": "Joney",
          "video": "",
          "links": [
            {
              "type": "Github",
              "href": "https://github.com/BM-laoli",
              "icon": <Icons.github className="size-3" />
            }
          ]
        }
      },
      {
        slug: "拉钩教育大前端", // 固定 slug
        metadata: {
          title: "拉钩教育大前端高薪训练营",
          summary: "深入解析 JavaScript 核心原理（闭包、异步、Promise），全面掌握 TypeScript 与 ES6+ 新特性。实战 Vue.js 源码与 SSR/SSG 方案，精通 Webpack 工程化配置与脚手架开发，打造高薪前端架构师能力。",
          tags: ["Frontend", "JavaScript", "Vue", "Engineering", "Webpack"],
          // 暖色调 (橙色背景 fff7ed，深橙色文字 c2410c)
          image: "https://placehold.co/322x172/fff7ed/c2410c.png?text=BigFrontendCurse",
          status: "Mar. 2024 - Mar. 2025",
          href: "/books/拉钩教育大前端/任务一：函数式编程",
          authors: "Joney",
          video: "",
          links: [
            {
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      },
      {
        slug: "微信小程序开发", // 固定为 微信小程序开发
        metadata: {
          title: "微信小程序开发从入门到实战",
          summary: "从零基础快速上手微信小程序开发，涵盖环境搭建、基础组件、API 调用及原生框架语法。通过四天高强度特训与阶段性项目实战，掌握小程序全栈开发能力。",
          tags: ["WeChat", "MiniProgram", "Frontend", "Mobile"],
          // 暖色调 (浅黄色背景 fef9c3，深黄文字 a16207)
          image: "https://placehold.co/322x172/fef9c3/a16207.png?text=MiniProgram",
          status: "Mar. 2024 - Mar. 2025",
          href: "books/微信小程序开发/第一天的简单入门",
          authors: "Joney",
          video: "",
          links: [
            {
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      },
      {
        slug: "English", // 固定为 English
        metadata: {
          title: "English 英语学习全书",
          summary: "包含公三英语词汇入门、EF 教育实用口语课程以及经典新概念英语（第一至四册）全套学习资料。从基础音标到高级阅读，构建系统的英语语言能力体系。",
          tags: ["English", "Language", "New Concept", "Vocabulary"],
          // 暖色调 (浅桃色背景 ffe4e6，深红文字 881337)
          image: "https://placehold.co/322x172/ffe4e6/881337.png?text=English",
          status: "Mar. 2024 - Mar. 2025",
          href: "/books/English/词汇入门篇",
          authors: "Joney",
          video: "",
          links: [
            {
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      },
      {
        slug: "Diary", // 固定为 Diary
        metadata: {
          title: "Joney's Diary 随笔/日记",
          summary: "记录生活的点滴瞬间与心路历程，跨越两年的时光印记。从南宁的冬日暖阳到成都的街头巷尾，用文字定格真实的自我与世界。",
          tags: ["Life", "Journal", "Personal", "Travel"],
          // 暖色调 (米黄色背景 fdf6e3，深棕色文字 5d4037)
          image: "https://placehold.co/322x172/fdf6e3/5d4037.png?text=Diary",
          status: "Dec. 2020 - Apr. 2023",
          href: "/books/Diary/2020-12-28日于南宁",
          authors: "Joney",
          video: "",
          links: [
            {
              type: "Github",
              href: "https://github.com/BM-laoli",
              icon: <Icons.github className="size-3" />,
            },
          ],
        }
      }

    ],
    // 配置项 Books 目录
    booksContent: {
      Interview: [
        {
          title: "代码执行",
          slug: "Interview/代码执行",
        },
        {
          title: "二、HTML+CSS相关",
          slug: "Interview/二、HTML+CSS相关",
        },
        {
          title: "极客时间 - 面试心法",
          slug: "Interview/极客时间 - 面试心法",
        },
        {
          title: "开源项目 - HelloAlgo",
          slug: "Interview/开源项目 - HelloAlgo",
        },
        {
          title: "前置知识和突击",
          slug: "Interview/前置知识和突击",
        },
        {
          title: "手写Code",
          slug: "Interview/手写Code",
        },
        {
          title: "TypeScript",
          slug: "Interview/TypeScript",
        },
      ],
      Nodejs: [
        {
          title: "偏后端的应用知识",
          slug: "Nodejs/偏后端的应用知识",
          children: [
            {
              title: "最简单的应用-(Node+MongoDB)",
              slug: "Nodejs/最简单的应用-(Node+MongoDB)",
              children: [
                {
                  title: "一、基础Service构建",
                  slug: "Nodejs/一、基础Service构建"
                },
                {
                  title: "二、部署和单测",
                  slug: "Nodejs/二、部署和单测"
                }
              ]
            },
            {
              title: "Nest",
              slug: "Nodejs/Nest",
              children: [
                {
                  title: "知识补充：自定义注解",
                  slug: "Nodejs/知识补充：自定义注解"
                },
                {
                  title: "一、基础知识准备",
                  slug: "Nodejs/一、基础知识准备"
                },
                {
                  title: "二、配置管理、日志收集、过滤器、中间价、守卫、DTO、拦截器、JWT",
                  slug: "Nodejs/二、配置管理、日志收集、过滤器、中间价、守卫、DTO、拦截器、JWT"
                },
                {
                  title: "三、文件服务、 单点登录、Job、和部署",
                  slug: "Nodejs/三、文件服务、 单点登录、Job、和部署"
                }
              ]
            },
            {
              title: "Graphql 从入门到实践",
              slug: "Nodejs/Graphql 从入门到实践"
            },
            {
              title: "Prisma 入门",
              slug: "Nodejs/Prisma 入门"
            }
          ]
        },
        {
          title: "SSR 领域的🧐",
          slug: "Nodejs/SSR 领域的🧐",
          children: [
            {
              title: "自研-SSR同构框架",
              slug: "Nodejs/自研-SSR同构框架"
            }
          ]
        },
        {
          title: "Nodejs与 云原生如何结合 （方案）",
          slug: "Nodejs/Nodejs与 云原生如何结合 （方案）"
        }
      ],
      App: [
        {
          title: "ReactNative",
          slug: "App/ReactNative",
          children: [
            {
              title: "环境配置",
              slug: "App/环境配置"
            },
            {
              title: "🌟🌟我在Newegg Seller APP开发规范🌟🌟",
              slug: "App/🌟🌟我在Newegg Seller APP开发规范🌟🌟"
            },
            {
              title: "杂七杂八的一些坑",
              slug: "App/杂七杂八的一些坑"
            },
            {
              title: "如何构建原生包? 封装RN库",
              slug: "App/如何构建原生包? 封装RN库",
              children: [
                {
                  title: "非原生包",
                  slug: "App/非原生包"
                },
                {
                  title: "IOS-RN原生包",
                  slug: "App/IOS-RN原生包"
                },
                {
                  title: "Android-RN原生包",
                  slug: "App/Android-RN原生包"
                }
              ]
            },
            {
              title: "分包+自己实现CodePush = 一个完整的开发框架- HouYi",
              slug: "App/分包+自己实现CodePush = 一个完整的开发框架- HouYi",
              children: [
                {
                  title: "阶段一、如何在原生应用中集成RN",
                  slug: "App/阶段一、如何在原生应用中集成RN"
                },
                {
                  title: "阶段二、分包和自研热更新",
                  slug: "App/阶段二、分包和自研热更新"
                },
                {
                  title: "阶段三、核心功能设计(一期)",
                  slug: "App/阶段三、核心功能设计(一期)"
                },
                {
                  title: "阶段三、",
                  slug: "App/阶段三、"
                }
              ]
            },
            {
              title: "项目实战ToDoMax",
              slug: "App/项目实战ToDoMax",
              children: [
                {
                  title: "🗓 项目进度表",
                  slug: "App/🗓 项目进度表"
                },
                {
                  title: "鉴权相关",
                  slug: "App/鉴权相关"
                },
                {
                  title: "封装路由",
                  slug: "App/封装路由"
                },
                {
                  title: "封装Http",
                  slug: "App/封装Http"
                },
                {
                  title: "基础框架",
                  slug: "App/基础框架"
                },
                {
                  title: "Design",
                  slug: "App/Design"
                },
                {
                  title: "PRD",
                  slug: "App/PRD"
                }
              ]
            }
          ]
        },
        {
          title: "Android-Client",
          slug: "App/Android-Client"
        },
        {
          title: "IOS-Client",
          slug: "App/IOS-Client",
          children: [
            {
              title: "奇奇怪怪的需求",
              slug: "App/奇奇怪怪的需求"
            },
            {
              title: "阶段一、Objective-C语言快熟上手",
              slug: "App/阶段一、Objective-C语言快熟上手",
              children: [
                {
                  title: "(第二期) Objective-C编程 第二版 ( THE BIG NERD RANCH GUIDE 出版)",
                  slug: "App/(第二期) Objective-C编程 第二版 ( THE BIG NERD RANCH GUIDE 出版)",
                  children: [
                    {
                      title: "1-2 章 入门",
                      slug: "App/1-2 章 入门"
                    }
                  ]
                },
                {
                  title: "(第一期) 快速入门(一览而过)",
                  slug: "App/(第一期) 快速入门(一览而过)"
                }
              ]
            },
            {
              title: "阶段二、实战-从零开发一个款类似今日头条的App-完结",
              slug: "App/阶段二、实战-从零开发一个款类似今日头条的App-完结",
              children: [
                {
                  title: "UIKit基础（第一期）",
                  slug: "App/UIKit基础（第一期）"
                },
                {
                  title: "UIKit基础（第二期）",
                  slug: "App/UIKit基础（第二期）"
                },
                {
                  title: "系统API( 第三期-1 )",
                  slug: "App/系统API( 第三期-1 )"
                },
                {
                  title: "系统API( 第三期-2 )",
                  slug: "App/系统API( 第三期-2 )"
                },
                {
                  title: "系统API( 第三期-3 )",
                  slug: "App/系统API( 第三期-3 )"
                },
                {
                  title: "高级操作 （第四期-1)",
                  slug: "App/高级操作 （第四期-1)"
                },
                {
                  title: "高级操作 （第四期-2)",
                  slug: "App/高级操作 （第四期-2)"
                },
                {
                  title: "最终操作 证书和上架（第五期）",
                  slug: "App/最终操作 证书和上架（第五期）"
                }
              ]
            },
            {
              title: "阶段三、Swift语法快速上手",
              slug: "App/阶段三、Swift语法快速上手",
              children: [
                {
                  title: "导读说明-swiftgg教程",
                  slug: "App/导读说明-swiftgg教程"
                }
              ]
            },
            {
              title: "阶段四、实战-Swift在美团的应用",
              slug: "App/阶段四、实战-Swift在美团的应用"
            },
            {
              title: "阶段五、滴滴团队在IOS开发领域的骚操作",
              slug: "App/阶段五、滴滴团队在IOS开发领域的骚操作"
            }
          ]
        }
      ],
      React: [
        {
          title: "阅读指南",
          slug: "React/阅读指南"
        },
        {
          title: "常用辅助工具",
          slug: "React/常用辅助工具"
        },
        {
          title: "基础第一部分-基础Code",
          slug: "React/基础第一部分-基础Code"
        },
        {
          title: "基础第二部分-组件封装骚操作",
          slug: "React/基础第二部分-组件封装骚操作"
        },
        {
          title: "基础第三部分-优化Diff算法",
          slug: "React/基础第三部分-优化Diff算法"
        },
        {
          title: "基础第四部分-router",
          slug: "React/基础第四部分-router"
        },
        {
          title: "基础第五部分-redux",
          slug: "React/基础第五部分-redux"
        },
        {
          title: "基础第六部分-Hooks",
          slug: "React/基础第六部分-Hooks"
        },
        {
          title: "官方骨灰教程（一）",
          slug: "React/官方骨灰教程（一）"
        },
        {
          title: "官方骨灰教程（二）",
          slug: "React/官方骨灰教程（二）"
        },
        {
          title: "官方骨灰教程（三）",
          slug: "React/官方骨灰教程（三）"
        },
        {
          title: "官方骨灰教程（四）",
          slug: "React/官方骨灰教程（四）"
        },
        {
          title: "官方骨灰教程（五）",
          slug: "React/官方骨灰教程（五）"
        },
        {
          title: "核心思想-1《React组件设计模式》",
          slug: "React/核心思想-1《React组件设计模式》"
        },
        {
          title: "核心思想-2《Ts下的组件设计终极奥义》",
          slug: "React/核心思想-2《Ts下的组件设计终极奥义》"
        },
        {
          title: "核心思想-3《Antd部分源码解读》",
          slug: "React/核心思想-3《Antd部分源码解读》"
        },
        {
          title: "hooks下的React设计指南",
          slug: "React/hooks下的React设计指南"
        },
        {
          title: "实战2：antPro深入（中台解决方案）",
          slug: "React/实战2：antPro深入（中台解决方案）"
        },
        {
          title: "实战1：TodoList - 仿一下微软的Todo",
          slug: "React/实战1：TodoList - 仿一下微软的Todo"
        },
        {
          title: "qiankun在umijs & Antd-Pro中的结合（小demo技术落地实践）",
          slug: "React/qiankun在umijs & Antd-Pro中的结合（小demo技术落地实践）"
        },
        {
          title: "qiankun在umijs & Antd-Pro中的结合( 公司内部系统实战 )",
          slug: "React/qiankun在umijs & Antd-Pro中的结合( 公司内部系统实战 )"
        },
        {
          title: "动效设计",
          slug: "React/动效设计"
        },
        {
          title: "Docusaurus文档设计工具react 类属于vuepross",
          slug: "React/Docusaurus文档设计工具react 类属于vuepross"
        },
        {
          title: "React深入&面试",
          slug: "React/React深入&面试"
        },
        {
          title: "阿里家的react生态的坑位",
          slug: "React/阿里家的react生态的坑位"
        },
        {
          title: "代码的构建方式",
          slug: "React/代码的构建方式"
        },
        {
          title: "React_PC编码风格指南",
          slug: "React/React_PC编码风格指南"
        },
        {
          title: "React源代码解析",
          slug: "React/React源代码解析"
        }
      ],
      Go: [
        {
          title: "Go语言基础知识教学",
          slug: "Go/Go语言基础知识教学",
          children: [
            {
              title: "一个完整的程序",
              slug: "Go/一个完整的程序"
            },
            {
              title: "包问题",
              slug: "Go/包问题"
            },
            {
              title: "数据类型",
              slug: "Go/数据类型"
            },
            {
              title: "运算符",
              slug: "Go/运算符"
            },
            {
              title: "条件运算符",
              slug: "Go/条件运算符"
            },
            {
              title: "循环运算符",
              slug: "Go/循环运算符"
            },
            {
              title: "函数",
              slug: "Go/函数"
            },
            {
              title: "作用域",
              slug: "Go/作用域"
            },
            {
              title: "Array",
              slug: "Go/Array"
            },
            {
              title: "Pointer （指针）",
              slug: "Go/Pointer （指针）"
            },
            {
              title: "struct",
              slug: "Go/struct"
            },
            {
              title: "string深入",
              slug: "Go/string深入"
            },
            {
              title: "slice切片",
              slug: "Go/slice切片"
            },
            {
              title: "面向对象",
              slug: "Go/面向对象"
            },
            {
              title: "range",
              slug: "Go/range"
            },
            {
              title: "Map",
              slug: "Go/Map"
            },
            {
              title: "Go语言中的递归",
              slug: "Go/Go语言中的递归"
            },
            {
              title: "类型转化",
              slug: "Go/类型转化"
            },
            {
              title: "接口",
              slug: "Go/接口"
            },
            {
              title: "异常处理",
              slug: "Go/异常处理"
            }
          ]
        },
        {
          title: "《GO入门系列-煎鱼》",
          slug: "Go/《GO入门系列-煎鱼》",
          children: [
            {
              title: "阶段一、HTTP应用 骨架构建",
              slug: "Go/阶段一、HTTP应用 骨架构建"
            },
            {
              title: "阶段二、HTTP应用 - 完善",
              slug: "Go/阶段二、HTTP应用 - 完善"
            },
            {
              title: "阶段三、PRC应用",
              slug: "Go/阶段三、PRC应用"
            },
            {
              title: "趟过的坑",
              slug: "Go/趟过的坑"
            }
          ]
        },
        {
          title: "《Go语言从入门到实战 - 蔡超》",
          slug: "Go/《Go语言从入门到实战 - 蔡超》",
          children: [
            {
              title: "基础内容",
              slug: "Go/基础内容"
            },
            {
              title: "关于函数Function",
              slug: "Go/关于函数Function"
            },
            {
              title: "Golang中的包依赖",
              slug: "Go/Golang中的包依赖"
            },
            {
              title: "关于协程和并发（核心）",
              slug: "Go/关于协程和并发（核心）"
            },
            {
              title: "单元测试",
              slug: "Go/单元测试"
            },
            {
              title: "反射和架构",
              slug: "Go/反射和架构"
            },
            {
              title: "Http服务和性能测试",
              slug: "Go/Http服务和性能测试"
            },
            {
              title: "面向恢复的设计模式",
              slug: "Go/面向恢复的设计模式"
            }
          ]
        },
        {
          title: "《Go语言核心36讲》",
          slug: "Go/《Go语言核心36讲》"
        },
        {
          title: "Go语言开发框架-Kotars",
          slug: "Go/Go语言开发框架-Kotars"
        },
        {
          title: "Go语言项目开发实战 - IAM系统 - （极客时间）",
          slug: "Go/Go语言项目开发实战 - IAM系统 - （极客时间）",
          children: [
            {
              title: "从0开始构建一个企业级的Go应用",
              slug: "Go/从0开始构建一个企业级的Go应用"
            },
            {
              title: "IAM系统概述：我们为什么要实现这样的一个Go项目，及其架构",
              slug: "Go/IAM系统概述：我们为什么要实现这样的一个Go项目，及其架构"
            },
            {
              title: "环境准备：配置和安装基础的Go开发环境",
              slug: "Go/环境准备：配置和安装基础的Go开发环境"
            },
            {
              title: "快速的部署IAM系统",
              slug: "Go/快速的部署IAM系统"
            },
            {
              title: "设计规范（上）：项目开发杂论无章，如何规范？",
              slug: "Go/设计规范（上）：项目开发杂论无章，如何规范？"
            },
            {
              title: "设计规范（下）：commit讯息如何规范？",
              slug: "Go/设计规范（下）：commit讯息如何规范？"
            },
            {
              title: "目录结构设计：如何组织一个可维护的，可扩展的代码目录",
              slug: "Go/目录结构设计：如何组织一个可维护的，可扩展的代码目录"
            },
            {
              title: "工作流设计：如何设计合理的多人开发模式",
              slug: "Go/工作流设计：如何设计合理的多人开发模式"
            },
            {
              title: "研发流程设计（上）：如何设计Go项目的开发流程",
              slug: "Go/研发流程设计（上）：如何设计Go项目的开发流程"
            },
            {
              title: "研发流程设计（下）：如何管理应用的生命周期？",
              slug: "Go/研发流程设计（下）：如何管理应用的生命周期？"
            }
          ]
        }
      ],
      Angular: [
        {
          title: "第一章 （基础的一些小的语法）",
          slug: "Angular/第一章 （基础的一些小的语法）",
          children: [
            {
              title: "一、项目的基础目录结构",
              slug: "Angular/一、项目的基础目录结构"
            },
            {
              title: "二、基础模板语法",
              slug: "Angular/二、基础模板语法"
            },
            {
              title: "三、该死的 各种指令",
              slug: "Angular/三、该死的 各种指令"
            }
          ]
        },
        {
          title: "第二章 （DI）",
          slug: "Angular/第二章 （DI）"
        },
        {
          title: "第三章（RXJS）",
          slug: "Angular/第三章（RXJS）"
        },
        {
          title: "第四章（路由守卫 & 各种守卫）",
          slug: "Angular/第四章（路由守卫 & 各种守卫）"
        },
        {
          title: "第五章 （各种表单）",
          slug: "Angular/第五章 （各种表单）"
        },
        {
          title: "第六章 （Hero小Demo）",
          slug: "Angular/第六章 （Hero小Demo）"
        },
        {
          title: "第七章（动画在ng中如何实现）",
          slug: "Angular/第七章（动画在ng中如何实现）"
        },
        {
          title: "第八章（实战-听书网）",
          slug: "Angular/第八章（实战-听书网）"
        },
        {
          title: "第九章（ngrx）",
          slug: "Angular/第九章（ngrx）"
        },
        {
          title: "第十章（其它扩展）",
          slug: "Angular/第十章（其它扩展）"
        }
      ],
      "善省": [
        {
          "title": "善省 - 个人成长与反思记录",
          "slug": "善省-main",
          "children": [
            {
              "title": "善省 - 第二十一期 (24年05月)",
              "slug": "善省/善省 - 第二十一期 (24年05月)"
            },
            {
              "title": "善省 - 第二十一期 (24年04月)",
              "slug": "善省/善省 - 第二十一期 (24年04月)"
            },
            {
              "title": "善省 - 第二十一期 (24年03月)",
              "slug": "善省/善省 - 第二十一期 (24年03月)"
            },
            {
              "title": "善省 - 第二十二期 (24年02月)",
              "slug": "善省/善省 - 第二十二期 (24年02月)"
            },
            {
              "title": "善省 - 第二十一期 (24年01月)",
              "slug": "善省/善省 - 第二十一期 (24年01月)"
            },
            {
              "title": "善省 - 第二十期 (23年12月)",
              "slug": "善省/善省 - 第二十期 (23年12月)"
            },
            {
              "title": "善省 - 第二十期 (23年11月)",
              "slug": "善省/善省 - 第二十期 (23年11月)"
            },
            {
              "title": "善省 - 第二十期 (23年10月)",
              "slug": "善省/善省 - 第二十期 (23年10月)"
            },
            {
              "title": "善省 - 第二十期 (23年9月)",
              "slug": "善省/善省 - 第二十期 (23年9月)"
            },
            {
              "title": "善省 - 第二十期 (23年8月)",
              "slug": "善省/善省 - 第二十期 (23年8月)"
            },
            {
              "title": "善省 - 第十九期 (23年7月)",
              "slug": "善省/善省 - 第十九期 (23年7月)"
            },
            {
              "title": "善省 - 第十八期 (23年6月)",
              "slug": "善省/善省 - 第十八期 (23年6月)"
            },
            {
              "title": "善省 - 第十七期 (23年5月)",
              "slug": "善省/善省 - 第十七期 (23年5月)"
            },
            {
              "title": "善省 - 第十六期 (23年4月)",
              "slug": "善省/善省 - 第十六期 (23年4月)"
            },
            {
              "title": "善省 - 第十五期 (23年3月)",
              "slug": "善省/善省 - 第十五期 (23年3月)"
            },
            {
              "title": "善省 - 第十四期 (23年2月)",
              "slug": "善省/善省 - 第十四期 (23年2月)"
            },
            {
              "title": "善省 - 第十三期 (23年1月)",
              "slug": "善省/善省 - 第十三期 (23年1月)"
            },
            {
              "title": "Summery 22年年终",
              "slug": "善省/Summery 22年年终"
            },
            {
              "title": "善省 - 第十二期 (22年12月)",
              "slug": "善省/善省 - 第十二期 (22年12月)"
            },
            {
              "title": "善省 - 第十一期 (22年11月)",
              "slug": "善省/善省 - 第十一期 (22年11月)"
            },
            {
              "title": "善省 - 第十期 (22年10月)",
              "slug": "善省/善省 - 第十期 (22年10月)"
            },
            {
              "title": "善省 - 第九期 (22年9月)",
              "slug": "善省/善省 - 第九期 (22年9月)"
            },
            {
              "title": "善省 - 第八期 (22年8月)",
              "slug": "善省/善省 - 第八期 (22年8月)"
            },
            {
              "title": "善省 - 第七期 (22年7月)",
              "slug": "善省/善省 - 第七期 (22年7月)"
            },
            {
              "title": "善省 - 第六期（22年6月）",
              "slug": "善省/善省 - 第六期（22年6月）"
            },
            {
              "title": "Summery 22年年中",
              "slug": "善省/Summery 22年年中"
            },
            {
              "title": "善省 - 第五期 (22年5月)",
              "slug": "善省/善省 - 第五期 (22年5月)"
            },
            {
              "title": "善省 - 第四期（22年4月）",
              "slug": "善省/善省 - 第四期（22年4月）"
            },
            {
              "title": "善省 - 第三期（22年3月）",
              "slug": "善省/善省 - 第三期（22年3月）"
            },
            {
              "title": "善省 - 第二期（22年2月）",
              "slug": "善省/善省 - 第二期（22年2月）"
            },
            {
              "title": "善省 - 第一期（22年1月）",
              "slug": "善省/善省 - 第一期（22年1月）"
            },
            {
              "title": "Summery 20年终",
              "slug": "善省/Summery 20年终"
            },
            {
              "title": "如何理解系统",
              "slug": "善省/如何理解系统"
            },
            {
              "title": "认知方法论_第二期 思维模式",
              "slug": "善省/认知方法论_第二期 思维模式"
            },
            {
              "title": "认知方法论_第一期",
              "slug": "善省/认知方法论_第一期"
            }
          ]
        }
      ],
      "拉钩教育大前端": [
        {
          title: "章节1——JavaScript深度解析",
          slug: "拉钩教育大前端/章节1——JavaScript深度解析",
          children: [
            {
              title: "阶段一、函数式编程 ，JS异步，手写Promise",
              slug: "拉钩教育大前端/阶段一、函数式编程 ，JS异步，手写Promise",
              children: [
                {
                  title: "任务一：函数式编程",
                  slug: "拉钩教育大前端/任务一：函数式编程"
                },
                {
                  title: "任务二：js异步编程",
                  slug: "拉钩教育大前端/任务二：js异步编程"
                },
                {
                  title: "任务三：手写Promise源代码",
                  slug: "拉钩教育大前端/任务三：手写Promise源代码"
                },
                {
                  title: "附件：一些简单的面试题",
                  slug: "拉钩教育大前端/附件：一些简单的面试题"
                }
              ]
            },
            {
              title: "阶段二、——ES新特性TS、JS性能",
              slug: "拉钩教育大前端/阶段二、——ES新特性TS、JS性能",
              children: [
                {
                  title: "任务一：ES",
                  slug: "拉钩教育大前端/任务一：ES"
                },
                {
                  title: "任务二：TS",
                  slug: "拉钩教育大前端/任务二：TS"
                },
                {
                  title: "任务三：JS性能优化",
                  slug: "拉钩教育大前端/任务三：JS性能优化"
                },
                {
                  title: "任务四：JS性能优化2",
                  slug: "拉钩教育大前端/任务四：JS性能优化2"
                }
              ]
            }
          ]
        },
        {
          title: "章节2——前端工程化",
          slug: "拉钩教育大前端/章节2——前端工程化",
          children: [
            {
              title: "阶段一、开发脚手架CLI，以及构建自动化工作流",
              slug: "拉钩教育大前端/阶段一、开发脚手架CLI，以及构建自动化工作流",
              children: [
                {
                  title: "任务一：什么是工程化",
                  slug: "拉钩教育大前端/任务一：什么是工程化"
                },
                {
                  title: "任务二：脚手架工具（创建一个自己的cli）",
                  slug: "拉钩教育大前端/任务二：脚手架工具（创建一个自己的cli）"
                },
                {
                  title: "任务三：自动化构建",
                  slug: "拉钩教育大前端/任务三：自动化构建"
                },
                {
                  title: "附件：作业构建一个自己的cli",
                  slug: "拉钩教育大前端/附件：作业构建一个自己的cli"
                }
              ]
            },
            {
              title: "阶段二、webpack专题",
              slug: "拉钩教育大前端/阶段二、webpack专题",
              children: [
                {
                  title: "一、模块化开发",
                  slug: "拉钩教育大前端/一、模块化开发"
                },
                {
                  title: "二、Webpack打包",
                  slug: "拉钩教育大前端/二、Webpack打包"
                },
                {
                  title: "三、其它打包工具",
                  slug: "拉钩教育大前端/三、其它打包工具"
                },
                {
                  title: "四、规范化标准",
                  slug: "拉钩教育大前端/四、规范化标准"
                },
                {
                  title: "五、webpack源码",
                  slug: "拉钩教育大前端/五、webpack源码"
                },
                {
                  title: "附件：作业",
                  slug: "拉钩教育大前端/附件：作业"
                }
              ]
            }
          ]
        },
        {
          title: "章节3——Vue",
          slug: "拉钩教育大前端/章节3——Vue",
          children: [
            {
              title: "阶段一、 Vue回顾-VueRouter-sanDOm-手写Vue",
              slug: "拉钩教育大前端/阶段一、 Vue回顾-VueRouter-sanDOm-手写Vue"
            },
            {
              title: "阶段二、Vue源码分析（响应式，虚拟DOM，模板编译额呵组件化）",
              slug: "拉钩教育大前端/阶段二、Vue源码分析（响应式，虚拟DOM，模板编译额呵组件化）"
            },
            {
              title: "阶段三、Vuex数据流管理与SSR",
              slug: "拉钩教育大前端/阶段三、Vuex数据流管理与SSR"
            },
            {
              title: "阶段四、构建自己的SSR SSG方案 封装组件库",
              slug: "拉钩教育大前端/阶段四、构建自己的SSR SSG方案 封装组件库"
            },
            {
              title: "阶段五、Vue3原理剖析",
              slug: "拉钩教育大前端/阶段五、Vue3原理剖析"
            },
            {
              title: "阶段六、Vue2 + VueX + TS实战",
              slug: "拉钩教育大前端/阶段六、Vue2 + VueX + TS实战"
            },
            {
              title: "阶段七、Vue3 + Vite + TS实战",
              slug: "拉钩教育大前端/阶段七、Vue3 + Vite + TS实战"
            }
          ]
        }
      ],
      "微信小程序开发": [
        {
          title: "第一天的简单入门",
          slug: "微信小程序开发/第一天的简单入门"
        },
        {
          title: "第二天的学习",
          slug: "微信小程序开发/第二天的学习"
        },
        {
          title: "第三天",
          slug: "微信小程序开发/第三天"
        },
        {
          title: "第四天",
          slug: "微信小程序开发/第四天"
        },
        {
          title: "项目开发（阶段1）",
          slug: "微信小程序开发/项目开发（阶段1）"
        }
      ],
      English: [
        {
          title: "公三 英语",
          slug: "English/公三 英语",
          children: [
            {
              title: "词汇入门篇",
              slug: "English/词汇入门篇"
            }
          ]
        },
        {
          title: "EF教育",
          slug: "English/EF教育",
          children: [
            {
              title: "初级5-第3单元【学会讲故事】",
              slug: "English/初级5-第3单元【学会讲故事】"
            },
            {
              title: "做决定",
              slug: "English/做决定"
            },
            {
              title: "初步的学习计划",
              slug: "English/初步的学习计划"
            },
            {
              title: "普通英语-阶段2 入门级",
              slug: "English/普通英语-阶段2 入门级"
            }
          ]
        },
        {
          title: "新概念",
          slug: "English/新概念",
          children: [
            {
              title: "基础音标",
              slug: "English/基础音标"
            },
            {
              title: "第一册",
              slug: "English/第一册",
              children: [
                {
                  title: "第四章节",
                  slug: "English/第四章节"
                },
                {
                  title: "第三章节",
                  slug: "English/第三章节"
                },
                {
                  title: "第二章节",
                  slug: "English/第二章节"
                },
                {
                  title: "第一章节",
                  slug: "English/第一章节"
                }
              ]
            },
            {
              title: "第二册",
              slug: "English/第二册"
            },
            {
              title: "第三册",
              slug: "English/第三册"
            },
            {
              title: "第四册",
              slug: "English/第四册"
            }
          ]
        }
      ],
      Diary: [
        {
          title: "2020-12-28日于南宁",
          slug: "Diary/2020-12-28日于南宁"
        },
        {
          title: "2020-12-29日于南宁",
          slug: "Diary/2020-12-29日于南宁"
        },
        {
          title: "2020-12-30日于长沙",
          slug: "Diary/2020-12-30日于长沙"
        },
        {
          title: "2020-12-31日于长沙",
          slug: "Diary/2020-12-31日于长沙"
        },
        {
          title: "2021-01-01日于长沙",
          slug: "Diary/2021-01-01日于长沙"
        },
        {
          title: "2021-01-02日于长沙",
          slug: "Diary/2021-01-02日于长沙"
        },
        {
          title: "2021-01-03日于长沙",
          slug: "Diary/2021-01-03日于长沙"
        },
        {
          title: "2022-09-10日于成都",
          slug: "Diary/2022-09-10日于成都"
        },
        {
          title: "2023-04-14日于成都",
          slug: "Diary/2023-04-14日于成都"
        },
        {
          title: "2025-12-12日于广州",
          slug: "Diary/2025-12-12日于广州"
        }
      ]
      //更多
    }
  }

} as const;

export function getEmail(): string {
  return Object.values(DATA.contact.social)
    .filter((social) => social.name === "Email")
    .map((social) => social.url)[0];
}
