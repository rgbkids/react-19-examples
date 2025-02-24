// How to implement optimistic UI updates using the useOptimistic hook to improve user experience
import { useOptimistic, startTransition } from "react";
import { useState } from "react";

async function fetchSample(name: string | null): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(name ?? ""), 3000));
}

export default function Note() {
    const [name, setName] = useState<string | null>(null);

    const [optimisticName, setOptimisticName] = useOptimistic<string | null>(
        name
    );

    async function handleUpdate() {
        startTransition(async () => {
            setOptimisticName("■■■"); // Note: This renders faster than `setName()`.
            const result = await fetchSample("Bob");
            setName(result);
        });
    }

    return (
        <div className="m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                You can instantly display values you want to show for now (optimistic updates). It renders even faster than the timing of `useState`.
            </p>
            <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded">
                Show Name
            </button>
            <p className="mt-2">{optimisticName}</p>
        </div>
    );
}