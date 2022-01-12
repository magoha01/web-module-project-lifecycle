import React from 'react';
import Axios from 'axios';
import User from './components/User.js';
import FollowerList from './components/FollowerList.js'
import axios from 'axios';
 

class App extends React.Component {

  state = {
    followers: [],

    currentUser: "",

    user: {},
}

componentDidMount () {
  axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp =>{
      this.setState({
        ...this.state,
        user: resp.data
      });
    }).catch(err =>{
          console.log(err);
        })
}

componentDidUpdate (prevProps, prevState) {
  if(this.state.user !== prevState.user) {
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(resp =>{
      this.setState({
        ...this.state,
        followers: resp.data
      });
    }).catch(err =>{
          console.log(err);
        })
  }
}

handleChange = (e) => {
  this.setState({
    ...this.state,
    currentUser: e.target.value,
  
  });
}
 
handleSubmit = (e) => {
  e.preventDefault()
  axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp =>{
      this.setState({
        ...this.state,
        user: resp.data
      });
    }).catch(err =>{
          console.log(err);
        })
}

  render() {
    return(
    <div>

      <div>
        <h1>Github User Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}/>
          <button>Search</button>
        </form> 
      </div>

      <User user={this.state.user} />
      <h2>Followers</h2>
      <FollowerList followers={this.state.followers}/>
      
    </div>);
  }
}

export default App;
