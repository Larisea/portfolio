export interface Education {
  id: string
  date: string
  school: string
  degree: string
  description: string
}

export const education: Education[] = [
  {
    id: "1",
    date: "2022 - 2025",
    school: "河南大学",
    degree: "人工智能 · 硕士研究生",
    description: "研究方向为计算机视觉与深度学习，参与多项国家级科研项目。在读期间发表SCI论文2篇，熟练掌握PyTorch、TensorFlow等深度学习框架，具备扎实的机器学习理论基础和工程实践能力。",
  },
  {
    id: "2",
    date: "2018 - 2022",
    school: "河北地质大学",
    degree: "软件工程 · 本科",
    description: "系统学习软件开发全流程，涵盖数据结构、算法设计、数据库原理、Web开发等核心课程。在校期间多次获得奖学金，积极参与编程竞赛和开源项目，培养了扎实的编程能力和团队协作精神。",
  },
]
