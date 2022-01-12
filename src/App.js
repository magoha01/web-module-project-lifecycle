import React from 'react';
import Axios from 'axios';
import User from './components/User.js';
import FollowerList from './components/FollowerList.js'
import axios from 'axios';

class App extends React.Component {

  state = {
   
    user: [],
    followers: []
      // id: 92870676,
      // name: "Hailey M.",
      // login:"magoha01",
      // html_url: "https://github.com/magoha01",
      // followers_url: "https://api.github.com/users/magoha01/followers",
      // avatar_url: "https://avatars.githubusercontent.com/u/92870676?v=4",
      // followers: 12,
      // following: 12,

}

componentDidMount() {
  console.log('mounted')
  axios.get('https://api.github.com/users/magoha01')
}

  render() {
    return(
    <div>

      <div>
        <h1>Github User Search</h1>
        <form>
          <input/>
          <button>Search</button>
        </form> 
      </div>

      <User />
      <FollowerList />
      
    </div>);
  }
}

export default App;
