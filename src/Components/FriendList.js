import Friends from "./Friends"

function FriendList({ friend, onHandleSelection, selectedFriend }) {

    return (
        <>
            <ul>
                {friend.map((friend) => {
                    return (
                        <Friends
                            friend={friend}
                            key={friend.id}
                            onHandleSelectionInside={onHandleSelection}
                            selectedFriend={selectedFriend}
                        />
                    )
                })}
            </ul>
        </>
    )
}

export default FriendList
