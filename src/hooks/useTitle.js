import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Toyland | ${title}`;
  }, [title]);
};

export default useTitle;
