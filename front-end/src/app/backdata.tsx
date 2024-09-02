import { useState } from "react";
const [a, setA] = useState();
fetch("https://baynkhongor-backend.vercel.app/api/event")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
