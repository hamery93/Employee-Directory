

import React from "react"
import Plot from "./plot"

function Body ({headings, users, handleSort}) {
     return (
          <div className="mt-3">
               <table>
                    <thead>
                         <tr>
                              {headings.map(({name, width}) => {
                                   return (
                                      <th 
                                      className = "col-md-3"
                                      key = {name}
                                      onClick = {() => {
                                           handleSort(name.toLowerCase())
                                      }}
                                      style = {{width}}
                                      >
                                      {name}
                                 
                                      <span></span>     
                                      </th>  
                                   )
                              })}
                         </tr>
                    </thead>
                    <Plot
                    users = {users}
                    ></Plot>
               </table>
          </div>

     )
}

export default Body


 