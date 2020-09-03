//search = lookup

import React from 'react';


function Lookup ({handleSearch}) {
  return (
    <div className="App">
         <input className="input m-3 col-md-3" placeholder="Filter workers"  onChange = {event => handleSearch(event)}></input>
         <br></br>
         <input className="input mx-3 col-md-3" placeholder="Filter by phone"  onChange = {event => handleSearch(event)}></input>

    </div>
  );
}

export default Lookup;