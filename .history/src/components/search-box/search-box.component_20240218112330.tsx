import "./search-box.styles.css";

const name: string = '1233'

const SearchBox = ({ className, placeholder, onChangeHandler}) => (
            <input 
        className= {`search-box ${className}`} 
      type={'search'} 
      placeholder = {placeholder} 
      onChange={(e) => onChangeHandler(e)}
      />
);

export default SearchBox;
