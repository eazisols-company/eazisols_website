import axios, { type AxiosRequestConfig } from "axios";

const DEFAULT_API_BASE_URL = "https://admin.eazisols.com";

export function getApiBaseUrl(): string {
  const envUrl = import.meta.env?.VITE_API_BASE_URL?.trim();
  return envUrl || DEFAULT_API_BASE_URL;
}

export const apiClient = axios.create({
  baseURL: getApiBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

export type ContactUsPayload = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  company_name: string;
  subject: string;
};

export async function postData<TResponse = unknown, TPayload = unknown>(
  endpoint: string,
  data: TPayload,
  config?: AxiosRequestConfig,
): Promise<TResponse> {
  const response = await apiClient.post<TResponse>(endpoint, data, config);
  return response.data;
}

export async function getData<TResponse = unknown>(
  endpoint: string,
  config?: AxiosRequestConfig,
): Promise<TResponse> {
  const response = await apiClient.get<TResponse>(endpoint, config);
  return response.data;
}

export type JobOpening = {
  id: number;
  title: string;
  workplace_type: string;
  location: string;
  department: string;
  work_type: string;
};

export type CareersApiResponse = {
  success?: boolean;
  data?: JobOpening[];
  meta?: {
    total?: number;
    per_page?: number;
    current_page?: number;
    last_page?: number;
  };
};

export async function fetchJobOpenings(): Promise<JobOpening[]> {
  const response = await getData<CareersApiResponse>("/api/careers");
  if (Array.isArray(response.data)) {
    return response.data;
  }
  return [];
}

export type JobDetail = {
  id: number;
  title: string;
  description: string;
  responsibilities: string | null;
  requirements: string | null;
  workplace_type: string;
  location: string;
  department: string;
  work_type: string;
};

export type JobDetailApiResponse = {
  success?: boolean;
  data?: JobDetail;
};

export async function fetchJobDetail(id: string | number): Promise<JobDetail | null> {
  try {
    const response = await getData<JobDetailApiResponse>(`/api/careers/${id}`);
    return response.data ?? null;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
}

export type JobApplicationResponse = {
  success?: boolean;
  message?: string;
};

export async function submitJobApplication(formData: FormData): Promise<JobApplicationResponse> {
  const response = await apiClient.post<JobApplicationResponse>("/api/apply-for-job", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export type ContactUsResponse = {
  success?: boolean;
  message?: string;
  query_id?: number;
};

export async function submitContactUs(
  payload: Omit<ContactUsPayload, "subject"> & { subject?: string },
): Promise<ContactUsResponse> {
  return postData<ContactUsResponse, ContactUsPayload>("/contact-us", {
    ...payload,
    subject: payload.subject ?? "General Inquiry",
  });
}

export function getApiErrorMessage(error: unknown, fallback = "Something went wrong. Please try again."): string {
  if (!axios.isAxiosError(error)) {
    return error instanceof Error ? error.message : fallback;
  }

  const data = error.response?.data;
  if (typeof data === "string" && data.trim()) {
    return data;
  }

  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    for (const key of ["message", "error", "detail"]) {
      const value = record[key];
      if (typeof value === "string" && value.trim()) {
        return value;
      }
    }
  }

  return fallback;
}
