import { Link, useLocation } from "@tanstack/react-router";

const Navbar = () => {
  const location = useLocation();

  const checkActiveStatus = (path: string, route: string) => {
    if (path === route) {
      return "font-normal";
    }
  };
  return (
    <nav className="md:container w-[90vw] mx-auto tracking-tighter px-6 py-2 text-xl border-spacing-1 font-extrabold mt-2 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl">
        <Link to="/" className="select-none">
          Nexbil Job Portal
        </Link>
      </h1>
      <div className="flex justify-between gap-2 md:gap-4 font-medium">
        <Link
          to="/about"
          className={`cursor-pointer active:font-normal hover:text-darkSecondary relative hidden transition-all group md:block ${checkActiveStatus(location.pathname, "/about")}`}
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
        </Link>
        <Link
          to="/jobs"
          className={`cursor-pointer hover:text-darkSecondary relative block transition-all group ${checkActiveStatus(location.pathname, "/jobs")}`}
        >
          Jobs
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
        </Link>
        <Link
          to="/favourite"
          className={`cursor-pointer hover:text-darkSecondary relative transition-all md:block hidden group ${checkActiveStatus(location.pathname, "/favourite")}`}
        >
          Favourites
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
        </Link>
        <Link
          to="/contact"
          className={`cursor-pointer hover:text-darkSecondary relative transition-all block group ${checkActiveStatus(location.pathname, "/contact")}`}
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
