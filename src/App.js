import React from 'react';
// import logo from './logo.svg';
import './App.css';

import CustomInput from "./customInput";
import CustomTextarea from "./CustomTextarea";
import Form from "./form";
import CustomSelect from "./customSelect";
import UserItem from "./user_item";


function App() {

  return (

        <div className="App">
        <Form>

        <CustomInput
        required = "true"
        name = "name"
        type = "text"
        placeholder="Enter your name"
        >
        </CustomInput>

        <CustomInput
        required = "true"
        name = "email"
        type = "email"
        placeholder="Enter your email"
        >
        </CustomInput>

        <CustomSelect
        required = "true"
        name = "countries"
        srcUrl='/countries'/>
        <CustomSelect
        required = "true"
        name = "states"
        srcUrl='/states'/>
        <CustomSelect
        required = "true"
        name = "cities"
         srcUrl='/cities'/>


        <CustomInput
        // required = "false"
        name = "phone number"
        type = "number"
        placeholder="Enter your phone number"
        >
        </CustomInput>

        <CustomTextarea
        // required = "false"
        name = "About me"
        type = "textarea"
        placeholder="Would you like to tell us anything about you?"
        >
        </CustomTextarea>


            </Form>
            <UserItem
            srcUrl='/users'/>


        </div>

  );
}

export default App;
