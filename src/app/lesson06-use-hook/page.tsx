import Note from "./components/note";

async function fetchSample(name: string | null): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(name ?? ""), 3000));
}

export default function page() {
    const messagePromise = fetchSample("Charlie");

    return (
        <div>
            <Note messagePromise={messagePromise} />
        </div>
    );
}
