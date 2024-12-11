import { createLazyFileRoute } from "@tanstack/react-router";
import useJobStore from "../../store/JobsStore";
import useTitle from "../../hooks/useTitle";
import ApplyForm from "../../components/Jobs/ApplyForm";


export const Route = createLazyFileRoute("/jobs/$jobId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { jobId } = Route.useParams(); // Get jobId from the URL params
  const { jobData, isLoading } = useJobStore(); // Get job data from the store

  // Find the job that matches the jobId
  const job = jobData.find((job) => job.id === jobId);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while fetching job data
  }

  if (!job) {
    return <div>Job not found</div>; // If the job is not found, display a message
  }

  useTitle({ title: `Job - ${job.title}` });

  return (
    <section className="min-h-full w-full p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">{job.title}</h2>
      <p className="text-xl font-medium text-indigo-600 mb-2">{job.company}</p>
      <p className="text-gray-600 mb-2">Location: {job.location}</p>
      <p className="text-gray-600 mb-4">
        Salary: ${job.salary_from.toLocaleString()} - $
        {job.salary_to.toLocaleString()}
      </p>
      <p className="text-gray-600 mb-4">Deadline: {job.application_deadline}</p>

      {/* <h3 className="text-lg font-semibold mb-2">Qualifications:</h3> */}

      <h3 className="text-lg font-semibold mb-2">Contact:</h3>
      <p className="text-gray-600 mb-4">Phone: {job.contact}</p>

      <h3 className="text-lg font-semibold mb-2">Employment Type:</h3>
      <p className="text-gray-600 mb-4">{job.employment_type}</p>

      <ApplyForm />
    </section>
  );
}
