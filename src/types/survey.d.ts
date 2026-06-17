export type Step = 1 | 2 | 3 | 4 | 5;

export type Language = 'hi' | 'en';

export type Relationship = 'father' | 'mother' | 'guardian';

export interface SurveyData {
  studentName: string;
  grade: string;
  schoolName: string;
  section: string;
  parentName: string;
  relationship: Relationship;
  mobile: string;
  whatsappAvailable: boolean;
  email: string;
  devices: string[];
  devicesCount: string;
  internetAtHome: string;
  internetType: string;
  internetSpeed: string;
  dailyUsage: string;
  awareOfOnline: string;
  childTakenClass: string;
  opinion: string;
  concerns: string[];
  anticipatedIssues: string;
  rating: number;
}
