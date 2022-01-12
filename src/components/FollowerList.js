import React from 'react';
import Follower from './Follower.js';

class FollowerList extends React.Component {

    render() {
        const { followers } = this.props;
        return(
            <div>
            {
            followers.map(follower => {
                return(<Follower key={follower.id} follower={follower}/>)
            })
                }
            </div>
        )
    }
}

export default FollowerList;
