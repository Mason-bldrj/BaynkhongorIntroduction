import urls from "@/lib/urls";

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
// ${urls.MAIN_URL}${sub_url}
export const postFunc = async (sub_url: string, data: any) => {
  try {
    const res = await fetch(`${urls.MAIN_URL}${sub_url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(data),
    });
  } catch (err: any) {
    throw new Error(err);
  }
};
export const putFunc = async (sub_url: string, body: any) => {
  try {
    const res = await fetch(`${urls.MAIN_URL}${sub_url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (err: any) {
    throw new Error(err);
  }
};
export const deleteFunc = async (sub_url: string, id: any) => {
  try {
    const res = await fetch(`${urls.MAIN_URL}${sub_url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });

    return "success";
  } catch (err: any) {
    throw new Error(err);
  }
};
