// How to efficiently process data while interacting with the server using server functions
"use client";

import { action } from "../actions";

export default function Note() {
    async function handleClick() {
        const stat = await action();
        alert(stat);
    }

    return (
        <div className="m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                You can call functions that can only be executed on the server from events like clicks. When you click, the server uptime will be displayed.
            </p>
            <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
                Server Action
            </button>
        </div>
    );
}