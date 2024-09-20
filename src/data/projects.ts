export const categories = ["All", "Languages", "Systems", "AI/ML", "Web Development", "Miscellaneous"];

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
      category: "Languages",
      githubLink: "https://github.com/mvishiu11/RustyLox",
      demoLink: "https://mvishiu11.github.io/rustylox-playground/",
      manual: "yes" as const,
    },
    {
      id: 2,
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
      manual: "yes" as const,
    },
    // Add more projects as needed
  ];
  