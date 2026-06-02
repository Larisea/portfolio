export interface Project {
  id: string
  date: string
  title: { en: string; cn: string }
  description: { en: string; cn: string }
  image: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: "1",
    date: "2025",
    title: {
      en: "Brand Identity System",
      cn: "品牌视觉系统",
    },
    description: {
      en: "Complete visual identity for a tech startup including logo, color system, typography guidelines, and marketing collateral. Built a cohesive design language that scales across digital and print.",
      cn: "为科技初创公司打造完整的视觉识别系统，包括标志、色彩体系、字体规范和营销物料。构建了可跨数字和印刷媒体扩展的统一设计语言。",
    },
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    tags: ["Branding", "UI/UX", "Figma"],
  },
  {
    id: "2",
    date: "2024",
    title: {
      en: "Mobile App Design",
      cn: "移动应用设计",
    },
    description: {
      en: "Health tracking app with intuitive interface and data visualization. Designed end-to-end user flow from onboarding to daily tracking, with a focus on motivation through visual progress.",
      cn: "健康追踪应用，具有直观的界面和数据可视化功能。设计了从注册到日常追踪的端到端用户流程，注重通过可视化进度激励用户。",
    },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["Mobile", "Prototyping", "Blender"],
  },
  {
    id: "3",
    date: "2023",
    title: {
      en: "Web Platform Redesign",
      cn: "网站平台重设计",
    },
    description: {
      en: "E-commerce platform redesign improving conversion by 40%. Introduced a design system with reusable components, streamlining the team's workflow and ensuring visual consistency.",
      cn: "电商平台重设计，转化率提升40%。引入了可复用组件的设计系统，优化了团队工作流程并确保视觉一致性。",
    },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tags: ["Web", "Design System", "React"],
  },
]
