import './scss/app.scss';
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./components/errorMessage";

export default function App() {
  const [aparatos, setAparatos] = useState([]);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true    
  })


  const handleReset = () =>{
    //console.log(Form.State.errors);
    reset({
      firstName: "",
      lastName:"",
      email:"",
      org:"",
      euResident:"",
    })
  };


  const onSubmit = async (data) => {

    try {
      reset();
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const getData = async () => {
      try {

      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);




  return (
    <div className="App">
      <div className="container">
        <h1>Sign up for email updates</h1>
        <p>*Indicates Required Field</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="errors">
          {errors.firstName && <ErrorMessage name='First Name'/>} 
          {errors.lastName && <ErrorMessage name='Last Name'/>}
          {errors.email && <ErrorMessage name='Email'/>}
          {errors.org && <ErrorMessage name='Organization'/>}
          {errors.euResident && <ErrorMessage name='EU RESIDENT'/>}

          </div>  
          <div className="row two-cols">
            <div className="formElement">
              <label htmlFor="firstName">FIRST NAME*</label>
              <input
                className={errors.firstName ? 'error' : null}
                {...register("firstName", { required: true } )}
                type="text"
                placeholder=""
                nanme="First Name"
              />
            </div>

            <div className="formElement">
              
              <label htmlFor="lastName">LAST NAME*</label>
              <input
                {...register("lastName", { required: true })}
                type="text"
                placeholder=""
                className={errors.lastName ? 'error' : null}
              />
            </div>
          </div>

          <div className="row two-cols">
            <div className="formElement">
              <label htmlFor="email">EMAIL ADDRESS*</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder=""
                className={errors.email ? 'error' : null}
              />
            </div>

            <div className="formElement">
              
              <label htmlFor="org">ORGANIZATION*</label>
              <input
                {...register("org", { required: true })}
                type="text"
                placeholder=""
                className={errors.org ? 'error' : null}
              />
            </div>
          </div>


          <div className="formElement">
            <label htmlFor="email">EU RESIDENT*</label>
            <select defaultValue="" {...register("euResident", { required: true })}>
              <option  value="" disabled>- SELECT ONE - </option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              className={errors.euResident ? 'error' : null}
              classNamePrefix="euResident"
            </select>
          </div>

          <div className="formElement">
            <input className="button bg-purple" type="submit" value="Submit" />
            <input className="button bg-white" type="button" value="Reset" onClick={() => handleReset()} />
          </div>
        </form>
      </div>
    </div>
  );
}
