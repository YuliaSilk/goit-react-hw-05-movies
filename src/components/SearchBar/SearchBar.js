import { useSearchParams } from 'react-router-dom';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { IoSearchCircleSharp } from "react-icons/io5";
import {  ErrMsg, Resetbtn, SearchBtn, SearchForm, SearchInput } from "./SearchBar.styled";
import { Toaster } from 'react-hot-toast';
import { IoTrashOutline } from "react-icons/io5";

export const SearchBar = () => {

    const[searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const handleSubmit = (values) => {
        searchParams.set('query', values.query);
        setSearchParams(searchParams.toString());
    }



    const reset = () => {
        setSearchParams({ query: ""});
    };
    

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
                <Resetbtn onClick={reset}>
                <IoTrashOutline/>
                </Resetbtn>
            </SearchForm>
        </Formik>
      
    );

}







// export const SearchBar = ({ onSubmit }) => {
   
// };
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
