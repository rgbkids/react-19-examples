// How to smoothly integrate optimistic UI and asynchronous processing using useActionState and useOptimistic
import { useActionState, useOptimistic, useState } from "react";

async function fetchSample(name: string | null): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(name ?? ""), 3000));
}

export default function Note() {
    const [name, setName] = useState("");
    const [optimisticName, setOptimisticName] = useOptimistic<string | null>("");

    const [error, submitAction, isPending] = useActionState<string | null, FormData>(
        async (_prevState: string | null, formData: FormData) => {
            const newName = formData.get("name") as string | null;
            if (newName === '') {
                return "Error: required";
            }
            setOptimisticName(newName);
            await fetchSample(newName);
            setName(newName ?? "");
            return null;
        },
        null
    );

    return (
        <form action={submitAction} className="m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                An example combining `useActionState` and `setOptimisticName`.
            </p>
            <p className="mt-2">Name: {optimisticName || name}</p>
            <input type="text" name="name" placeholder="name" className="border p-2 mb-2 rounded" />
            <button type="submit" disabled={isPending} className="bg-blue-500 text-white p-2 rounded">
                {isPending && <span className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin inline-block" />}
                Post
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
}