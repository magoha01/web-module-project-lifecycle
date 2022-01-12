import React from 'react';

class User extends React.Component{

    render() {
        console.log(this.props)
        return(
            <div>
            <h2>User Name</h2>
            <h3>user Login</h3>
            <img src="" alt="user image"/>
            <p>Followers:</p>
            <p>Following:</p>)
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