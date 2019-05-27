import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CustomSelect extends Component {

  state = {
    value: null,
    required: true,
    options: []
  }

  handler = (e) => {
    this.setState({value: e.target.value})
    this.props.changeValue(this.props.name, e.target.value)
  }
  //
  // fetch('http://localhost:8282/cities/5')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  //
  //   fetch(
  //     'http://localhost:8282/users', {
  //       method: 'get',
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     // fetch(
  //     //   'http://localhost:8282/users/6', {
  //     //     method: 'DELETE'
  //     // })
  //     //   .then(res => res.json())
  //     //   .then(data => {
  //     //     console.log(data);
  //     //   })
  //       fetch(
  //         'http://localhost:8282/users', {
  //           method: 'post',
  //           body: {
  //             "id": "4",
  //             "name": "Arnold Shwartz",
  //             "email": "r.f@gmail.com",
  //             "phone_number": "380631213141",
  //             "address": null,
  //             "about_me": null,
  //             "country_id": "1",
  //             "state_id": "13",
  //             "city_id": "5"
  //           },
  //           headers: {
  //             'Content-Type': 'application/json'
  //           }
  //       })
  //         .then(res => res.json())
  //         .then(data => {
  //           console.log(data);
  //         });
  componentDidMount(){//сюда надо передавать requestOption??

    // fetch('http://localhost:8282/cities/5')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    //
    let requestOption;
    const { srcUrl } = this.props;
    let requestUrl = `http://localhost:8282${srcUrl}`;

    fetch(requestUrl).then(
      res => res.json()
    ).then(
      data => {
        console.log(data);
        this.setState({options: data});
          })
  }


   render = () =>{
     let {handler} = this;
     let {name, type, placeholder, value} = this.props;
     let {options} = this.state;
     return (
     <label>
       <div>{name}</div>
       <select onChange = {handler}>
          {
            (!this.state.value)
              ? <option value={null}></option>
              : null
            }
            {

      options.map((item, ind) =>

        <option
          key={ind}
          value={item.name}

        >{item.name}</option>)
  }

     </select>
     </label>
   )
   }

}





   export default CustomSelect;
