import { type } from "os";
import React from "react";
import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: C)
};

const SearchBox = ({ className, placeholder, onChangeHandler}: SearchBoxProps) => (
  <input 
        className= {`search-box ${className}`} 
      type='search'
      placeholder = {placeholder} 
      onChange={onChangeHandler}
      />
);

export default SearchBox;
