// How to manage form status (posting, error, etc.) using the useFormStatus hook
import { useFormStatus } from "react-dom";

async function fetchSample(name: string | null): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(name ?? ""), 3000));
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return <button type="submit" disabled={pending} className="bg-blue-500 text-white p-2 rounded">{pending ? "Posting..." : "Post"}</button>;
}

export default function Note() {
    async function handleSubmit(formData: FormData) {
        const name = formData.get("name") as string | null;
        await fetchSample(name);
    }

    return (
        <form action={handleSubmit} className="m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                You can retrieve the form state within a child component. There is no need to pass props like `isPending`.
            </p>
            <input type="text" className="border p-2 rounded" name="name" placeholder="name" required />
            <SubmitButton />
        </form>
    );
}