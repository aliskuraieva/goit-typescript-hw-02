import { Image, ImgInfo } from "../../App.types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onOpenModal: (imgInfo: ImgInfo) => void;
}

const ImageCard = ({ image, onOpenModal }: ImageCardProps) => {
  const handleClick = () => {
    onOpenModal({
      regular: image.urls.regular,
      alt: image.alt_description,
      likes: image.likes,
      description: image.description,
      author: image.user.name,
    });
  };
  return (
    <img
      className={styles.img}
      src={image.urls.small}
      alt={image.alt_description}
      onClick={handleClick}
    />
  );
};

export default ImageCard;
