import React, { useContext } from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
import TableContext from "../../utils/TableContext";

const Search = () => {
  const context = useContext(TableContext);

  return (
    <form>
      <div className="form-group">
       
          <span> <BsSearch/> </span>
        
        <input
          onChange={context.handleInputChange}
          name="search"
          type="search"
          className="form-control"
          placeholder="Search by Name"
          id="search"
        />
      </div>
    </form>

  )
}

export default Search;