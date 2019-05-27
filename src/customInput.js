import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CustomInput extends Component {

  state = {
    value: "nothing",
    // required: true
  }

   handler = (e)=> {
     this.setState({value: e.target.value});
     this.props.changeValue(this.props.name, this.state.value)
   }


   render = () =>{
     let {name, type, placeholder, value, required} = this.props;
     let {handler} = this;

     return (
     <label>
       <div>{name}</div>

       <input
        className={
          required === true ? "required-input" : ""}
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={handler}
       />
       <span class="help-text"></span>
     </label>
     )

 //     if(required===true){
 //     return (
 //     <label>
 //       <div>{name}</div>
 //
 //       <input
 //        className="required-input"
 //         type={type}
 //         placeholder={placeholder}
 //         value={value}
 //         onChange={handler}
 //       />
 //       <span class="help-text"></span>
 //     </label>
 //   )
 // } else {
 //     return (
 //     <label>
 //       <div>{name}</div>
 //
 //       <input
 //         type={type}
 //         placeholder={placeholder}
 //         value={value}
 //         onChange={handler}
 //       />
 //     </label>
 //   )
 //   }
   }

}

   CustomInput.propTypes = {


       placeholder: PropTypes.string,
       handler: PropTypes.func,
       type: PropTypes.oneOf(['text', 'password', 'number']),
       value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ]),
   };



   export default CustomInput;
