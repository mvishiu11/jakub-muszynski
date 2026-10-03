// Home-page content. Posts live in src/content/posts.

export const site = {
  name: "Jakub Muszyński",
  url: "https://jakubmuszynski.eu",
  description:
    "Engineer and founder in Warsaw. Hard things, done right: detector software, model inference, risk systems, and companies of my own.",
  email: "jakub.m.muszynski@gmail.com",
  links: {
    github: "https://github.com/mvishiu11",
    linkedin: "https://linkedin.com/in/jakub-muszyński-51133a273",
    orcid: "https://orcid.org/0009-0000-2797-6044",
  },
};

export type Entry = { when: string; title: string; sub: string; body: string };

export const now: Entry[] = [
  {
    when: "2025–",
    title: "EnergyScope",
    sub: "Co-founder, CTO",
    body: "An AI energy operator for Polish factories. I lead the edge hardware, the forecasting platform and the battery dispatch behind it.",
  },
  {
    when: "2025–",
    title: "Point72",
    sub: "Software Engineer, Risk Technology",
    body: "Production systems across risk, quantitative research and trading, where latency and correctness both matter. Joined as an intern, full-time since January 2026.",
  },
  {
    when: "2026–",
    title: "Warsaw University of Technology",
    sub: "M.Sc., individual studies",
    body: "With Prof. Maria Ganzha. Digital twins of real industrial sites, with explanations built into every decision the twin makes.",
  },
];

export const work: Entry[] = [
  {
    when: "2025–26",
    title: "CERN",
    sub: "ALICE Experiment, Geneva",
    body: "Associated Member of Personnel. Production C++ in the experiment's real-time data-quality system: aging monitoring and ADC-to-MIP calibration for the Fast Interaction Trigger, and its geometry in the event display.",
  },
  {
    when: "2024",
    title: "TSMC",
    sub: "AI Application & Integration, Hsinchu",
    body: "LLM inference with vLLM, tensor parallelism and CPU offloading. A full-stack defect-analysis tool built on fab data.",
  },
  {
    when: "2024–25",
    title: "MedWave",
    sub: "Co-founder, CTO",
    body: "Clinical notes from speech: streaming recognition plus LLM summarisation. Funded by a university innovation grant, national Enactus champion, top 16 at the World Cup in Bangkok.",
  },
  {
    when: "2022–26",
    title: "Warsaw University of Technology",
    sub: "B.Sc. Computer Science",
    body: "Highest honours, GPA 4.70 out of 5. Thesis on explainability for multimodal, multilingual models, graded 5.0.",
  },
];

export type Link = { label: string; href: string };
export type Cell = { label: string; title: string; href?: string; body: string; links?: Link[] };

export const research: Cell[] = [
  {
    label: "ACL 2026 | System Demonstrations",
    title: "mllm-shap: A Shapley Value Explainability Platform for Text-Audio Multimodal Large Language Models",
    href: "https://aclanthology.org/2026.acl-demo.38/",
    body: "Muszyński, Pozorski, Ganzha. First author, presented in San Diego.",
  },
  {
    label: "BDA 2025 | Springer LNCS",
    title: "EnergyTwin: A Multi-Agent System for Simulating and Coordinating Energy Microgrids",
    href: "https://link.springer.com/chapter/10.1007/978-3-032-23241-0_10",
    body: "Muszyński, Walużenicz, Zan, Wrona, Ganzha, Paprzycki, Bădică. First and corresponding author.",
  },
  {
    label: "MIDI 2025",
    title: "Proposal of an AI-Based Support Assistant for the ALICE-FIT Detector Setup at CERN",
    href: "https://arxiv.org/abs/2511.17154",
    body: "Mermer, Muszyński, Możaryn, Rosłon.",
  },
  {
    label: "arXiv 2026 | Preprint",
    title: "SGPA: Spectrogram-Guided Phonetic Alignment for Feasible Shapley Value Explanations in Multimodal Large Language Models",
    href: "https://arxiv.org/abs/2603.02250",
    body: "Pozorski, Muszyński, Ganzha.",
  },
];

export const built: Cell[] = [
  {
    label: "Python | PyPI",
    title: "mllm-shap",
    body: "Shapley attributions for models that hear and read at once. Groups audio frames into words before playing the game.",
    links: [
      { label: "Code", href: "https://github.com/Pawlo77/MLLM-Shap" },
      { label: "pip install mllm-shap", href: "https://pypi.org/project/mllm-shap/" },
    ],
  },
  {
    label: "Java, JADE | React",
    title: "EnergyTwin",
    body: "The multi-agent microgrid simulator behind the BDA paper: physical asset models, rolling-horizon planning, agents negotiating a schedule.",
    links: [{ label: "Code", href: "https://github.com/mvishiu11/energy-twin" }],
  },
  {
    label: "Rust | WebAssembly",
    title: "RustyLox",
    body: "A tree-walking interpreter for Lox, compiled to WebAssembly so it runs in your browser.",
    links: [
      { label: "Code", href: "https://github.com/mvishiu11/rustylox" },
      { label: "Playground", href: "https://mvishiu11.github.io/rustylox-playground/" },
    ],
  },
  {
    label: "C",
    title: "CoreLox",
    body: "The same language again, as a bytecode virtual machine in C, with a few extensions the book leaves as exercises.",
    links: [
      { label: "Code", href: "https://github.com/mvishiu11/CoreLox" },
      { label: "Why twice?", href: "/writing/writing-the-same-language-twice/" },
    ],
  },
];

export const recognition = [
  { year: "2026", what: "Enactus Poland national champion, with EnergyScope. Representing Poland at the World Cup in Brazil." },
  { year: "2025", what: "Enactus Poland national champion and World Cup top 16 in Bangkok, with MedWave." },
  { year: "2025", what: "Personal commendation for MedWave from Krzysztof Gawkowski, Deputy Prime Minister and Minister of Digital Affairs." },
  { year: "2025", what: "Full funding grant for the CERN internship, Warsaw University of Technology." },
  { year: "2024", what: "150k PLN innovation grant, WUT Centre of Innovation." },
  { year: "2023–", what: "Rector's Scholarship for the top 10% of the faculty." },
];
