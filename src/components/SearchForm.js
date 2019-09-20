import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string()
  .required('invalid format')});



export default function SearchForm(onSubmit) {
 
  return (
    <Formik 
        validationSchema={validationSchema}
        onSubmit = {onSubmit}

        render ={ () => {
          return (
            <Form>
              <section className="search-form">
                <label>
                    Search By Name 
                    <input type="text" placeholder="where's summer?" />
                    <ErrorMessage name='name' component='div'/>
                </label>
                  
              </section>  
            </Form>

          )

        } 

    }
    />
  )
}
      
     // Add a search form here

