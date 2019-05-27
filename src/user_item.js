import React, { Component } from 'react';


class UserItem extends Component {

state = {
users: []

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
        this.setState({users: data});
          })
  }


  render = () => {



    const { users} = this.state;
    return(
      <div>


                      {
                        users.map((user, ind) =>
                          <div className="guest">
                          <span> Гость <b>{ user.name }</b>
                          <br></br>

                          <br></br>

                          </span>
                          </div>

                          )
                      }







      </div>
    )
  }
}

export default UserItem;
