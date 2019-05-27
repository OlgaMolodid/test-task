import React from 'react';
// import logo from './logo.svg';
import './App.css';

import CustomInput from "./customInput";
import CustomTextarea from "./CustomTextarea";
import Form from "./form";
import CustomSelect from "./customSelect";

function App() {

  return (

        <div className="App">
        <Form>

        <CustomInput
        name = "name"
        type = "text"
        placeholder="Enter your name"
        >
        </CustomInput>

        <CustomInput
        name = "email"
        type = "email"
        placeholder="Enter your email"
        >
        </CustomInput>

        <CustomSelect
        name = "countries"
        srcUrl='/countries'/>
        <CustomSelect
        name = "states"
        srcUrl='/states'/>
        <CustomSelect
        name = "cities"
         srcUrl='/cities'/>


        <CustomInput
        name = "phone number"
        type = "number"
        placeholder="Enter your phone number"
        >
        </CustomInput>

        <CustomTextarea
        name = "About me"
        type = "textarea"
        placeholder="Would you like to tell us anything about you?"
        >
        </CustomTextarea>


            </Form>
        </div>

  );
}

export default App;
