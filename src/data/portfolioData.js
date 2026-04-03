import {
  BrainCircuit,
  Boxes,
  Code2,
  Database,
  GitBranch,
  Globe,
  LineChart,
  SearchCheck,
  Server,
  Cpu,
  Eye,
  Layers
} from 'lucide-react';

export const profile = {
  name: 'AIT BEN TALEB ABDELALI',
  title: 'AI Engineer - Data Intelligent Systems',
  summary:
    'Driven by curiosity, I focus on bridging the gap between AI research and practical, real-world applications. From designing machine learning models and computer vision systems to architecting robust data pipelines, I enjoy exploring the full lifecycle of intelligent products. I am committed to building scalable, high-performance systems that turn complex data challenges into meaningful user impact..'
};

export const skills = [
  {
    category: 'Programming',
    icon: Code2,
    level: 90,
    items: ['C','java' ,'Python', 'PHP', 'JavaScript']
  },
  {
    category: 'AI & Data',
    icon: BrainCircuit,
    level: 92,
    items: ['Machine Learning', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'YOLO']
  },
  {
    category: 'Web',
    icon: Globe,
    level: 85,
    items: ['React', 'Laravel']
  },
  {
    category: 'Databases',
    icon: Database,
    level: 84,
    items: ['MySQL', 'Oracle', 'PL/SQL']
  },
  {
    category: 'Tools',
    icon: GitBranch,
    level: 80,
    items: [ 'Linux']
  }
];

export const projects = [
  {
    title: 'BRIA AI',
    description:
      'An AI-powered OCR solution for automating logistics and streamlining parcel tracking workflows.',
    tags: ['Computer Vision', 'OCR', 'Python', 'Artificial Intelligence'],
    icon: Eye
  },
  {
    title: 'Multi-Channel E-Commerce Analytics & Predictive Insights',
    description:
      'A comprehensive data analysis platform designed to evaluate sales performance and customer behavior across multi-channel e-commerce touchpoints.',
    tags: ['BusinessIntelligence', 'CustomerBehavior', 'PowerBI', 'ETL'],
    icon: SearchCheck
  },
  {
    title: 'Clover: NLP-Powered Smart Quiz & Automated Evaluation Platform',
    description:
      'An AI-powered, responsive web application designed to streamline remote learning through automated grading, multi-format interactive quizzes, and real-time performance analytics.',
    tags: ['FullStackWeb', 'ResponsiveDesign', 'NLP', 'E-Learning'],
    icon: LineChart
  }
];

export const experience = [
  {
    role: 'AI Engineer',
    company: 'Independent Projects',
    period: '2023 - Present',
    details:
      'Delivered AI-driven applications focused on intelligent automation, predictive analytics, and robust data processing pipelines.',
    icon: Cpu
  },
  {
    role: 'Data Systems Developer',
    company: 'Freelance / Collaborations',
    period: '2021 - 2023',
    details:
      'Developed scalable data workflows, backend integrations, and interactive frontends for business and analytics use cases.',
    icon: Server
  },
  {
    role: 'Software Engineering Foundations',
    company: 'Academic & Personal Lab',
    period: '2019 - 2021',
    details:
      'Built strong foundations in algorithms, system design, and full-stack development through projects and research-oriented experimentation.',
    icon: Layers
  }
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/abdelali-1111', handle: '' },
  { label: 'LinkedIn', href: 'www.linkedin.com/in/ait-ben-taleb-abdelali-9b9385362', handle: '' }
];
