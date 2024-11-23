"use client";
import React from "react";

function page() {

return (
  <pre>
    {JSON.stringify(
      {
        "Description": "Domain ownership verification file for Microsoft 365 - place in the website root",
        "Domain": "operapeinture.com",
        "Id": "1e6e0292-8835-4fa5-aee3-9e5c92617e6c"
      },
      null,
      2
    )}
  </pre>
);
}

export default page;
