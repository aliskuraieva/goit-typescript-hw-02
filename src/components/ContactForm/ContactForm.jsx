import { ErrorMessage, Field, Form, Formik } from "formik";
import { addContactSchema } from "../../utils/schemas";

import styles from "./ContactForm.module.css";

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={addContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.text}>Name:</span>
          <Field type="text" name="name" className={styles.input} />
          <ErrorMessage
            className={styles.errorMessage}
            name="name"
            component="span"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.text}>Number:</span>
          <Field className={styles.input} type="text" name="number" />
          <ErrorMessage
            className={styles.errorMessage}
            name="number"
            component="span"
          />
        </label>

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
