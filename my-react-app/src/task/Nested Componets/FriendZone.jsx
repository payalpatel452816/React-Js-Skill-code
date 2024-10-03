const FriendZone = ({ friends }) => {
    return (
      <div>
        <h3>Friends List</h3>
        <ul>
          {Array.isArray(friends) && friends.length > 0 ? (
            friends.map((friend, index) => (
              <li key={index}>{friend}</li>
            ))
          ) : (
            <li>No friends available.</li>
          )}
        </ul>
      </div>
    );
  };
export default FriendZone  