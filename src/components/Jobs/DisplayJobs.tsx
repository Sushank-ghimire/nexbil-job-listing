import { Link } from "@tanstack/react-router";
import useJobStore, { JobType } from "../../store/JobsStore";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface DisplayJobsProps {
  jobs: JobType;
}

const DisplayJobs = ({ jobs }: DisplayJobsProps) => {
  const { addToFaviouriteJob, faviouriteJobs, removeFromFaviouriteJob } =
    useJobStore();

  const checkIsFavourite = (jobId: string): boolean => {
    const isFaviourite = faviouriteJobs.find((job) => job.id === jobId);
    return isFaviourite?.id ? true : false;
  };
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
      <div className="flex w-full justify-between items-center">
        <Link
          to={`/jobs/${jobs.id}`}
          className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Apply Now
        </Link>
        <button
          onClick={() => {
            if (checkIsFavourite(jobs.id)) {
              removeFromFaviouriteJob(jobs);
            } else {
              addToFaviouriteJob(jobs);
            }
          }}
          className="flex justify-between px-3 py-2 transition-colors hover:bg-pink-500 bg-pink-300 text-darkPrimary hover:text-darkTextPrimary items-center gap-1 rounded-sm"
        >
          <span className="hidden md:block">
            {checkIsFavourite(jobs.id)
              ? "Remove from faviourite"
              : "Add to Faviourite"}
          </span>
          <span className="text-red-600 font-medium block">
            {checkIsFavourite(jobs.id) ? <MdDelete /> : <FaHeart />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DisplayJobs;
