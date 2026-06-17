export interface SurveySubmitPayload {
  student_name: string;
  grade: string;
  school_name: string;
  section: string;
  parent_name: string;
  relationship: string;
  mobile: string;
  whatsapp_available: boolean;
  email: string;
  devices: string[];
  devices_count: string;
  internet_at_home: string;
  internet_type: string;
  internet_speed: string;
  daily_usage: string;
  aware_of_online: string;
  child_taken_class: string;
  opinion: string;
  concerns: string[];
  anticipated_issues: string;
  rating: number;
  language: string;
}

export const submitSurvey = async (data: SurveySubmitPayload) => {
  const response = await fetch('/api/survey/submit', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit survey. Please try again.');
  }

  return result;
};
