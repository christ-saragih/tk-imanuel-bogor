export interface Program {
  id: string;
  title: string;
  age: string;
  description: string;
  icon: string;
  color: string;
}

export interface DetailedProgram extends Program {
  longDescription: string;
  schedule: string[];
  classSize: number;
  teacherRatio: string;
  tuition: string;
  curriculum: string[];
  dailyActivities: { time: string; activity: string }[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  photo: string;
  shortBio: string;
  fullBio: string;
  education: string;
  experience: string;
  funFact: string;
  quote: string;
  color: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  size: "small" | "medium" | "large";
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export enum BotStatus {
  IDLE = "IDLE",
  THINKING = "THINKING",
  ERROR = "ERROR",
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}