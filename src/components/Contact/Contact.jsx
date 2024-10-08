import styles from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDeleteContact }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
