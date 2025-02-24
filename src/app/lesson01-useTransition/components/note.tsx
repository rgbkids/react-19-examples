import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition } from "react";

async function fetchSample(name: string | null): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve('sample:' + name), 3000));
}

export default function Note() {
    const [isPending, startTransition] = useTransition();
    const [name, setName] = useState("");
    const [sample, setSample] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = () => {
        // Memo: Just by calling startTransition, isPending becomes true.
        //       Once the process inside startTransition is complete, isPending becomes false.
        startTransition(async () => {
            const result = await fetchSample(name);
            if (result.includes("error")) {
                setSample(result);
                return;
            }
            router.push(pathname);
        });
    };

    return (
        <div className="m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                Calling `startTransition` alone sets `isPending` to `true`. This allows for a clean way to handle asynchronous operations. While this is a fundamental process, the following chapters will focus on form-specific optimizations, introducing even more concise and simplified approaches.
            </p>
            <input type="text" className="border p-2 rounded" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSubmit} disabled={isPending} className="bg-blue-500 text-white p-2 rounded">
                {isPending ? "Pending..." : "Post"}
            </button>
            {sample && <p>{sample}</p>}
            {isPending && <span className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin inline-block"></span>}
        </div>
    );
}