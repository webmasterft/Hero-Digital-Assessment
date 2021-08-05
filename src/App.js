import './scss/app.scss';
import { normalize } from 'react-style-reset';
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const [aparatos, setAparatos] = useState([]);


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

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
          <div className="row two-cols">
            <div className="formElement">
              <label htmlFor="fname">FIRST NAME*</label>
              <input
                {...register("fname", { required: true })}
                type="text"
                placeholder=""
              />
            </div>


            <div className="formElement">
              <label htmlFor="lname">LAST NAME*</label>
              <input
                {...register("lname", { required: true })}
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div className="row two-cols">
            <div className="formElement">
              <label htmlFor="email">EMAIL ADDRES*</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder=""
              />
            </div>

            <div className="formElement">
              <label htmlFor="organization">ORGANIZATION*</label>
              <input
                {...register("organization", { required: true })}
                type="text"
                placeholder=""
              />
            </div>
          </div>


          <div className="formElement">
            <label htmlFor="email">EU RESIDENT*</label>
            <select {...register("tipo")}>
              <option value="iluminacion">Iluminación</option>
              <option value="electrodomesticos">Electrodomésticos</option>
              <option value="enfriamiento">Enfriamiento</option>
              <option value="calentamiento">Calentamiento de agua</option>
              <option value="tecnologia">Tecnología y entretenimiento</option>
            </select>
          </div>

          <div className="formElement">
            <input className="button bg-purple" type="submit" value="Submit" />
            <input className="button bg-white" type="button" value="Reset" />
          </div>
        </form>
      </div>
    </div>
  );
}
