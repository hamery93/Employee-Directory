import React, {useContext} from "react";
import TableBody from "../TableBody/TableBody.js";
import "./Table.css";
import TableContext from "../../utils/TableContext";
import {FaChevronCircleDown} from "react-icons/fa";

const Table = () => {
  const {developerState, handleSort} = useContext(TableContext);
  
  return (
    <div className = "dataTable">
      <table id="table" className="table">
        <thead>
          <tr>
            {developerState.headings.map(({ name, width}) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{width}}
                  onClick={() => {
                    handleSort(name);
                  }} >
                    {name}
                    <span className="pointer">
                      <FaChevronCircleDown/>
                      </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <TableBody />

      </table>
    </div>
  )
}

export default Table;