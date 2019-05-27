import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Form extends Component {
    state = {
      name: "",
      email: "",
      countries: "",
      states: "",
      cities: "",
      phone_number: "",
      about_me: ""

    };

    add = (e) => {
      e.preventDefault();

      // let {name, email, countries, states, cities, phone_number, about_me} = this.state;
      //
      //       fetch("http://localhost:8282/users", {
      //           method: "post",
      //           headers: {
      //               "Content-Type": "application/json"
      //           },
      //           body: JSON.stringify({
      //
      //               "name": {name},
      //               "email": {email},
      //               "phone_number": {phone_number},
      //               "address": null,
      //               "about_me": {about_me},
      //               "country_id": {countries},
      //               "state_id": {states},
      //               "city_id": {cities}
      //           })
      //
      //       })
      console.log("weeeee");
        }

    changeValue = (controlName, value) => {
      // console.log("change value:", controlName, value);
      this.setState({[controlName]: value});

    }

    render = () =>{
      let {add} = this;
      let {children} = this.props;
      let {name} = this.state;


      return (

            <form>
            {
            React.Children.map(
                children,
                (ChildrenItem) => {
                  return React.cloneElement(ChildrenItem, {
                    value: ChildrenItem.name,
                    changeValue: this.changeValue,
                  })
                }
            )
          }

                <p><input type="submit" className="togglerItem" onClick={add}></input></p>

            </form>
      );
    }

}


export default Form;
