import { useState } from "react";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      resume: e.target.files ? e.target.files[0] : null,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic form validation
    if (!formData.name || !formData.email || !formData.resume) {
      setSubmissionStatus("Please fill in all fields and upload a resume.");
      setIsSubmitting(false);
      return;
    }

    // Simulating a form submission (replace with actual API call)
    setTimeout(() => {
      setSubmissionStatus("Your application has been submitted successfully!");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mt-6 bg-gray-50 p-4"
    >
      <h1 className="text-center font-bold text-3xl mb-4">
        Don't miss the chance, apply now!
      </h1>

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Resume Field */}
      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Upload Resume
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf, .doc, .docx"
          onChange={handleFileChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Submission Status */}
      {submissionStatus && (
        <p className="text-center text-sm text-green-600">{submissionStatus}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-3 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
      >
        {isSubmitting ? "Submitting..." : "Apply Now"}
      </button>
    </form>
  );
};

export default ApplyForm;
