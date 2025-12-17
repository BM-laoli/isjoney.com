import { Icons } from "@/components/icons";

export const BLUR_FADE_DELAY = 0.05;

export const DATA = {
  // Website data
  url: "https://iamjoney.com/",
  lastUpdated: "Oct 2025",
  avatarUrl: "/me.png", //@TODO: 需要换
  navbar: [ // @TODO: 需要换
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "/product", icon: Icons.fileuser, label: "CV" }, // Personal Produces
    { href: "/blog", icon: Icons.notebook, label: "Blog" }, // blog
    { href: "/resume.pdf", icon: Icons.fileuser, label: "CV" },
  ],
  // Blog info
  blogDescription: // @TODO:需要换
    "Thoughts on AI, software, life and more. Short notes and longer write-ups.",
  blogCharacter: "Z", // @TODO:需要换
  blogInfo: {  // @TODO:需要换 blog 可以不用要了 链接到另外的地方去
    // For OpenGraph image gener ation
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
  name:"Joney Li",
  // Generel data
  subtitle: "Game Developer(UE4) & Full Stack Architect(React)",
  description: "Crafting Immersive Worlds with Engineering Precision\n Unreal Engine C++ | React | Nodejs | .NET Core",
  summary:
    "Hi, I'm Joney👋, an **Independent Game Developer** with a unique engineering DNA. I bridge the gap between high-fidelity **Game Development** and scalable **Full Stack Architecture**.\n\ \n My journey evolved from a solid background in enterprise software (**React & .NET Core**) to mastering **Unreal Engine 4**. This cross-disciplinary expertise allows me to not only craft immersive gameplay using **C++**, but also engineer robust backend systems and custom pipeline tools that power them. I bring the rigor of web architecture to the creative chaos of game development.\n \n I earned my B.Sc. in Computer Science from ![NKU Logo](/icon/nku.png) [Nankai University](https://www.nankai.edu.cn/) (NKU). Currently, I operate as a freelancer, leveraging my hybrid skillset to build connected games and interactive 3D solutions. You can see my work in my [Portfolio](./portfolio).\n \n 🛠 **Tech Stack:** **Unreal Engine 4** (C++ Gameplay/Slate), **.NET Core** (Game Server/Backend), **React** (Web/Tools UI), HLSL.",
  surname: "Li",
  firstName: "Joney",
  initials: "J.S",
  location: "Singapore/China-Chendu",
  locationLink: "https://www.google.com/maps/place/Chendu",
  // Chinese general data
  chinese: {
    name: "李仕增",
    subtitle: "游戏开发者(UE4) & 全栈架构师(React)",
    description: "用工程师的严谨打造沉浸式世界\n Unreal Engine C++ | React | Nodejs | .NET Core",
    summary:
      "你好，我是李仕增👋，一位独立游戏开发者，拥有独特的工程背景。我擅长将高保真游戏开发与可扩展的全栈架构相结合。\n\n我的旅程从扎实的企业软件背景（React & .NET Core）开始，到掌握Unreal Engine 4。这种跨学科的专业知识使我不仅能够使用C++打造沉浸式的游戏体验，还能构建稳健的后端系统和自定义的流水线工具来支持它们。我将Web架构的严谨性带入了游戏开发的创造性混沌中。\n\n我获得了南开大学计算机科学学士学位。目前，我作为自由职业者运营，利用我的混合技能集来构建连接的游戏和交互式3D解决方案。你可以在我的[作品集](./portfolio)中看到我的作品。\n\n🛠 **技术栈：** **Unreal Engine 4** (C++ Gameplay/Slate), **.NET Core** (Game Server/Backend), **React** (Web/Tools UI), HLSL。",
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
        url: "mailto::bmlishizeng@gmail.com",
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
      date: "2025.8",
      title: "[VideoOcean Agent](https://video-ocean.com/en/agent) Online",
      content:
        "🌊 VideoOcean Agent is now online! Generate videos up to minutes with a few clicks.",
    },
    {
      date: "2025.5",
      title: "Ph.D. Graduated",
      content:
        "🎓 Graduated from [HPC-AI @ NUS](https://ai.comp.nus.edu.sg/). Thanks to my supervisor and friends' help!",
    },
    // {
    //   date: "2025.3",
    //   title:
    //     "[Open-Sora 2.0](https://arxiv.org/abs/2503.09642) [![GitHub Repo stars](https://img.shields.io/github/stars/hpcaitech/Open-Sora?style=social)](https://github.com/hpcaitech/Open-Sora) Released!",
    //   content:
    //     "🚀 Despite constrained computational resources, it achieves Sora-level metrics, fulfilling our goal of providing an open-source implementation of Sora.",
    // },
    // {
    //   date: "2024.9",
    //   title:
    //     "Paper Accepted ([MSIER](https://arxiv.org/abs/2404.12866), EMNLP 2024)",
    //   content:
    //     "📘 Got one paper accepted to EMNLP 2024. Congratulations to [Yang Luo](https://yangluo7.github.io/)!",
    // },
    // {
    //   date: "2024.9",
    //   title: "[VideoOcean](https://video-ocean.com/en/app) Online",
    //   content:
    //     "🌊 VideoOcean is now online! Generate your own video with a few clicks.",
    // },
    // {
    //   date: "2024.6",
    //   title:
    //     "Paper Accepted ([Dataset Growth](https://arxiv.org/pdf/2405.18347), ECCV 2024)",
    //   content:
    //     "📘 Got one paper accepted to ECCV 2024. Congratulations to [Ziheng Qin](https://scholar.google.com/citations?user=I04VhPMAAAAJ)!",
    // },
    // {
    //   date: "2024.6",
    //   title: "[Open-Sora 1.2](https://github.com/hpcaitech/Open-Sora) Released",
    //   content: "🚀 A 1.1B model on >30M data with improved performance.",
    // },
    // {
    //   date: "2024.5",
    //   title:
    //     "Paper Accepted ([Token Crisis](https://arxiv.org/pdf/2305.13230), ICML 2024)",
    //   content:
    //     "📘 Got one paper accepted to ICML 2024. Congratulations to [Fuzhao Xue](https://xuefuzhao.github.io/)!",
    // },
    // {
    //   date: "2024.4",
    //   title: "[Open-Sora 1.1](https://github.com/hpcaitech/Open-Sora) Released",
    //   content:
    //     "🚀 Support 0s~15s, 144p to 720p, various aspect ratios videos generation, plus a data processing pipeline.",
    // },
    // {
    //   date: "2024.4",
    //   title:
    //     "Paper Accepted ([Helen optimizer](https://arxiv.org/pdf/2403.00798), WWW 2024)",
    //   content:
    //     "📘 Got one paper accepted to WWW 2024. Congratulations to [Zirui Zhu](https://scholar.google.com/citations?user=eCAzecoAAAAJ&hl)!",
    // },
    // {
    //   date: "2024.3",
    //   title: "[Open-Sora 1.0](https://github.com/hpcaitech/Open-Sora) Released",
    //   content: "🎥 The first open-source Sora-like video generation model.",
    // },
    // {
    //   date: "2024.1",
    //   title:
    //     "Paper Accepted ([InfoBatch](https://arxiv.org/pdf/2303.04947), ICLR 2024 Oral)",
    //   content:
    //     "🎉 Got one paper accepted to ICLR 2024 (oral). Congratulations to [Ziheng Qin](https://scholar.google.com/citations?user=I04VhPMAAAAJ) and [Kai Wang](https://kaiwang960112.github.io/)!",
    // },
    // {
    //   date: "2023.9",
    //   title:
    //     "Papers Accepted (first-authored [Sequence-Scheduling](https://arxiv.org/pdf/2305.13144), NeurIPS 2023)",
    //   content:
    //     "🔥 Got two papers accepted to NeurIPS 2023. Cong to [Fuzhao Xue](https://xuefuzhao.github.io/) and myself. So many thanks to my collaborators!",
    // },
    // {
    //   date: "2023.7",
    //   title:
    //     "Paper Accepted (first-authored  [ZSCL](https://arxiv.org/pdf/2303.06628), ICCV 2023)",
    //   content:
    //     "📄 Got one first-authored paper accepted to ICCV 2023. Thanks to all my collaborators!",
    // },
    // {
    //   date: "2023.7",
    //   title:
    //     "Award ([CAME optimizer](https://arxiv.org/abs/2307.02047), [ACL Outstanding Paper](https://2023.aclweb.org/program/best_papers/))",
    //   content: "🏅 The CAME paper won the ACL Outstanding Paper Award!",
    // },
    // {
    //   date: "2023.5",
    //   title:
    //     "Paper Accepted ([CAME optimizer](https://arxiv.org/abs/2307.02047), ACL 2023)",
    //   content:
    //     "📘 Got one paper accepted to ACL 2023. Congratulations to [Yang Luo](https://yangluo7.github.io/)!",
    // },
    // {
    //   date: "2023.4",
    //   title:
    //     "Paper Accepted ([Bamboo](https://proceedings.mlr.press/v202/xue23b.html), ICML 2023)",
    //   content:
    //     "📘 Got one paper accepted to ICML 2023. Congratulations to [Fuzhao Xue](https://xuefuzhao.github.io/)!",
    // },
    // {
    //   date: "2023.3",
    //   title:
    //     "[ColossalChat](https://github.com/hpcaitech/ColossalAI/tree/main/applications/Chat) [![GitHub Repo Stars](https://img.shields.io/github/stars/hpcaitech/ColossalAI?style=social)](https://github.com/hpcaitech/ColossalAI/tree/main/applications/ColossalChat) Released",
    //   content:
    //     "🤖 Open-sourced LLM training framework for you to train your own version of ChatGPT. Congratulations to colleagues at HPC-AI-Tech!",
    // },
    // {
    //   date: "2023.2",
    //   title:
    //     "Award ([CowClip optimizer](https://arxiv.org/abs/2204.06240), [AAAI Distinguished Paper](https://aaai-23.aaai.org/wp-content/uploads/2023/02/AAAI-23-Paper-Awards-1.pdf))",
    //   content: "🥇 The CowClip paper won the AAAI Distinguished Paper Award!",
    // },
    // {
    //   date: "2022.12",
    //   title: "Ph.D. Qualifying Exam Passed",
    //   content:
    //     "🎓 Passed the qualifying exam. Cong to myself :) and thanks for my supervisor and friends’ help!",
    // },
    // {
    //   date: "2022.11",
    //   title:
    //     "Paper Accepted (first-authored [CowClip optimizer](https://arxiv.org/abs/2204.06240), AAAI 2023)",
    //   content:
    //     "📑 Got one first-authored paper accepted to AAAI 2023. Thanks to all my collaborators!",
    // },
    // {
    //   date: "2021.8",
    //   title:
    //     "[NJU-CSE-Flyers Handbook](https://nju-cse-flyers.github.io/) Published",
    //   content: "📘 The NJU-CSE-Flyers Handbook 2021 has been published.",
    // },
    // {
    //   date: "2021.7",
    //   title: "Internship at ByteDance",
    //   content: "💼 Happy to start my internship in ByteDance.",
    // },
    // {
    //   date: "2021.6",
    //   title: "Graduated from [Nanjing University](https://www.nju.edu.cn/)",
    //   content:
    //     "🎓 Bacheror's degree from Nanjing University. Thanks and good luck to all my teachers and classmates.",
    // },
    // {
    //   date: "2021.3",
    //   title: "Joined [HPC-AI @ NUS](https://ai.comp.nus.edu.sg/) Ph.D. Program",
    //   content:
    //     "📚 I will join HPC-AI @ NUS to start my Ph.D. degree under the supervision of Presidential Young Prof. [Yang You](https://www.comp.nus.edu.sg/~youy/)!",
    // },
    // {
    //   date: "2021.2",
    //   title:
    //     "Paper Accepted (co-first-authored [PCS-FUDA](https://arxiv.org/pdf/2103.16765), CVPR 2021)",
    //   content:
    //     "📑 Got one co-first-authored paper accepted to CVPR 2021. Thanks to all my collaborators!",
    // },
  ],
  // Projects 这里是所有作品 我们可以 link 到不同的页面去和子 域名上去 #TODO:
  projects: [
    {
      title: "Open-Sora",
      href: "https://github.com/hpcaitech/Open-Sora",
      dates: "Mar. 2024 - Mar. 2025",
      active: true,
      description:
        "The world’s first open-source Sora-like video generation model — bringing efficient, high-quality video production to everyone.",
      technologies: [],
      authors: "",
      links: [
        {
          type: "Github",
          href: "https://github.com/hpcaitech/Open-Sora",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Open-Sora 1.2",
          href: "https://arxiv.org/abs/2412.20404",
          icon: <Icons.paper className="size-3" />,
        },
        {
          type: "Open-Sora 2.0",
          href: "https://arxiv.org/abs/2503.09642",
          icon: <Icons.paper className="size-3" />,
        },
      ],
      image: "/proj-open-sora.png",
      video: "",
    },
    {
      title: "VideoOcean Video Agent",
      href: "https://video-ocean.com/en/agent",
      dates: "Jun. 2025 - Present",
      active: true,
      description:
        "VideoOcean Video Agent generates videos up to minutes with a few clicks, including voice and face.",
      technologies: [],
      authors: "",
      links: [
        {
          type: "Website",
          href: "https://video-ocean.com/en/agent",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://files.zangwei.dev/proj-video-agent.mp4",
    },
    // {
    //   title: "VideoOcean",
    //   href: "https://video-ocean.com/app",
    //   dates: "April 2025 - Present",
    //   active: true,
    //   description:
    //     "VideoOcean is a video generation platform that allows you to generate videos, images and audios with state-of-the-art models.",
    //   technologies: [],
    //   authors: "",
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://video-ocean.com/app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/proj-video-ocean.png",
    //   video: "",
    // },
    // {
    //   title: "ColossalChat",
    //   href: "https://github.com/hpcaitech/ColossalAI/tree/main/applications/ColossalChat",
    //   dates: "Mar. 2023",
    //   active: true,
    //   description:
    //     "ColossalChat is a project to implement LLM with RLHF, powered by the Colossal-AI.",
    //   technologies: [],
    //   authors: "",
    //   links: [
    //     {
    //       type: "Github",
    //       href: "https://github.com/hpcaitech/ColossalAI/tree/main/applications/ColossalChat",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //     {
    //       type: "Blog",
    //       href: "https://medium.com/pytorch/colossalchat-an-open-source-solution-for-cloning-chatgpt-with-a-complete-rlhf-pipeline-5edf08fb538b",
    //       icon: <Icons.newspaper className="size-3" />,
    //     },
    //   ],
    //   image: "/proj-colossalchat.png",
    //   video: "",
    // },
    // {
    //   title: "Instruction in the Wild",
    //   href: "https://github.com/XueFuzhao/InstructionWild",
    //   dates: "Apr. 2024",
    //   active: true,
    //   description:
    //     "This project focuses on building a larger and more diverse instruction dataset by collecting 110K instructions from shared ChatGPT usage.",
    //   technologies: [],
    //   authors: "",
    //   links: [
    //     {
    //       type: "Github",
    //       href: "https://github.com/XueFuzhao/InstructionWild",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/proj-inst-wild.png",
    //   video: "",
    // },
    // {
    //   title: "Sequence Schedule",
    //   href: "https://arxiv.org/abs/2305.13144",
    //   dates: "NeurIPS 2023",
    //   active: true,
    //   description:
    //     "Discovered that LLMs can foresee their response length — leading to Sequence Scheduling, an efficient LLM batch inference technique.",
    //   technologies: [],
    //   authors:
    //     "**Authors:** **Zangwei Zheng**, Xiaozhe Ren, Fuzhao Xue, Yang Luo, Xin Jiang, Yang You",
    //   links: [
    //     {
    //       type: "Paper",
    //       href: "https://arxiv.org/abs/2305.13144",
    //       icon: <Icons.paper className="size-3" />,
    //     },
    //     {
    //       type: "Github",
    //       href: "https://github.com/zhengzangw/Sequence-Scheduling",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/proj-sequence-schedule.png",
    //   video: "",
    // },
    // {
    //   title: "Zero-Shot Continual Learning",
    //   href: "https://arxiv.org/abs/2303.06628",
    //   dates: "ICCV 2023",
    //   active: true,
    //   description:
    //     "A new benchmark and method to mitigate forgetting problem existed in the continual learning of large pretrained vision-language models.",
    //   technologies: [],
    //   authors:
    //     "**Authors:** **Zangwei Zheng**, Mingyuan Ma, Kai Wang, Ziheng Qin, Xiangyu Yue, Yang You",
    //   links: [
    //     {
    //       type: "Paper",
    //       href: "https://arxiv.org/abs/2303.06628",
    //       icon: <Icons.paper className="size-3" />,
    //     },
    //     {
    //       type: "Github",
    //       href: "https://github.com/Thunderbeee/ZSCL",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/proj-zscl.png",
    //   video: "",
    // },
    // {
    //   title: "CowClip Optimizer",
    //   href: "https://arxiv.org/abs/2204.06240",
    //   dates: "AAAI 2023",
    //   active: true,
    //   description:
    //     "An optimizer that can train CTR prediction models with large batch (~128k)",
    //   technologies: [],
    //   authors:
    //     "**Authors:** **Zangwei Zheng**, Pengtai Xu, Xuan Zou, Da Tang, Zhen Li, Chenguang Xi, Peng Wu, Leqi Zou, Yijie Zhu, Ming Chen, Xiangzhuo Ding, Fuzhao Xue, Ziheng Qin, Youlong Cheng, Yang You",
    //   links: [
    //     {
    //       type: "Paper",
    //       href: "https://arxiv.org/abs/2204.06240",
    //       icon: <Icons.paper className="size-3" />,
    //     },
    //     {
    //       type: "Github",
    //       href: "https://github.com/bytedance/LargeBatchCTR",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/proj-cowclip.png",
    //   video: "",
    // },
    // {
    //   title: "PCS Learning",
    //   href: "https://arxiv.org/abs/2103.16765",
    //   dates: "CVPR 2021",
    //   active: true,
    //   description:
    //     "An end-to-end Prototypical Cross-domain Self-Supervised Learning (PCS) framework for Few-shot Unsupervised Domain Adaptation (FUDA).",
    //   technologies: [],
    //   authors:
    //     "**Authors:** Xiangyu Yue, **Zangwei Zheng** (co-first-author), Shanghang Zhang, Yang Gao, Trevor Darrell, Kurt Keutzer, Alberto Sangiovanni Vincentelli",
    //   links: [
    //     {
    //       type: "Paper",
    //       href: "https://arxiv.org/abs/2103.16765",
    //       icon: <Icons.paper className="size-3" />,
    //     },
    //     {
    //       type: "Blog",
    //       href: "https://xyue.io/pcs-fuda/index.html",
    //       icon: <Icons.newspaper className="size-3" />,
    //     },
    //     {
    //       type: "Github",
    //       href: "https://github.com/zhengzangw/PCS-FUDA",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/proj-pcs-fuda.png",
    //   video: "",
    // },
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
  // Discover (footer)
  discover: [
    {
      name: "HPC-AI Lab",
      url: "https://ai.comp.nus.edu.sg/",
    },
    {
      name: "NJU-CSE-Flyers",
      url: "https://nju-cse-flyers.github.io/",
    },
    {
      name: "Open-Sora",
      url: "https://github.com/hpcaitech/Open-Sora",
    },
    {
      name: "Video Ocean",
      url: "https://video-ocean.com/en/app",
    },
  ],
  // Fun facts
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
} as const;

export function getEmail(): string {
  return Object.values(DATA.contact.social)
    .filter((social) => social.name === "Email")
    .map((social) => social.url)[0];
}
