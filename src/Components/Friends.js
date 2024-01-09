import Button from "./Button";

function Friends({ friend, onHandleSelectionInside, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    you owe {friend.name} ${Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you ${Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance === 0 && (
                <p>
                    you and  {friend.name} are even.
                </p>
            )}
            <Button onClick={() => onHandleSelectionInside(friend)}>{isSelected ? "close" : "Select"}</Button>
        </li>
    )
}

export default Friends;