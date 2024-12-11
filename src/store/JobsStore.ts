import { create } from "zustand";

export type JobType = {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary_from: number;
  salary_to: number;
  employment_type: string;
  application_deadline: string;
  qualifications: string[]; // Since qualifications are a list, we will use a string array
  contact: string;
  job_category: string;
  is_remote_work: number; // Assuming 1 for remote and 0 for non-remote
  number_of_opening: number;
  created_at: string;
  updated_at: string;
};

interface JobVars {
  isLoading: boolean | null;
  error: string | unknown | null;
  fetchJobData: () => Promise<void>;
  jobData: JobType[];
  faviouriteJobs: JobType[];
}

const useJobStore = create<JobVars>((set) => ({
  isLoading: null,
  jobData: [],
  faviouriteJobs: [],
  error: null,
  fetchJobData: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch("https://jsonfakery.com/jobs");
      const data = await response.json();
      set({ jobData: [...data] });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
        return;
      }
      set({ error: "Error occured while fetching job data." });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useJobStore;
