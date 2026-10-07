import apiClient from "@/services/api/client";
import { ProgramItem } from "@/types";

export const fetchPrograms = async (): Promise<ProgramItem[]> => {
  const response = await apiClient.get<ProgramItem[]>("/programs");
  return response.data;
};
