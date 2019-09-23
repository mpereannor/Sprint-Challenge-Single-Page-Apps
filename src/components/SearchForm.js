import React from "react";


export default function SearchForm(props) {
  
  const {onSearch, searchName} = props; //this is a destructure properties coming from characterlist 


  return (
       
      <section className="search-form">
        <label htmlFor='nameInput'>
            Search By Name 
        </label>
            <input onChange={onSearch} value={searchName} input id='searchInput' type='text'/>
      </section>  

          )

        }

  
      

