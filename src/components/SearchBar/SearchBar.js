
export const SearchBar = ({ handleSubmit }) => {
    return (
        <form
            handleSubmit = { evt => {
                evt.preverentDefault();
                handleSubmit(evt.target.elements.search.value);
            }}>
        <input type="text" name="search"/>
        <button type="submit">Search</button>
        </form>
    );
};


// const handleSubmit= value => {
//     setSearchParams({ query: value });
//     };

