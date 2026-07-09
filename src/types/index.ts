export interface Quote {
  id: number;
  text: string;
  chapter: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface Author {
  name: string;
  title: string;
  image: string;
  bio: string;
  background: string;
  social: {
    twitter: string;
    instagram: string;
    facebook: string;
    linkedin: string;
  };
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}