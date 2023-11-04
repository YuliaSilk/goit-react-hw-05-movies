import { Formik} from 'formik';
import * as Yup from 'yup';
import { IoSearchCircleSharp } from "react-icons/io5";
import {  ErrMsg, SearchBtn, SearchForm, SearchInput } from "./SearchBar.styled";
import { Toaster } from 'react-hot-toast';

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
            <SearchForm>
                <label>
                    <SearchInput
                        name="query"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search interesting film"
                    />
                    <ErrMsg component="div" name="query" />
                </label>

                <SearchBtn type="submit">
                <IoSearchCircleSharp />
                </SearchBtn>
                <Toaster/>
            </SearchForm>
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
