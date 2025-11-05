export interface ContactFormData {
  name: string;
  email: string;
  whatsapp?: string;
  type?: string;
  budget?: string;
  message: string;
  company?: string; // Honeypot
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
}

export interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  tags?: string[];
}

export interface FAQItemProps {
  question: string;
  answer: string;
}
