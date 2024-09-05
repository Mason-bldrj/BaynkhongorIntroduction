import { useState } from "react";

const NewsFrom = () => {
  const [inputData, setInputData] = useState({
    report: {
      name: "",
      date: "",
      description: "",
    },
    video: {
      name: { type: String, required: true },
      date: Date,
      url: String,
    },
    resources: {
      name: String,
      img: String,
    },
  });
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  );
};
