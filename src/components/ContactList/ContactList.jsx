import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {contacts.map((contacts) => (
          <li className={styles.item} key={contacts.id}>
            <Contact data={contacts} onDeleteContact={onDeleteContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
