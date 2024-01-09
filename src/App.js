import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBil";
import FriendList from "./Components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friend, setFriend] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handlefriendList(moreFriend) {
    setFriend((friendList) => [...friendList, moreFriend]);
    setShowAddFriend(false)
  }

  function handleAddfriend() {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  }

  function handleSelection(friend) {
    setSelectedFriend((current) => current?.id === friend.id ? null : friend);
    setShowAddFriend(false)
  }

  function handleSplitBill(value) {
    setFriend((friends) => friends.map((friend) => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friend={friend}
          onHandleSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend handlefriendList={handlefriendList} />}

        <Button onClick={handleAddfriend}>{showAddFriend ? "Close" : "Add friend"}</Button>

      </div>
      {selectedFriend && <FormSplitBill
        selectedFriend={selectedFriend}
        onSplitBill={handleSplitBill} />}
    </div>
  )
}

export default App;
