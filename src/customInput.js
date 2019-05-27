import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CustomInput extends Component {

  state = {
    value: "nothing",
    required: true
  }

   handler = (e)=> {
     this.setState({value: e.target.value});
     // console.log(this.state.value);
     this.props.changeValue(this.props.name, this.state.value)
   }


   // changeStatus = (selectedIndex, ch)=>()=>{
   //   this.setState({
   //     activeTogglerIndex: selectedIndex,
   //
   //   })
   //
   //   this.props.changeValue(this.props.name, ch[selectedIndex].props.name);
   // };

   render = () =>{
     let {name, type, placeholder, value} = this.props;
     let {handler} = this;
     return (
     <label>
       <div>{name}</div>
       <input
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={handler}
       />
     </label>
   )
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
