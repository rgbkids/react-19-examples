"use client";

// How to efficiently handle asynchronous data or resources using the use hook
import { Suspense, use } from "react";

function Message({ messagePromise }: { messagePromise: Promise<string> }) {
    const message = use(messagePromise);
    return <p>Here is the message: {message}</p>;
}

export default function Note({ messagePromise }: { messagePromise: Promise<string> }) {
    return (
        <div className="m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                Normally, `fetch` is used in server components, but using `await` here blocks rendering and prevents effective use of `Suspense`. However, with the introduction of `use`, passing a `Promise` directly to a client component has become a smart solution, making it easier to control loading states using `Suspense`.
            </p>
            <Suspense fallback={<p>Waiting for message...</p>}>
                <Message messagePromise={messagePromise} />
            </Suspense>
        </div>
    );
}
