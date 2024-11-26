export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
  description: string;
  alt_description: string;
  likes: number;
}

export interface ImgInfo {
  regular: string;
  alt: string;
  likes: number;
  description: string | null;
  author: string;
}
