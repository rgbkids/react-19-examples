// "use client"; // Note: This makes it a Client component.

// How to render components on the server side using React Server Components
const users = [
    {
        id: "1",
        name: "Suzuki",
        email: "suzuki@example.com",
    },
    {
        id: "2",
        name: "Satou",
        email: "tanaka@example.com",
    },
];

export default function Page() {
    return (
        <div className="text-center m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                By default, it is a server component. Make sure that users is not included in the source code. In Chrome, you can right-click and select Inspect to check the source. Try checking the following file within the page: http://localhost:3000/_next/static/chunks/app/lesson08-react-server-components/page.js. If you add use client, the users data will be directly included, exposing personal information such as suzuki@example.com.
            </p>
            <h1>This is server side.</h1>
            <p>users: {users.length}</p>
        </div>
    );
}