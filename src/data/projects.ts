export const categories = ["All", "Systems", "AI/ML", "Web Development"]

export const projects = [
    {
      id: 1,
      title: "RustyLox",
      description: "An interpreter for the Lox language, built in Rust.",
      overview: "RustyLox is a Rust-based implementation of the Lox programming language from 'Crafting Interpreters.'",
      technologies: ["Rust", "Git"],
      features: [
        "Full implementation of Lox language syntax",
        "REPL (Read-Eval-Print Loop) support",
        "Efficient memory management using Rust"
      ],
      category: "Systems",
      githubLink: "https://github.com/mvishiu11/RustyLox",
      demoLink: "https://mvishiu11.github.io/rustylox-playground/",
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "A deep learning model that generates images from text descriptions.",
      overview: "An AI model that uses neural networks to generate images from textual input.",
      technologies: ["Python", "PyTorch", "React"],
      features: [
        "Text-to-image generation",
        "Supports multiple styles of image output",
        "Built-in pre-trained models for quick use"
      ],
      category: "AI/ML",
      githubLink: "https://github.com/yourusername/AIImageGenerator",
      demoLink: null,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
      overview: "A personal website showcasing projects, skills, and contact information.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      features: [
        "Responsive design for all screen sizes",
        "Dynamic routing with Next.js",
        "Contact form with email integration"
      ],
      githubLink: "https://github.com/mvishiu11/jakub-muszynski",
      demoLink: null,
      category: "Web Development",
    },
    // Add more projects as needed
  ];
  