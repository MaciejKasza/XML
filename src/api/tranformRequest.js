const API_URL = "https://reqres.in/api/1users22s";
export async function getTranform(mapping) {
  //symulacjia uderzenia do API

  // try {
  //   const response = await fetch(API_URL, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });
  //   // console.log(response);

  //   if (!response.ok) {
  //     return { status: response.status };
  //   }

  //   const result = await response.json();

  //   return { status: response.status, data: result };
  // } catch (err) {
  //   console.error(err);
  // }

  return { status: 200, data: mapping };
}
