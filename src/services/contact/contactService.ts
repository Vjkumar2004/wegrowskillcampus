import apiClient from "@/services/api/client";

export interface ContactEnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  interestArea: "SkillCampus" | "IndustryServices" | "General";
  message: string;
}

export interface ContactEnquiryResponse {
  success: boolean;
  message: string;
}

export const submitContactEnquiry = async (
  payload: ContactEnquiryPayload
): Promise<ContactEnquiryResponse> => {
  const response = await apiClient.post<ContactEnquiryResponse>("/enquiries", payload);
  return response.data;
};
