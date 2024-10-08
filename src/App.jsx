import { useEffect, useState } from "react";
import "/src/App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import contactsData from "./contacts.json";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? contactsData;
    return parsedContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedContacts);
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onAddContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const onDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={filter} setFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
