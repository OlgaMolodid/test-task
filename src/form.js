import React, { Component } from 'react';



export class Form extends Component {
  state = {
    name: "",
    email: "",
    countries: "",
    states: "",
    cities: "",
    phone_number: "",
    about_me: "",
    countriesRef: {},
    statesRef: {},
    citiesRef: {},
  };

  add = (e) => {
    e.preventDefault();

    let { name, email, countries, states, cities, phone_number, about_me } = this.state;

    fetch("http://localhost:8282/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

        "name": name,
        "email": email,
        "phone_number": phone_number,
        "address": null,
        "about_me": about_me,
        "country_id": countries,
        "state_id": states,
        "city_id": cities
      })

    })
    console.log("weeeee");
  }

  changeValue = (controlName, value) => {

    this.setState({ [controlName]: value });
    if (controlName === 'countries') {
      this.state['statesRef'].current.removeAttribute('hidden');
      this.state['citiesRef'].current.removeAttribute('hidden');
    }

  }

  getRef = (ref, controlName) => {
    this.setState({
      [controlName + 'Ref']: ref
    })
  } 

  render = () => {
    let { add, getRef } = this;
    let { children } = this.props;
    // let {name} = this.state;


    return (

      <form>
        {
          React.Children.map(
            children,
            (ChildrenItem) => {
              return React.cloneElement(ChildrenItem, {

                value: ChildrenItem.name,
                changeValue: this.changeValue,
                getRef
              })
            }
          )
        }
        <div className="sub">
          <p><button type="submit" onClick={add}>SUBMIT</button></p>
        </div>
      </form>
    );
  }

}


export default Form;
