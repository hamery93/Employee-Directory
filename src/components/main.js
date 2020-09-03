//data = main

import React from "react"
import Api from "../util/url"
import Lookup from "./lookup"
import Body from "./body"


class Main extends React.Component {

     state = {
          users: [],
          filteredUsers: [],
          ordered: "ascend",
     }

     heading = [ 
          {name: "Picture", width: "10%"},
          {name: "Full Name", width: "20%"},
          {name: "Phone Number", width: "10%"},
          {name: "Email Address", width: "20%"},
          {name: "Date of Birth", width: "10%"},      
     ]

     handleSort = (heading) => {
          if(this.state.ordered === "ascend") {
               this.setState({
                    ordered: "descend"
               })
          } else {
               this.setState({
                    ordered: "ascend"
               })
          }
          const compare = (a, b) => {
               if(this.state.ordered === "ascend") {
                    if(a[heading] === undefined) {
                         return 1;
                    } else if(b[heading] === undefined) {
                         return -1;
                    } else if(heading === "name") {
                         return a[heading.first.localeCompare(b[heading.first])]
                    } else {
                         return a[heading] - b[heading]
                    }
               } else {
                    if(a[heading] === undefined) {
                         return 1;
                    } else if(b[heading] === undefined) {
                         return -1;
                    } else if(heading === "name") {
                         return b[heading.first.localeCompare(a[heading.first])]
                    } else {
                         return b[heading] - a[heading]
                    }
               }
          }

          const sorted = this.state.filteredUsers.sort(compare)
          this.setState({filteredUsers: sorted})
     }

     componentDidMount() {
          Api.search().then(response => {
               this.setState({
                    users: response.data.results, 
                    filteredUsers: response.data.results
               })
          })
     }

     handleSearch = (event) => {
          const filtered = event.target.value
          const filteredList = this.state.users.filter(employee => {
               let values = Object.values(employee).join("".toLocaleLowerCase)
               return values.indexOf(filtered.toLocaleLowerCase())!== -1 
          })
          this.setState({filteredUsers: filteredList})
     }

     render() {
          return (
               <div>
               <Lookup 
               handleSearch = {this.handleSearch}
               />
               <div>
               <Body
               headings = {this.heading}
               users = {this.state.filteredUsers}
               handleSort = {this.handleSort}
               ></Body>
               </div>
               </div>
          )
     }
}

export default Main;