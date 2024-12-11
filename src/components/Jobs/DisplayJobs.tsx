import { Link } from "@tanstack/react-router";
import { JobType } from "../../store/JobsStore";

interface DisplayJobsProps {
  jobs: JobType;
}

const DisplayJobs = ({ jobs }: DisplayJobsProps) => {
  return (
    <div
      key={jobs.id}
      className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-indigo-600">{jobs.title}</h3>
      <p className="text-gray-600 mb-2">Company: {jobs.company}</p>
      <p className="text-gray-600 mb-2">Location: {jobs.location}</p>
      <p className="text-gray-600 mb-2">
        Salary: ${jobs.salary_from.toLocaleString()} - $
        {jobs.salary_to.toLocaleString()}
      </p>
      <p className="text-gray-600 mb-4">
        Deadline: {jobs.application_deadline}
      </p>
      <Link
        to={`/jobs/${jobs.id}`}
        className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default DisplayJobs;
