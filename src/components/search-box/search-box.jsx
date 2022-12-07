import "./search-box.styles.css";
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <input
      className={className}
      type="search"
      name=""
      id=""
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
