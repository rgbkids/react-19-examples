// How to use the new action of the <form> element in React DOM and how to communicate with the server
import { useState } from "react";

async function fetchSample(name: string | null): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(name ?? ""), 3000));
}

export default function Note() {
    const [message, setMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const resMessage = await fetchSample(formData.get("name") as string);
        setMessage(resMessage);
    }

    return (
        <form onSubmit={handleSubmit} className="m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                This is a method to connect custom functions with a form. You can access form values via `formData`. It is useful when `useActionState` cannot handle a case or when standard processing is not sufficient.
            </p>
            <input type="text" className="border p-2 rounded" name="name" placeholder="name" required />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Post
            </button>
            <p>{message}</p>
        </form>
    );
}