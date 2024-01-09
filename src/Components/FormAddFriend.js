import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ handlefriendList }) {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('https://i.pravatar.cc/48');

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !imgUrl) return;
        const id = crypto.randomUUID();

        const newfriend = {
            id,
            name,
            imgUrl: `${imgUrl}?=${id}`,
            balance: 0
        }
        handlefriendList(newfriend);
        setName("");
        setImgUrl('https://i.pravatar.cc/48');
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧑‍🤝‍🧑Friend Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>🏞️Image URL</label>
            <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
            <Button>Add</Button>
        </form>
    )
}

export default FormAddFriend;
