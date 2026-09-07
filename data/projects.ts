export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  contributions: string[];
  image?: string;
  imageAlt?: string;
  imageAspectRatio?: string;
  previewDevice?: "mobile";
  website?: string;
  details?: string;
}

export const projects: Project[] = [
  {
    id: "cabosaferide",
    title: "CaboSafeRide",
    description:
      "Transportation and booking platform supporting reservations, payments, automated booking workflows and back-office management.",
    technologies: ["Laravel", "Vue.js", "Inertia.js", "Stripe", "MySQL", "AWS"],
    image: "/projects/cabosaferide-preview.png",
    imageAlt: "CaboSafeRide booking management dashboard",
    contributions: [
      "Backend development",
      "Stripe payment gateway integration",
      "Booking automation",
      "Admin dashboards",
      "Scheduled jobs",
      "Performance improvements",
    ],
  },
  {
    id: "my-partner-sam",
    title: "My Partner Sam",
    description:
      "Health and wellness app that helps users plan meals, discover recipes and organize personalized nutrition routines. Worked with My Partner Sam through Taller Technologies.",
    technologies: [
      "Laravel",
      "Laravel Queues",
      "React",
      "Azure",
      "REST APIs",
      "Stripe",
      "Redis",
      "SQL",
    ],
    image: "/projects/my-partner-sam-preview.png",
    imageAlt: "My Partner Sam meal planning application interface",
    previewDevice: "mobile",
    contributions: [
      "Backend APIs",
      "Frontend development",
      "Stripe payment gateway integration",
      "Automated daily meal plan generation at scale",
      "Cloud integrations",
      "Production maintenance",
    ],
  },
  {
    id: "gestimedical",
    title: "Gestimedical",
    description:
      "Healthcare platform supported by a complete GCP infrastructure for its frontend, backend, database and file storage, optimized for reliable operation and lower cloud costs.",
    technologies: ["GCP", "Cloud Infrastructure", "SQL", "Cloud Storage"],
    image: "/projects/gestimedical-preview.png",
    imageAlt: "Gestimedical healthcare management dashboard",
    contributions: [
      "GCP infrastructure architecture and deployment",
      "Frontend and backend environment provisioning",
      "Database and cloud storage setup",
      "Cloud resource and cost optimization",
    ],
  },
  {
    id: "select-leaders",
    title: "SelectLeaders",
    description:
      "Commercial real estate job network helping employers post opportunities and connect with talent, while professionals search and apply for roles from entry-level to executive. Worked with SelectLeaders through Curotec.",
    technologies: ["Laravel", "Livewire", "MySQL", "OpenSearch"],
    image: "/projects/select-leaders-preview.png",
    imageAlt: "SelectLeaders commercial real estate job listings with remote filters",
    imageAspectRatio: "1774 / 887",
    contributions: [
      "Interactive frontend development with Livewire",
      "Backend development with Laravel",
      "Job search and filtering with OpenSearch",
      "Data management with MySQL",
    ],
  },
];
