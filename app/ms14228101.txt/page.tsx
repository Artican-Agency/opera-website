"use client";
import React from "react";

function page() {
  const [fileContent, setFileContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchFile = async () => {
      try {
        const res = await fetch("/api/get-text");

        const fileContent = await res.json();
        setFileContent(fileContent.content);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFile();
  }, []);

  return <>{fileContent}</>;
}

export default page;
