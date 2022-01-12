import React from 'react';

class User extends React.Component{

    render() {
        const { user } = this.props;
       
        return(
            <div>
            <h2>{user.name}</h2>
            <h3>{user.login}</h3>
            <img src={user.avatar_url}alt="user image"/>
            <p>Followers:{user.followers}</p>
            <p>Following:{user.following}</p>
            </div>
        )}
}

            {/* <h2>User Name</h2>
            <h3>User Login</h3>
            <img src="" alt="user image"/>
            <p>Followers:</p>
            <p>Following:</p>
        </div> */}



export default User;