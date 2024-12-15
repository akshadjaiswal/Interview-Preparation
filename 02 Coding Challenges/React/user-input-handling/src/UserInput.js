import React, { useState } from "react";

const UserInput = () => {
    const [input, setInput] = useState("")
    const [items, setItems] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            setItems([...items, input])
            setInput("")
        }
    }

    return (
        <div>
            <h1>User Input</h1>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={input}
                    onChange={handleInput}
                    placeholder="Enter the item">
                </input>
                <button
                    type="submit"
                >
                    Add
                </button>
            </form>
            <div>
                <h2>Added Items</h2>
                {items && items.length > 0 ? (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}

                    </ul>
                ) : (
                    <p>No items added yet</p>
                )}
            </div>
        </div>
    )
}

export default UserInput;