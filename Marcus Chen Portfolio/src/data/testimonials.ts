export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  color: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Engineering',
    company: 'Vercel',
    avatar: 'SM',
    color: '#ff6b6b',
    text: "Marcus is one of the most talented engineers I've had the pleasure of working with. His ability to bridge the gap between design and engineering is rare. He led our design system initiative and transformed how our teams build products. The component library he architected is now used across 12 products.",
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'CTO',
    company: 'Stripe',
    avatar: 'DP',
    color: '#635bff',
    text: "When we needed to rebuild our dashboard with sub-100ms load times, Marcus delivered. His deep understanding of React internals and performance optimization saved us months of work. Beyond technical skills, he's an exceptional mentor who elevates everyone around him.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Lead',
    company: 'GitHub',
    avatar: 'ER',
    color: '#2dba4e',
    text: "Marcus doesn't just write code — he crafts experiences. The pull request review flow he redesigned increased reviewer engagement by 40%. He has an eye for detail that most engineers lack, combined with the technical chops to implement complex features flawlessly.",
    rating: 5,
  },
  {
    name: 'James Liu',
    role: 'Founder & CEO',
    company: 'TechStart',
    avatar: 'JL',
    color: '#f59e0b',
    text: "We hired Marcus as a consultant to architect our frontend from scratch. In 3 months, he built a foundation that scaled us from 0 to 100k users. His pragmatic approach to engineering — balancing speed with quality — was exactly what a startup needs.",
    rating: 5,
  },
  {
    name: 'Anna Kowalski',
    role: 'Design Director',
    company: 'Figma',
    avatar: 'AK',
    color: '#f24e1e',
    text: "As a designer, working with Marcus was a dream. He actually cares about design details — spacing, typography, animations. He built a Figma-to-code pipeline that cut our handoff time in half. Every pixel matters to him, and it shows in the final product.",
    rating: 5,
  },
];
