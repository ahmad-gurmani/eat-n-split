import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    // derived state
    const paidByFriend = bill ? bill - paidByUser : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser)
        console.log("submit");
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>
            <label>💰 Bill value</label>
            <input type="text" name="" id="" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
            <label>🧍‍♂️ Your expense</label>
            <input type="text" name="" id="" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />
            <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
            <input disabled type="text" name="" id="" value={paidByFriend} />
            <label>😬 Who is Paying the bill?</label>
            <select name="" id="" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">you</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}

export default FormSplitBill;
