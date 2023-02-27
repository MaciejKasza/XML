const API_URL = "https://maluch.mikr.us:40006/createFile";

export async function getTranform(mapping) {
  //symulacjia uderzenia do API
  console.log(JSON.stringify(mapping));
  try {
    const response = await fetch(API_URL, {
      // mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf8",
      },
      body: JSON.stringify(mapping),
      referrerPolicy: "unsafe_url",
    });
    // console.log(response);

    // if (!response.ok) {
    //   return { status: response.status };
    // }
    // console.log(response);
    const result = await response.text();
    // console.log(result);

    // return { status: response.status, data: result };

    return { status: response.status, data: result };
  } catch (err) {
    console.error(err);
  }
}
