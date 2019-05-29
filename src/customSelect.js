import React, { Component } from 'react';


class CustomSelect extends Component {

  constructor(props) {
    super(props)
    this.selectRef = React.createRef();

    props.getRef(this.selectRef, props.name)
  }
  state = {
    value: null,
    required: true,
    options: [],
  }


  handler = (e) => {
    // if (this.props.id === 'countriesId') {
      // document.getElementById('statesId').removeAttribute('hidden')
      // document.getElementById('citiesId').removeAttribute('hidden')
    // }
    this.setState({ value: e.target.value })
    this.props.changeValue(this.props.name, e.target.value)
  }

  componentDidMount() {



    const { srcUrl } = this.props;
    let requestUrl = `http://localhost:8282${srcUrl}`;

    fetch(requestUrl).then(
      res => res.json()
    ).then(
      data => {

        this.setState({ options: data });
      })
  }
  
  // componentDidMount = () => {
  //   this.selectRef.id = this.props.id
  // }

  render = () => {
    let { handler } = this;
    let { name,  required } = this.props;
    let { options } = this.state;
    return (
      <label className = "pole"
      ref = {this.selectRef}
      // id={this.props.id}
      
      hidden={this.props.id !== 'countriesId' ? true : false}>
        <div className = "pole">{name}</div>
        <select
          
          className={
            required === "true"
              ? " required input"
              : "input"
          }
          onChange={handler}>
          {
            (!this.state.value)
              ? <option value={null}></option>
              : null
          }
          {

            options.map((item, ind) =>

              <option
                key={ind}
                value={item.id}

              >{item.name}</option>)
          }

        </select>
        <span class="help-text"></span>
        <p></p>
      </label>
    )
  }

}





export default CustomSelect;
