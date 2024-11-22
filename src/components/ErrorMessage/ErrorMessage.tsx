import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={styles.error}>
      Oops! Something went wrong. Please try again.
    </p>
  );
};

export default ErrorMessage;
