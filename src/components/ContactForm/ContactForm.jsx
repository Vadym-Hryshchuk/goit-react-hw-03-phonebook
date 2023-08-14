import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { AddContactForm } from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(6)
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    )
    .required('Required'),
});
const initialValues = { name: '', number: '' };

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <AddContactForm autoComplete="off">
        <label>
          Name
          <Field type="text" name="name" placeholder="First and last name" />
        </label>
        <label>
          Number
          <Field type="text" name="number" placeholder="0123467890" />
        </label>
        <button type="submit">Add contact</button>
      </AddContactForm>
    </Formik>
  );
};
