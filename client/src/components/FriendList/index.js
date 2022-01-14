import React from 'react';
import { Link } from 'react-router-dom';
import FriendList from '../components/FriendList';

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p className="bg-dark text-light p-3">{username}, make some friends!</p>;
  }

  return (
    <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
            <ThoughtList thoughts={user.thoughts} title={`${user.username}'s thoughts...`} />
        </div>

        <div className="col-12 col-lg-3 mb-3">
            <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
            />
        </div>
    </div>
  );
};

export default FriendList;