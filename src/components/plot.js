
import React from "react"

function Plot ({users}) {
return (
<tbody>
     {users[0]!== undefined && users[0].name !== undefined ? (
      users.map(({login, name, picture, phone, email, dob}) => {
           return (
                <tr key = {login.uuid}>
                     <td 
                     data-th = "image"
                     >
                          <img 
                          src={picture.medium}
                          className = "img-responsive"/
                          >
                     </td>
                     <td data-th = "name">
                          {name.first+ " "}
                          {" "+ name.last}
                     </td>
                     <td data-th = "phone">
                          {phone}
                         
                     </td>
                     <td data-th = "email">
                          <a href={"mailto:" +email} target="__blank">{email}</a>
                     </td>
                     <td data-th = "dob">
                          {dob.date}
                     </td>


                </tr>
           )
      })    
     ):(
          <div></div>
     )}

</tbody>
)

}



export default Plot;