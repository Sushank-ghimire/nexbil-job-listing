function NotFound() {
  return (
    <section className="h-full w-full bg-primary flex items-center justify-center text-textPrimary text-center p-6">
      {/* Content Container */}
      <div className="max-w-lg mx-auto">
        {/* 404 Text */}
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-6">404</h1>
        <p className="text-xl mb-4 text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-gray-500 mb-6">
          We couldn’t find the page you were looking for. It may have been moved
          or deleted, or you may have mistyped the URL.
        </p>

        {/* CTA Button */}
        <a
          href="/"
          className="bg-indigo-700 hover:bg-indigo-800 text-white py-3 px-8 rounded-lg text-lg transition-all"
        >
          Go to Homepage
        </a>
      </div>
    </section>
  );
}

export default NotFound;
