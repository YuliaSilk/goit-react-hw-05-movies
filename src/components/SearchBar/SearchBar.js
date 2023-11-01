import { ErrorMessage, Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

const searchSchema = Yup.object().shape({
    query: Yup.string().trim().lowercase().required('This field is required'),
});

export const SearchBar = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{
                query: '',
            }}
            validationSchema={searchSchema}
            onSubmit={(values, actions) => {
                onSubmit(values.query);
                actions.resetForm();
            }}
        >
            <Form>
                <label>
                    <Field
                        name="query"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search interesting film"
                    />
                    <ErrorMessage component="div" name="query" />
                </label>

                <button type="submit">Search</button>
                {/* {if query === title ?? query === } */}
            </Form>
        </Formik>
    );
};
   // <form
        //     onSubmit = { evt => {
        //         evt.preventDefault();
        //         onSubmit(evt.target.elements.search.value);
        //     }}>
        // <input type="text" name="search"/>
        // <button type="submit">Search</button>
        // </form>
// const handleSubmit= value => {
//     setSearchParams({ query: value });
//     };
