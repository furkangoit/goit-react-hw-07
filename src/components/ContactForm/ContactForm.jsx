import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact({
            name: values.name,
            number: values.number,
        }));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" className={styles.error} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="number">Number</label>
                    <Field type="tel" name="number" />
                    <ErrorMessage name="number" component="div" className={styles.error} />
                </div>

                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}