import React, { Component } from 'react';


class UserItem extends Component {

  state = {
    users: [],
    countriesData: [],
    statesData: [],
    citiesData: [],
  }

  componentDidMount() {

    let requestUrl = `http://localhost:8282/countries`;

    fetch(requestUrl).then(
      res => res.json()
    ).then(
      data => {
        this.setState({ countriesData: data });
      })

    requestUrl = `http://localhost:8282/states`;

    fetch(requestUrl).then(
      res => res.json()
    ).then(
      data => {

        this.setState({ statesData: data });
      })

    requestUrl = `http://localhost:8282/cities`;

    fetch(requestUrl).then(
      res => res.json()
    ).then(
      data => {
        this.setState({ citiesData: data });
      })


    // const { srcUrl } = this.props;
    // requestUrl = `http://localhost:8282${srcUrl}`;

    // fetch(requestUrl).then(
    //   res => res.json()
    // ).then(
    //   data => {
    //     this.setState({ users: data });
    //   })
  }


  getCountry = id => {
    const country = this.state.countriesData.find(item => item.id == id)
    return (country) ? country.name : ''
  }
  getState = id => {
    const state = this.state.statesData.find(item => item.id == id)
    return (state) ? state.name : ''
  }
  getCity = id => {
    const city = this.state.citiesData.find(item => item.id == id)
    return (city) ? city.name : ''
  }

  getDate = (date) => {
    let a = new Date(date);
    let b = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear();
    return b;
  }

  render = () => {

    const { name } = this.props;
    const { getDate } = this;
    const { getState, getCountry, getCity } = this;
    const { users } = this.props;
    return (
      <div>
      <div >{name}</div>
      <table>
        <tr className="header">
          <td>Name</td>
          <td>Email</td>
          <td>Phone number</td>
          <td>Country, state, city</td>
          <td>Creation date</td>
        </tr>


        {
          users.map((user, ind) =>
            <tr key={ind} className="guest">
              <td>{(user.name && typeof user.name === "string")
                ? user.name
                : "smth wrong"}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>


              <td>{getCountry(user.country_id)}, {getState(user.state_id)}, {getCity(user.city_id)}</td>
              <td>{getDate(user.createdAt)}</td>


            </tr>
          )
        }


      </table>
      </div >
    )
  }
}

export default UserItem;
