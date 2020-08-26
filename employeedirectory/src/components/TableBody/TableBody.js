import React, {useContext} from "react";
import TableContext from  "../../utils/TableContext";

const TableBody = () => {
  const {developerState} = useContext(TableContext);

  const formatDate = (date) => {
    const dArr= date.split("-");

    const year = dArr[0];
    const month = dArr[1];
    const day = dArr[2].split("T");

    const newDate = [month, day[0], year].join("-");
    return newDate;
  }

  return (
    <tbody>
      {developerState.filteredUsers[0] !== undefined && developerState.filteredUsers[0].name !== undefined 
      ? (developerState.filteredUsers.map(({name, email, dob, login, phone, picture}) => {
        return (
        <tr key={login.uuid}>
          <td data-h="Image" className="image">
            <img
              src={picture.medium}
              alt={`${name.first} ${name.last}`}
            />
          </td>
          <td data-h="Name" className="name">
            {`${name.first} ${name.last}`}
          </td>
          <td data-h="Phone" className="phone">
            {phone}
          </td>
          <td data-h="Email" className="email">
            {email}
          </td>
          <td data-h="DOB" className="DOB">
            {formatDate(dob.date)}
          </td>
        </tr>
        )
      })) 
      : (<> </>)}
    </tbody>
  )
}

export default TableBody;