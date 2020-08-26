import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import TableContext from "../../utils/TableContext";
import Table from "../Table/Table";
import Nav from "../Nav/Nav"

const Main = () => {

  const [developerState, setDeveloperState] = useState({
    users: [],
    filteredUsers: [],
    order: "ascend",
    headings: [
      {name: "Image", width: "10%", order: "ascend"},
      {name: "name", width: "10%", order: "ascend"},
      {name: "Phone", width: "20%", order: "ascend"},
      {name: "Email", width: "20%", order: "ascend"},
      {name: "DOB", width: "10%", order: "ascend"}
    ]
  });

  const {headings, users, filteredUsers} = developerState;

  useEffect(() => {
    API.get()
      .then(res => {
        setDeveloperState({
          ...developerState,
          users: res.data.results,
          filteredUsers: res.data.results
        })
      })
  }, []);

  const handleSort = heading => {
    let currentOrder = headings 
      .filter(el => el.name === heading)
      .map(el => el.order)
      .toString();

    currentOrder = (currentOrder === "ascend") ? "descend" : "ascend";
    
    const compare = (a,b) => {
      if (currentOrder === "ascend") {
        if(a[heading] === undefined) {
          return 1;
        } else if (b[heading === undefined]) {
          return -1
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading].localeCompare(b[heading])
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } 
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
           return b[heading].localeCompare(a[heading]);
        } 
      }
    }

      const sortUsers = filteredUsers.sort(compare);
      const updateHeadings = headings.map(el => {
        el.order = el.name === heading ? currentOrder : el.order;
        return el;
      });
      
      setDeveloperState({
        ...developerState,
        filteredUsers: sortUsers,
        heading: updateHeadings
      });
    };
  

  const handleInputChange = e => {
    const filter = e.target.value;
    const filteredList = users.filter(item => {
      let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      if(values.indexOf(filter.toLowerCase()) !== -1) {
        return item
      };
    });
    setDeveloperState({...developerState, filteredUsers: filteredList});
  }

  return (
    <TableContext.Provider
     value={{ developerState, handleInputChange, handleSort}}
    >
        <Nav /> 
      <div>
        {filteredUsers.length>0 ? <Table/> : <div></div>}
      </div>
      
    </TableContext.Provider>
  )
}

export default Main;