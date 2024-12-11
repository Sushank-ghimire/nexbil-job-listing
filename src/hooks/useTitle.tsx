import { useEffect, useRef } from "react";

interface UseTitleProps {
  title: string;
}

const useTitle = ({ title }: UseTitleProps) => {
  // Reference to store the original title
  const titleRef = useRef(document.title);

  useEffect(() => {
    // Update the document title
    document.title = title;

    // Cleanup function to restore the original title on unmount
    return () => {
      document.title = titleRef.current;
    };
  }, [title]); // Re-run effect when `title` changes
};

export default useTitle;
