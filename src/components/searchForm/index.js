import "./_searchForm.scss";

const SearchForm = () => {
  return (
    <form className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for any IP address or domain"
      />
      <button className="search-icon"></button>
    </form>
  );
};

export default SearchForm;
