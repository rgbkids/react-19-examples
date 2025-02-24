# React v19 Sample Code Examples

This repository contains examples showcasing new features in **React v19**.  

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## New Features in React 19

### 1. `useTransition`
Calling `startTransition` alone sets `isPending` to `true`. This allows for a clean way to handle asynchronous operations. While this is a fundamental process, the following chapters will focus on form-specific optimizations, introducing even more concise and simplified approaches.

### 2. `useActionState`
This is a hook that consolidates standard form processing. By using `useActionState`, form handling can be written in a much cleaner and more concise way.

### 3. `<form>` Enhancements
This is a method to connect custom functions with a form. You can access form values via `formData`. It is useful when `useActionState` cannot handle a case or when standard processing is not sufficient.

### 4. `useFormStatus`
You can retrieve the form state within a child component. There is no need to pass props like `isPending`.

### 5. `useOptimistic`
You can instantly display values you want to show for now (optimistic updates). It renders even faster than the timing of `useState`.

### 6. `use`
Normally, `fetch` is used in server components, but using `await` here blocks rendering and prevents effective use of `Suspense`. However, with the introduction of `use`, passing a `Promise` directly to a client component has become a smart solution, making it easier to control loading states using `Suspense`.

### 7. Combining `useActionState` and `useOptimistic`
An example combining `useActionState` and `setOptimisticName`.

### 8. React Server Components
By default, it is a server component. Make sure that users is not included in the source code. In Chrome, you can right-click and select Inspect to check the source. Try checking the following file within the page: http://localhost:3000/_next/static/chunks/app/lesson08-react-server-components/page.js. If you add use client, the users data will be directly included, exposing personal information such as suzuki@example.com.

### 9. Server Functions
You can call functions that can only be executed on the server from events like clicks. When you click, the server uptime will be displayed.

### 10. Accessing `ref` via Props
One of the improvements in React 19 is that refs can be accessed as props. `forwardRef` is no longer needed.

---

Try the provided sample code and experiment with these concepts in your projects! 🚀  
