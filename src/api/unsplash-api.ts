import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export async function fetchImages(searchValue, page) {
  const axiosOptions = {
    params: {
      client_id: "NSIOMXvAsGsE4GGBhHMffQIdymvSVWisvf04QQrDVb0",
      query: searchValue,
      page: page,
      per_page: 12,
      orientation: "landscape",
    },
  };
  return axios.get("search/photos", axiosOptions);
}
