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
export const postFunc = async (sub_url: string, body: any) => {
  try {
    console.log(JSON.stringify(body));
    const res = await fetch(`${urls.MAIN_URL}${sub_url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(body),
    });
  } catch (err: any) {
    console.log(err);
  }
};
export const putFunc = async (sub_url: string, body: any) => {
  try {
    console.log(JSON.stringify(body));
    const res = await fetch(`${urls.MAIN_URL}${sub_url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(body),
    });
  } catch (err: any) {
    console.log(err);
  }
};
export const deleteFunc = async (sub_url: string, id: string) => {
  try {
    const res = await fetch(`${urls.MAIN_URL}${sub_url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(id),
    });
  } catch (err: any) {
    console.log(err);
  }
};
