import './scss/app.scss';
import React, { useState} from "react";
import "./mocks/post";
import { useForm } from "react-hook-form";
import ErrorMessage from "./components/errorMessage";


export default function App() {

  let [answer, setAnswer] = useState();
  let [checkBoxCheck, setCheboxCheck] = useState(true);

  const {
    register,
    reset,
    handleSubmit ,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true    
  })


  const handleReset = () =>{
    reset({
      firstName: "",
      lastName:"",
      email:"",
      org:"",
      euResident:"",
    })
  };


  const onSubmit = async (data) => {
    validateCheckbox();
    if(checkBoxCheck){
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data)
      };
      try {
        const res = await fetch("/api/sendForm", requestOptions)
        const json = await res.json();
        setAnswer(json.message);
        reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateCheckbox = () =>{
      const checkBoxes = document.querySelectorAll('input[type=checkbox]');
      let isChecked = false;
      for (var i = 0; i < checkBoxes.length; i++) {
          if ( checkBoxes[i].checked ) {
              isChecked = true;
          };
      };
      isChecked ? setCheboxCheck(true) : setCheboxCheck(false);
  }
  const checkboxes = ["advances", "alerts", "other communications"]

  return (
    <div className="App">
      <div className="container">
        {answer === undefined ?
          <div>
            <h1>Sign up for email updates</h1>
            <p>*Indicates Required Field</p> 
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
              <legend>Personal data:</legend>
              <div className="errors">
              {errors.firstName && <ErrorMessage name='First Name'/>} 
              {errors.lastName && <ErrorMessage name='Last Name'/>}
              {errors.email && <ErrorMessage name='Email' message={errors.email.message}/>}
              {errors.org && <ErrorMessage name='Organization'/>}
              {errors.euResident && <ErrorMessage name='EU RESIDENT'/>}
              {!checkBoxCheck && <ErrorMessage name='' message='One checkbox should be checked'/>}

              </div>  
              <div className="row two-cols">
                <div className="formElement">
                  <label htmlFor="firstName">FIRST NAME*</label>
                  <input
                    aria-label="First Name"
                    aria-required="true"
                    className={errors.firstName ? 'error' : null}
                    {...register("firstName", { required: true } )}
                    type="text"
                    placeholder=""
                    nanme="First Name"
                    id="firstName"
                  />
                </div>

                <div className="formElement">
                  
                  <label htmlFor="lastName">LAST NAME*</label>
                  <input
                    aria-label="Last Name"
                    aria-required="true"
                    {...register("lastName", { required: true })}
                    type="text"
                    placeholder=""
                    className={errors.lastName ? 'error' : null}
                    
                    id="lastName"
                  />
                </div>
              </div>
              <div className="row two-cols">
                <div className="formElement">
                  <label htmlFor="email">EMAIL ADDRESS*</label>
                  <input
                    aria-label="Emial Address"
                    aria-required="true"
                    {...register("email", 
                    { 
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                      }
                    })}
                    type="email"
                    placeholder=""
                    className={errors.email ? 'error' : null}
                    id="email"
                  />
                </div>

                <div className="formElement">
                  
                  <label htmlFor="organization">ORGANIZATION*</label>
                  <input
                    aria-label="Organization"
                    aria-required="true"
                    {...register("org", { required: true })}
                    type="text"
                    placeholder=""
                    className={errors.org ? 'error' : null}
                    id="organization"
                  />
                </div>
              </div>
              <div className="formElement">
                <label htmlFor="euResident">EU RESIDENT*</label>
                <select defaultValue="" 
                className={errors.euResident ? 'error' : null}
                {...register("euResident", { required: true })}>
                  <option  value="" disabled>- SELECT ONE - </option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              

              <div className="formElement">
                <fieldset className="checkboxes">
                  { checkboxes.map((item, index)=>{
                    return(
                      <div key={index} >  
                      <input
                      type="checkbox" 
                      id={item} 
                      name={item}
                      value={item}
                      defaultChecked={index === 0 ? "true" : ""}
                      onClick={() => validateCheckbox()}
                      />
                      <label htmlFor={item}>{item}</label>
                    </div>      
                    )
                  })}
                </fieldset>   
              </div>


              <div className="formElement">
                <input
                  aria-label="Submit"
                 className="button bg-purple" type="submit" value="Submit" />
                <input
                aria-label="Reset"
                  className="button bg-white" type="button" value="Reset" onClick={() => handleReset()} />
              </div>
              </fieldset>
            </form>
          </div>
        : <p>{answer}</p> 
        }
      </div>
    </div>
  );
}
