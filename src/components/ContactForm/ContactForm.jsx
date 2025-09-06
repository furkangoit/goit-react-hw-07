import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/contactsOps';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Çok kısa!')
        .max(50, 'Çok uzun!')
        .required('Gerekli'),
    number: Yup.string()
        .min(3, 'Çok kısa!')
        .max(50, 'Çok uzun!')
        .required('Gerekli'),
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
            initialValues={{ name: '', number: '' }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
        >
            <Form style={{
                marginBottom: '20px',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9'
            }}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        İsim
                    </label>
                    <Field
                        type="text"
                        name="name"
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                    <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '12px' }} />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Telefon
                    </label>
                    <Field
                        type="tel"
                        name="number"
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                    <ErrorMessage name="number" component="div" style={{ color: 'red', fontSize: '12px' }} />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#646cff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Kişi Ekle
                </button>
            </Form>
        </Formik>
    );
}