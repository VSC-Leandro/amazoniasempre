export interface Session {
  id: number;
  title: string;
  date: string;
  time: string;
  local: string;
  cop30_pillars: string;
  af_pillar: string;
  af_theme: string;
  organizers: string;
  org_category: string;
  participants: string;
  relatoria: string;
  youtube: string;
  sinopse: string;
  decisions: string;
}

export interface Participant {
  name: string;
  institution: string;
  category: string;
  country: string;
}

export interface Org {
  name: string;
  sector: string;
  country: string;
}

export interface CountItem {
  name: string;
  count: number;
}

export interface InterviewItem {
  pillar: string;
  institution: string;
  event: string;
  category: string;
  country: string;
}

export interface NetworkData {
  finance: string[];
  policy: string[];
  strategic: string[];
}

export interface DonorItem {
  program: string;
  partners: string;
}

export interface PubItem {
  title: string;
  org: string;
  link: string;
}

export interface PctItem {
  name: string;
  pct: number;
}
