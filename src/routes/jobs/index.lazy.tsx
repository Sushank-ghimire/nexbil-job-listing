import { createLazyFileRoute } from "@tanstack/react-router";
import useTitle from "../../hooks/useTitle";
import { useEffect, useState } from "react";
import useJobStore from "../../store/JobsStore";
import { DisplayJobs, Loader } from "../../components/Export";

export const Route = createLazyFileRoute("/jobs/")({
  component: RouteComponent,
});

function RouteComponent() {
  useTitle({ title: "Jobs for you" });
  const { fetchJobData, jobData, isLoading } = useJobStore();

  // Fetchs the jobs from api
  useEffect(() => {
    fetchJobData();
  }, [fetchJobData]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5; // Number of jobs per page

  // Calculate the index of the last and first job to display on the current page
  const lastIndex = currentPage * jobsPerPage;
  const firstIndex = lastIndex - jobsPerPage;
  const currentJobs = jobData.slice(firstIndex, lastIndex);

  // Total number of pages
  const totalPages = Math.ceil(jobData.length / jobsPerPage);

  // Handle the page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="h-full w-full">
      {isLoading ? (
        <div className="min-h-[80vh] w-full font-bold flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="h-full w-full flex flex-col gap-4 pb-3">
          {currentJobs.map((jobs) => (
            <DisplayJobs jobs={jobs} key={jobs.id} />
          ))}
        </div>
      )}
      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="font-bold flex items-center justify-center gap-2">
          {currentPage} / {totalPages}
        </div>

        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}
