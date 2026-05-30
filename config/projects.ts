export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

// Row 1 - scrolls left
export const carouselRow1: Project[] = [
  {
    id: "1",
    title: "Brand Identity System",
    description: "Complete visual identity for a tech startup",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop",
    tags: ["Branding", "UI/UX"],
  },
  {
    id: "2",
    title: "Mobile App Design",
    description: "Health tracking app with intuitive interface",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop",
    tags: ["Mobile", "Fintech"],
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop",
    tags: ["Web", "E-commerce"],
  },
  {
    id: "4",
    title: "Dashboard Analytics",
    description: "Data visualization dashboard for business insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
    tags: ["Dashboard", "Data Viz"],
  },
  {
    id: "5",
    title: "Social Media App",
    description: "Community platform for creative professionals",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop",
    tags: ["Social", "Mobile"],
  },
]

// Row 2 - scrolls right
export const carouselRow2: Project[] = [
  {
    id: "6",
    title: "Design System",
    description: "Scalable component library for SaaS platform",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=600&fit=crop",
    tags: ["Design System", "Components"],
  },
  {
    id: "7",
    title: "Travel Booking",
    description: "Flight and hotel booking platform with AI recommendations",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop",
    tags: ["Travel", "AI"],
  },
  {
    id: "8",
    title: "Music Streaming",
    description: "Audio platform with personalized playlists",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=600&fit=crop",
    tags: ["Music", "Streaming"],
  },
  {
    id: "9",
    title: "Fitness Tracker",
    description: "Workout logging and progress visualization",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    tags: ["Fitness", "Health"],
  },
  {
    id: "10",
    title: "Recipe Platform",
    description: "Cooking community with step-by-step video guides",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=600&fit=crop",
    tags: ["Food", "Community"],
  },
]

// Row 3 - scrolls left
export const carouselRow3: Project[] = [
  {
    id: "11",
    title: "Crypto Wallet",
    description: "Secure digital asset management with DeFi integration",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=600&fit=crop",
    tags: ["Crypto", "Fintech"],
  },
  {
    id: "12",
    title: "Learning Platform",
    description: "Online courses with interactive coding exercises",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=600&fit=crop",
    tags: ["Education", "EdTech"],
  },
  {
    id: "13",
    title: "Real Estate",
    description: "Property listing platform with virtual tours",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop",
    tags: ["Real Estate", "3D"],
  },
  {
    id: "14",
    title: "Portfolio Template",
    description: "Minimal portfolio for creative professionals",
    image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=600&h=600&fit=crop",
    tags: ["Template", "Portfolio"],
  },
  {
    id: "15",
    title: "Chat Application",
    description: "Real-time messaging with end-to-end encryption",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=600&fit=crop",
    tags: ["Chat", "Real-time"],
  },
]

// For the Work section list view
export const projects = [
  {
    index: "01",
    title: "Brand Identity System",
    description: "Complete visual identity for a tech startup",
  },
  {
    index: "02",
    title: "Mobile App Design",
    description: "Health tracking app with intuitive interface",
  },
  {
    index: "03",
    title: "Web Platform Redesign",
    description: "E-commerce platform redesign improving conversion",
  },
  {
    index: "04",
    title: "Design System",
    description: "Scalable component library for SaaS platform",
  },
]
