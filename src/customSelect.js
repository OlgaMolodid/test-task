import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CustomSelect extends Component {

  state = {
    value: null,
    // required: true,
    options: []
  }

  handler = (e) => {
    this.setState({value: e.target.value})
    this.props.changeValue(this.props.name, e.target.value)
  }

  componentDidMount(){


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
     let {name, type, placeholder, value, required} = this.props;
     let {options} = this.state;
     return (
     <label>
       <div>{name}</div>
       <select 
       className={
            required === "true"
                ? " required"
                : ""
        }
        onChange = {handler}>
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
      <span class="help-text"></span>
     </label>
   )
   }

}





   export default CustomSelect;
