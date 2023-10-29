import { Form } from "react-router-dom";

export const SearchBar = ({ handleSubmit }) => {
    return (
        <Form
            handleSubmit = { evt => {
                evt.preverentDefault();
                handleSubmit(evt.target.elements.search.value);
            }}>
        <input type="text" name="search"/>
        <button type="submit">Search</button>
        </Form>
    );
};


// const handleSubmit= value => {
//     setSearchParams({ query: value });
//     };

