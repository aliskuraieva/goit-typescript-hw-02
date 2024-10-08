import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({ data: { id, name, number }, onDeleteContact }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <FaUser className={styles.icon} />
        {name}
      </p>
      <p className={styles.text}>
        <FaPhoneAlt className={styles.icon} />
        {number}
      </p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
