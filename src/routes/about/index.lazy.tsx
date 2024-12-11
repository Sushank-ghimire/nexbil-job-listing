import { createLazyFileRoute, Link } from "@tanstack/react-router";
import useTitle from "../../hooks/useTitle";

export const Route = createLazyFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  useTitle({ title: "About Job Listing Portal" });

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      {/* About Section */}
      <section className="py-12 px-6 text-center lg:px-20">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">
          Welcome to Our Job Listing Portal
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          We connect talented individuals with companies looking to hire.
          Whether you're seeking your next job opportunity or looking to hire
          the best talent, our platform provides an easy and efficient way to
          achieve your goals.
        </p>
        <div className="mx-auto max-w-4xl text-left space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-500">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Our platform helps job seekers find new opportunities and employers
            find the right candidates. It's simple:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-indigo-500 text-white p-4 rounded-full">
                <i className="fas fa-search"></i>
              </div>
              <div>
                <h3 className="font-medium text-xl text-indigo-700">
                  For Job Seekers
                </h3>
                <p className="text-gray-600">
                  Browse through job listings, apply to your dream job, and set
                  up job alerts to never miss an opportunity.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-indigo-500 text-white p-4 rounded-full">
                <i className="fas fa-briefcase"></i>
              </div>
              <div>
                <h3 className="font-medium text-xl text-indigo-700">
                  For Employers
                </h3>
                <p className="text-gray-600">
                  Post job openings, review applicants, and streamline your
                  hiring process with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-indigo-50 py-12 px-6 text-center lg:px-20">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">
          Key Features of Our Job Portal
        </h2>
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:-translate-y-3 cursor-pointer">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Search Jobs
            </h3>
            <p className="text-gray-600">
              Find jobs easily with our powerful search filters. Search by
              location, job type, salary range, and more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:-translate-y-3 cursor-pointer">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Job Alerts
            </h3>
            <p className="text-gray-600">
              Set up job alerts so you're notified when a job that matches your
              skills and preferences is posted.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:-translate-y-3 duration-150 cursor-pointer">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Company Profiles
            </h3>
            <p className="text-gray-600">
              Learn about companies before applying. View their culture,
              benefits, and current job openings.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 px-6 text-center lg:px-20">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Have questions or need support? We're here to help! Reach out to us,
          and we'll get back to you as soon as possible.
        </p>
        <Link
          to="/contact"
          className="bg-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-700 transition-all"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
