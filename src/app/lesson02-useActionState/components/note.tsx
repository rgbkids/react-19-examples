// Using the useActionState hook to manage the state of actions and handle asynchronous operations concisely
import { useActionState } from "react";

async function fetchSample(name: string | null): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(name ?? ""), 3000));
}

export default function Note() {
    const [message, submitAction, isPending] = useActionState<string | null, FormData>(
        async (_prevState: string | null, formData: FormData) => {
            const resMessage = await fetchSample(formData.get("name") as string | null);
            return resMessage;
        },
        null
    );

    return (
        <form action={submitAction} className="m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                This is a hook that consolidates standard form processing. By using `useActionState`, form handling can be written in a much cleaner and more concise way.
            </p>
            <input type="text" className="border p-2 rounded" name="name" placeholder="name" />
            <button type="submit" disabled={isPending} className="bg-blue-500 text-white p-2 rounded">
                {isPending ? "Pending..." : "Post"}
            </button>
            {isPending && <span className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin inline-block"></span>}
            {message && <p>{message}</p>}
        </form>
    );
}