import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map((contacts) => (
          <li key={contacts.id}>
            <Contact data={contacts} onDeleteContact={onDeleteContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
