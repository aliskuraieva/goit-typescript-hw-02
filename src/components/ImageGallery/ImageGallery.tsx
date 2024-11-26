import { Image, ImgInfo } from "../../App.types";

import ImageCard from "../ImageCard/ImageCard";

import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onOpenModal: (imgInfo: ImgInfo) => void;
}

const ImageGallery = ({ images, onOpenModal }: ImageGalleryProps) => {
  return (
    <ul className={styles.list}>
      {images.map((image) => (
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
