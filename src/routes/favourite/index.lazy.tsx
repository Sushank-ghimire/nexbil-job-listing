import { createLazyFileRoute } from "@tanstack/react-router";
import useTitle from "../../hooks/useTitle";
import useJobStore from "../../store/JobsStore";
import { useEffect } from "react";
import { DisplayJobs, Loader } from "../../components/Export";

export const Route = createLazyFileRoute("/favourite/")({
  component: RouteComponent,
});

function RouteComponent() {
  useTitle({ title: "Your faviourite jobs" });

  const { fetchJobData, faviouriteJobs, jobData, isLoading } = useJobStore();

  // Fetch The job if there is no job data in the store
  useEffect(() => {
    if (jobData.length === 0) fetchJobData();
  }, [fetchJobData]);

  return (
    <section className="h-full w-full flex flex-col gap-4">
      <h1 className="text-center font-bold md:text-3xl text-xl">
        Your Faviourite Jobs
      </h1>
      <div className="flex flex-col gap-3">
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        ) : faviouriteJobs.length === 0 ? (
          <div className="text-center mt-2 font-bold">
            You don't have any faviourite job yet!
          </div>
        ) : (
          faviouriteJobs.map((jobs) => (
            <DisplayJobs jobs={jobs} key={jobs.id} />
          ))
        )}
      </div>
    </section>
  );
}
