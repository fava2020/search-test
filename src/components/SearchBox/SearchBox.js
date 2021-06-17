import { React } from 'react';
import './styles.css';

const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className="Search"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBox;
