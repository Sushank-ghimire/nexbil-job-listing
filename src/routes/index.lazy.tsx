import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="bg-primary text-textPrimary flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-3/4 bg-indigo-600 text-white px-6 py-4">
        <h1 className="text-4xl font-extrabold mb-4 text-center md:text-5xl">
          Welcome to Your Future Career!
        </h1>
        <p className="text-lg mb-6 text-center md:text-xl">
          Whether you’re looking for your dream job or your next great hire,
          we’re here to help you connect with the right people.
        </p>
        <div className="flex gap-4">
          <Link
            to="/jobs"
            className="bg-indigo-700 hover:bg-indigo-800 text-white py-3 px-8 rounded-lg text-lg transition-all"
          >
            Find Jobs
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 px-6 lg:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-6">
          Why Choose Us?
        </h2>
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-6 bg-white shadow-lg rounded-lg transition-all hover:-translate-y-6 cursor-pointer">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              Easy to Use
            </h3>
            <p className="text-lg text-gray-600">
              Our intuitive platform makes job searching and posting listings
              effortless and quick.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transition-all hover:-translate-y-6 cursor-pointer">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              Job Alerts
            </h3>
            <p className="text-lg text-gray-600">
              Stay up to date with new job listings by setting personalized
              alerts directly to your inbox.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transition-all hover:-translate-y-6 cursor-pointer">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              Company Profiles
            </h3>
            <p className="text-lg text-gray-600">
              Learn more about companies before applying or posting your job
              listing to ensure a perfect match.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-indigo-600 py-12 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg mb-6">
          Whether you're looking for a job or ready to hire, we are here to help
          you make the next step in your career or business.
        </p>
        <a
          href="/jobs"
          className="bg-indigo-700 hover:bg-indigo-800 text-white py-3 px-8 rounded-lg text-lg transition-all"
        >
          Start Now
        </a>
      </div>
    </section>
  );
}
