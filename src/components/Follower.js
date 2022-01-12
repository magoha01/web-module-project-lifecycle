import React from 'react';

class Follower extends React.Component {

    render() {
        const {follower} = this.props

        return(
        <div>
       
        <img width="250px" src={follower.avatar_url} alt="follower image"/>
        <h3>{follower.login}</h3>
        </div>
        );
    }
}

export default Follower;