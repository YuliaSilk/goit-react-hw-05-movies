// import { useSearchParams } from 'react-router-dom';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { IoSearchCircleSharp } from "react-icons/io5";
import {  ErrMsg, SearchBtn, SearchForm, SearchInput } from "./SearchBar.styled";
import { Toaster } from 'react-hot-toast';
// import { IoTrashOutline } from "react-icons/io5";

export const SearchBar = ({ onSubmit }) => {

    // const[searchParams, setSearchParams] = useSearchParams();
    // const query = searchParams.get("query") ?? "";
    
    const handleSubmit = (value) => {
        // searchParams.set('query', value.query);
       onSubmit(value);
    }

    // const reset = () => {
    //     setSearchParams({ query: ""});
    // };
    

    const searchSchema = Yup.object().shape({
        query: Yup.string().trim().lowercase().required('This field is required'),
    });

    return (
       
        <Formik
            initialValues={{
                query: '',
            }}
            validationSchema={searchSchema}
            // value={query}
            onSubmit={(values, actions) => {
                handleSubmit(values.query);
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
                {/* <Resetbtn onClick={reset}>
                <IoTrashOutline/>
                </Resetbtn> */}
            </SearchForm>
        </Formik>
      
    );

}

