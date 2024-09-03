import urls from "@/lib/urls";

// fetch("https://baynkhongor-backend.vercel.app/api/event")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });
export const fetchFunc = async (sub_url: String) => {
  try {
    const res = await fetch(`${urls.MAIN_URL}${sub_url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (err: any) {
    throw new Error(err);
  }
};
