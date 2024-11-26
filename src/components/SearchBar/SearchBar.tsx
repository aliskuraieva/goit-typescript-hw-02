import { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (userWord: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const userInput = form.elements.namedItem("text") as HTMLInputElement;
    const userWord = userInput.value.trim();
    if (!userWord) {
      toast.error("Enter text before search");
      return;
    }

    onSubmit(userWord);
  };
  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
