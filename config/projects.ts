export interface Project {
  id: string
  date: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: "1",
    date: "2025",
    title: "Brand Identity System",
    description: "Complete visual identity for a tech startup including logo, color system, typography guidelines, and marketing collateral. Built a cohesive design language that scales across digital and print.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    tags: ["Branding", "UI/UX", "Figma"],
  },
  {
    id: "2",
    date: "2024",
    title: "Mobile App Design",
    description: "Health tracking app with intuitive interface and data visualization. Designed end-to-end user flow from onboarding to daily tracking, with a focus on motivation through visual progress.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["Mobile", "Prototyping", "Blender"],
  },
  {
    id: "3",
    date: "2023",
    title: "Web Platform Redesign",
    description: "E-commerce platform redesign improving conversion by 40%. Introduced a design system with reusable components, streamlining the team's workflow and ensuring visual consistency.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tags: ["Web", "Design System", "React"],
  },
]
