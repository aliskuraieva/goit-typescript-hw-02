import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const CLIENT_ID = "NSIOMXvAsGsE4GGBhHMffQIdymvSVWisvf04QQrDVb0";

export interface Image {
  id: string;
  urls: {
    small: string;
  };
  user: {
    name: string;
  };
  description: string | null;
}

export const fetchImages = async <T>(
  searchValue: string,
  page: number
): Promise<T> => {
  try {
    const response = await axios.get<T>(
      `/search/photos?client_id=${CLIENT_ID}&query=${searchValue}&page=${page}&per_page=12`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw new Error("Failed to fetch photos. Please try again later.");
  }
};
export default fetchImages;
