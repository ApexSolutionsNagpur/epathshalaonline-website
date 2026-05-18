export interface LeadData {
  student_first_name: string;
  parent_first_name: string;
  phone: string;
  email: string;
  grade_level: string;
  city: string;
  source: string;
  tenant_slug: string;
  form_id: number;
}

export const captureLead = async (data: LeadData) => {
  console.log('Sending lead data to API:', data);

  try {
    const response = await fetch('/api/leads/capture', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('API response received:', result);

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit the form. Please try again.');
    }

    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
