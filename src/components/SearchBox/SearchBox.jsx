import styles from "./SearchBox.module.css";

const SearchBox = ({ value, setFilter }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.label}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
