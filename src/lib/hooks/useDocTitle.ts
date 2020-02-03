import { useState, useEffect } from "react";

export const useDocTitle = () => {
  const [title, setTitle] = useState();
  useEffect(() => {
    const getTitle = setTimeout(() => {
      setTitle(document.title);
    }, 300);
    return () => clearTimeout(getTitle);
  });

  return { title, setTitle };
};
