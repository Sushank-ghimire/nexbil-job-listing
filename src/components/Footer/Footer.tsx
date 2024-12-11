import { FaGithub, FaLinkedin, FaEnvelope, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white mt-8 mx-auto w-[90vw] md:container">
      <div className="w-full mx-auto py-4  bg-gray-800 text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-400 mt-2">
            Feel free to reach out or connect with me!
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:ghimiresushank64@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-200 hover:text-indigo-500 transition-colors duration-200"
          >
            <FaEnvelope size={20} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Sushank-ghimire"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-200 hover:text-indigo-500 transition-colors duration-200"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sushank-ghimire-aba6ba303/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-200 hover:text-indigo-500 transition-colors duration-200"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://ghimiresushank.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-200 hover:text-indigo-500 transition-colors duration-200"
          >
            <FaLink size={20} />
            <span>Website</span>
          </a>
        </div>

        <div className="text-gray-400 text-sm">
          <p>&copy; 2024 Sushank Ghimire. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
