export interface Service {
  id: string;
  title: string;
  fromPrice: string;
  timescale: string;
  description: string;
  includes: string[];
  icon: 'repair' | 'reroof' | 'flat' | 'chimney' | 'gutter' | 'emergency';
}

export interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  typeBadge: 'repair' | 'reroof' | 'flat' | 'chimney' | 'gutter' | 'emergency';
  description: string;
  detail: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface Review {
  id: string;
  text: string;
  name: string;
  area: string;
  rating: number;
  projectType: string;
  badge: 'repair' | 'reroof' | 'flat' | 'chimney' | 'gutter' | 'emergency';
  featured?: boolean;
}

export interface PricingRow {
  job: string;
  from: string;
}

export interface DiagnosticProblem {
  id: string;
  label: string;
  icon: 'leak' | 'tile' | 'flat' | 'chimney' | 'gutter' | 'storm';
  followUp?: {
    question: string;
    options: string[];
  };
  result: {
    urgency: 'red' | 'orange' | 'green';
    urgencyText: string;
    doNow: string;
    whatWeDo: string;
    typicalCost: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}
