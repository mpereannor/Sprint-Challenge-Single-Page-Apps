import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object().shape({
  name: yup.string()
  .required('invalid format')});



export default function SearchForm(props) {
  

  const [searchName, setSearchName] = useState('');
  const [characters, setCharacters] = useState([]);

  const filterNames = (e) => {
    setSearchName(e.target.value);
  }

  const search = (e) => {
    e.preventDefault();
    setCharacters(characters.filter(ch => {
      return ch.name.includes(searchName)
    }))
  };

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      setCharacters(response.data.results)
    })
  }, []);
 
  return (
    <Formik 
        validationSchema={validationSchema}

        render ={ () => {
          return (
            <Form>
              <section className="search-form">
                <label>
                    Search By Name 
                    <input type="search"  value={searchName} onChange={filterNames}placeholder="where's summer?" />
                    <ErrorMessage name='name' component='div'/>
                </label>
                <button onClick={search}>Enter</button>
 
              </section>  
            </Form>

          )

        } 

    }
    />
  )
}
      

