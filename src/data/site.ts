// All site content lives here. Edit this file; the page re-renders from it.

export const site = {
  name: "Jakub Muszyński",
  url: "https://jakub-muszynski.vercel.app",
  description:
    "Co-founder and CTO of EnergyScope, software engineer at Point72, and explainable-AI researcher at Warsaw University of Technology.",
  email: "jakub.m.muszynski@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/jakub-muszyński-51133a273",
    github: "https://github.com/mvishiu11",
    acl: "https://aclanthology.org/2026.acl-demo.38/",
  },
  eyebrow: ["Engineer", "Founder", "Researcher", "Warsaw"],
  nowLabel: "Autumn 2026",
};

export type Link = { label: string; href: string };

export const now = [
  {
    role: "Co-founder, CTO",
    live: true,
    title: "EnergyScope",
    href: "https://energyscope.eu",
    body: "An AI energy operator for commercial and industrial sites in Poland. Our EnergyConnect device reads the plant, a digital twin plans it, and we get paid a share of the savings we verify. I lead the product, the edge hardware and the optimisation stack.",
  },
  {
    role: "Software Engineer",
    title: "Point72 | Risk Technology",
    body: "Building risk infrastructure in Warsaw. Earlier, as an intern, I built agentic AI systems for quantitative research.",
  },
  {
    role: "M.Sc. student",
    title: "Warsaw University of Technology | MiNI",
    body: "Individual studies track with Prof. Maria Ganzha. Research direction: digital twins of real industrial sites, with explanations built into every decision the twin makes.",
  },
];

export const publications: {
  venue: string;
  kind: string;
  title: string;
  body: string;
  links?: Link[];
}[] = [
  {
    venue: "ACL 2026",
    kind: "System Demos",
    title:
      "mllm-shap: A Shapley Value Explainability Platform for Text-Audio Multimodal Large Language Models",
    body: "Muszyński, Pozorski, Ganzha, Paprzycki. Which words and which stretches of audio made the model answer the way it did. Presented in San Diego.",
    links: [
      { label: "Paper", href: "https://aclanthology.org/2026.acl-demo.38/" },
      { label: "PyPI", href: "https://pypi.org/project/mllm-shap/" },
      { label: "Code", href: "https://github.com/Pawlo77/MLLM-Shap" },
    ],
  },
  {
    venue: "arXiv 2026",
    kind: "Preprint",
    title: "SGPA: Spectrogram-Guided Phonetic Alignment",
    body: "Pozorski, Muszyński, Ganzha. Aligning attributions to phonemes using the spectrogram itself.",
    links: [{ label: "arXiv 2603.02250", href: "https://arxiv.org/abs/2603.02250" }],
  },
  {
    venue: "BDA 2025",
    kind: "Springer",
    title: "EnergyTwin: A Multi-Agent System for Simulating and Coordinating Energy Microgrids",
    body: "Agents for generation, storage and load negotiate a microgrid's schedule. The research root of EnergyScope's digital twin.",
    links: [
      { label: "Paper", href: "https://link.springer.com/chapter/10.1007/978-3-032-23241-0_10" },
      { label: "arXiv", href: "https://arxiv.org/abs/2511.20590" },
    ],
  },
  {
    venue: "B.Sc. 2026",
    kind: "Thesis",
    title: "Bridging Traditional Explainability Methods and Multimodal Multilingual Models",
    body: "Warsaw University of Technology. Graded 5.0, graduated with highest honours.",
  },
];

// Illustrative word-level Shapley values for the research widget.
export const attribution: [string, number][] = [
  ["I", 0.02], ["was", 0.01], ["charged", 0.62], ["twice", 0.48], ["for", -0.03],
  ["the", 0.0], ["same", 0.21], ["order,", 0.15], ["please", -0.08], ["fix", 0.34], ["it", 0.05],
];

export const built: {
  tag: string;
  meta: string;
  title: string;
  href?: string;
  body: string;
  extra?: Link;
}[] = [
  {
    tag: "Edge hardware",
    meta: "EnergyScope",
    title: "EnergyConnect",
    body: "Industrial gateway that reads meters, inverters and batteries over Modbus and streams them to the cloud through a zero-trust tunnel. Runs on low, medium and high voltage sites.",
  },
  {
    tag: "ML platform",
    meta: "EnergyScope",
    title: "Load and PV forecasting",
    body: "Backtesting, fine-tuning and shadow deployment for site-level forecasts, the input every dispatch decision depends on.",
  },
  {
    tag: "Startup",
    meta: "Founded 2023",
    title: "MedWave",
    body: "Medical transcription with AI. Grant-funded, incubated at WUT, top 16 at the Enactus World Cup in Bangkok.",
  },
  {
    tag: "Language",
    meta: "Rust",
    title: "RustyLox",
    href: "https://github.com/mvishiu11/RustyLox",
    body: "A tree-walking interpreter for Lox, with a browser playground.",
    extra: { label: "Open the playground", href: "https://mvishiu11.github.io/rustylox-playground/" },
  },
];

export const record = [
  { year: "2026", title: "Enactus Poland national champions", body: "With EnergyScope. Representing Poland at the Enactus World Cup." },
  { year: "2026", title: "B.Sc. Computer Science, highest honours", body: "Warsaw University of Technology, MiNI." },
  { year: "2025", title: "Enactus World Cup, top 16", body: "With MedWave, Bangkok." },
  { year: "2024", title: "TSMC | AI Application and Integration", body: "LLM inference on current-generation GPUs; agent systems for defect engineering." },
  { year: "Earlier", title: "CERN | Software engineering", body: "Distributed systems in Rust." },
];
