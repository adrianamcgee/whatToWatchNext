import React from "react";

function Search({onChange}) {
  function handleChange(event){
    onChange(event.target.value);
  }
  return (
    <div className="search">
      <input onChange={handleChange} type="text" className="searchTerm" />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default Search;
