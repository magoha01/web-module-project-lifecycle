import React from 'react';
import Axios from 'axios';
import User from './components/User.js';
import FollowerList from './components/FollowerList.js'
import axios from 'axios';

class App extends React.Component {

  state = {
    followers: [ 
      {
        login: "lomelo-x",
        avatar_url: "https://avatars.githubusercontent.com/u/91710091?v=4",
        html_url: "https://github.com/lomelo-x",
      },

      {
        login: "lomelo-x",
        avatar_url: "https://avatars.githubusercontent.com/u/91710091?v=4",
        html_url: "https://github.com/lomelo-x",
      },

      {login: "lomelo-x",
      avatar_url: "https://avatars.githubusercontent.com/u/91710091?v=4",
      html_url: "https://github.com/lomelo-x",
      }
    ],

    currentUser: "magoha01",

    user: {
      id: 92870676,
      name: "Hailey M.",
      login:"magoha01",
      html_url: "https://github.com/magoha01",
      followers_url: "https://api.github.com/users/magoha01/followers",
      avatar_url: "https://avatars.githubusercontent.com/u/92870676?v=4",
      followers: 12,
      following: 12,
    }
}


//   state = {
   
//     user: [],
//     followers: []
      

// }

// componentDidMount() {
//   console.log('mounted')
//   axios.get('https://api.github.com/users/magoha01')
//     .then(resp => {
//       console.log(resp.data)
//       this.setState({
//           ...this.state,
//           user: resp.data      
//       })
//   })
//   .catch(err =>{
//     console.log(err);
//   })
// }

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

      <User user={this.state.user} />
      <FollowerList followers={this.state.followers}/>
      
    </div>);
  }
}

export default App;
