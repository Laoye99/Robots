import "./search-box.styles.css";

interface ISearchBoxProps {
  className: string;
  placeholder?:
}

const SearchBox = ({ className, placeholder, onChangeHandler}) => (
  <input 
        className= {`search-box ${className}`} 
      type={'search'} 
      placeholder = {placeholder} 
      onChange={(e) => onChangeHandler(e)}
      />
);

export default SearchBox;
