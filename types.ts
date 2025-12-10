import { ReactNode } from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  details: string[];
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}
