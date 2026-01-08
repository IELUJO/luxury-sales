export interface ModuleItem {
  id: number;
  title: string;
  topics: string[];
}

export interface Professor {
  name: string;
  role: string;
  company?: string;
  image: string;
  linkedin?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}