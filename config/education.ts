export interface Education {
  id: string
  date: string
  school: { en: string; cn: string }
  degree: { en: string; cn: string }
  description: { en: string; cn: string }
}

export const education: Education[] = [
  {
    id: "1",
    date: "2022 - 2025",
    school: {
      en: "Henan University",
      cn: "河南大学",
    },
    degree: {
      en: "Artificial Intelligence · Master",
      cn: "人工智能 · 硕士研究生",
    },
    description: {
      en: "Research focus on computer vision and deep learning. Participated in multiple national research projects. Published 2 SCI papers. Proficient in PyTorch, TensorFlow and other deep learning frameworks with solid theoretical foundation and engineering practice.",
      cn: "研究方向为计算机视觉与深度学习，参与多项国家级科研项目。在读期间发表SCI论文2篇，熟练掌握PyTorch、TensorFlow等深度学习框架，具备扎实的机器学习理论基础和工程实践能力。",
    },
  },
  {
    id: "2",
    date: "2018 - 2022",
    school: {
      en: "Hebei GEO University",
      cn: "河北地质大学",
    },
    degree: {
      en: "Software Engineering · Bachelor",
      cn: "软件工程 · 本科",
    },
    description: {
      en: "Comprehensive study of software development lifecycle including data structures, algorithm design, database principles, and web development. Received scholarships multiple times, actively participated in programming competitions and open-source projects.",
      cn: "系统学习软件开发全流程，涵盖数据结构、算法设计、数据库原理、Web开发等核心课程。在校期间多次获得奖学金，积极参与编程竞赛和开源项目，培养了扎实的编程能力和团队协作精神。",
    },
  },
]
