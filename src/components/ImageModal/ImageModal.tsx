import { ImgInfo } from "../../App.types";

import Modal from "react-modal";

import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  modalIsOpen: boolean;
  imgModal: ImgInfo | null;
  onCloseModal: () => void;
}

const ImageModal = ({
  modalIsOpen,
  imgModal,
  onCloseModal,
}: ImageModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: 0,
          border: "none",
        },
      }}
      onRequestClose={onCloseModal}
    >
      <img
        src={imgModal?.regular}
        alt={imgModal?.alt}
        style={{
          maxWidth: "100%",
          maxHeight: "80vh",
          objectFit: "contain",
        }}
      />
      <ul className={styles.info}>
        <li>
          <p>Author: {imgModal?.author || "without name"} </p>
        </li>
        <li>
          <p>Description: {imgModal?.description || "'without description'"}</p>
        </li>
        <li>
          <p>Likes: {imgModal?.likes}</p>
        </li>
      </ul>
    </Modal>
  );
};

export default ImageModal;
