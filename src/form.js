import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Form extends Component {
    state = {
      name: "",
      email: "",
      countries: "",
      states: "",
      cities: "",
      phoneNumber: "",
      aboutMe: ""

    };

    // showData = (e) =>{
    //   e.preventDefault();
    //   console.log("name: ", this.state.name,
    //               ", password: ", this.state.password,
    //               ", gender: ", this.state.gender,
    //               ", age: ", this.state.age,
    //               ", layout: ", this.state.layout,
    //               ", language: ", this.state.language);
    // }

    changeValue = (controlName, value) => {
      // console.log("change value:", controlName, value);
      this.setState({[controlName]: value});

    }

    render = () =>{
      let {showData} = this;
      let {children} = this.props;
      let {name} = this.state;


      return (

            <form>
            {
            React.Children.map(
                children,
                (ChildrenItem) => {
                  return React.cloneElement(ChildrenItem, {
                    // ...ChildrenItem, было value: ChildrenItem.props.value,
                    value: ChildrenItem.name,
                    changeValue: this.changeValue,
                  })
                }
            )
          }

                <p><input type="submit" className="togglerItem" onClick={showData}></input></p>
                {

                    // React.Children.map(
                    //     children,
                    //     (ChildrenItem) => {
                    //       for (let key in this.state){
                    //
                    //         if (ChildrenItem.props.name === key){
                    //         this.setState({key: ChildrenItem.props.value})
                    //         console.log(key);
                    //         // console.log(this.state[key]);
                    //       }
                    //
                    //       }
                    //
                    //     }
                    // )
                }
            </form>
      );
    }

}


export default Form;
