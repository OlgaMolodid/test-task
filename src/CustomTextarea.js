import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CustomTextarea extends Component {

  state = {
    value: "nothing",
    // required: false
  }

   handler = (e)=> {
     this.setState({value: e.target.value});
     this.props.changeValue(this.props.name, this.state.value)
   }

   render = () =>{
     let {name, placeholder, value, required} = this.props;
     let {handler} = this;
     return (
     <label>
       <div>{name}</div>
       <textarea

         placeholder={placeholder}
         value={value}
         onChange={handler}
       />
     </label>
   )
   }

}

  //  CustomTextarea.propTypes = {
  //
  //
  //      placeholder: PropTypes.string,
  //      handler: PropTypes.func,
  //      type: PropTypes.oneOf(['text', 'password', 'number']),
  //      value: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.any,
  // ]),
  //  };



   export default CustomTextarea;
