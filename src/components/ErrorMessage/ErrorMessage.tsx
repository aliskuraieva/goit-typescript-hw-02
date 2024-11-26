import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className={styles.error}>
      Oops! Something went wrong. Please try again.
    </p>
  );
};

export default ErrorMessage;
