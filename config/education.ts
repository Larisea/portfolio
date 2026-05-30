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
    date: "2020 - 2024",
    school: "University of Arts London",
    degree: "Bachelor of Design (Hons)",
    description: "Studied visual communication, interactive media, and design thinking. Graduated with First Class Honours. Final year project explored the intersection of AI and generative design.",
  },
  {
    id: "2",
    date: "2022",
    school: "Google UX Design Certificate",
    degree: "Professional Certificate",
    description: "Completed Google's UX Design Professional Certificate program, mastering user research, wireframing, prototyping, and usability testing methodologies.",
  },
  {
    id: "3",
    date: "2021",
    school: "Coursera - Interactive Design",
    degree: "Specialization",
    description: "Completed a 3-course specialization covering motion design, micro-interactions, and advanced CSS animations for web interfaces.",
  },
]
