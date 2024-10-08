import styles from "./SearchBox.module.css";

const SearchBox = ({ value, setFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
