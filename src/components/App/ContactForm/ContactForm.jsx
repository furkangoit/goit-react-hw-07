import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/contactsOps';
import css from './ContactForm.module.css';

// ✅ Yup şema
const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Za-zÇĞİÖŞÜçğıöşü\s]+$/, 'Only letters and spaces are allowed')
        .min(2, 'Name must be at least 2 characters')
        .max(40, 'Name must be 40 characters or less')
        .required('Name is required'),
    phone: Yup.string()
        .matches(/^\+?\d{7,15}$/, 'Enter a valid phone number (7–15 digits, optional +)')
        .required('Phone number is required'),
});

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', phone: '' }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={css.form}>
                    <label className={css.label}>
                        Name
                        <Field name="name" type="text" className={css.input} />
                        <ErrorMessage name="name" component="div" className={css.error} />
                    </label>

                    <label className={css.label}>
                        Phone
                        <Field name="phone" type="tel" className={css.input} />
                        <ErrorMessage name="phone" component="div" className={css.error} />
                    </label>

                    <button type="submit" className={css.button} disabled={isSubmitting}>
                        Add contact
                    </button>
                </Form>
            )}
        </Formik>
    );
}