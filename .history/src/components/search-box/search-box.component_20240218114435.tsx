import { type } from "os";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeh
}

const SearchBox = ({ className, placeholder, onChangeHandler}: ISearchBoxProps) => (
  <input 
        className= {`search-box ${className}`} 
      type={'search'} 
      placeholder = {placeholder} 
      onChange={(e) => onChangeHandler(e)}
      />
);

export default SearchBox;
