import Image from "next/image";

const features = [
  { name: "useTransition", href: "/lesson01-useTransition/", path: "src/app/lesson01-useTransition" },
  { name: "useActionState", href: "/lesson02-useActionState/", path: "src/app/lesson02-useActionState" },
  { name: "<form> Enhancements", href: "/lesson03-form-enhancements/", path: "src/app/lesson03-form-enhancements" },
  { name: "useFormStatus", href: "/lesson04-useFormStatus/", path: "src/app/lesson04-useFormStatus" },
  { name: "useOptimistic", href: "/lesson05-useOptimistic/", path: "src/app/lesson05-useOptimistic" },
  { name: "use", href: "/lesson06-use-hook/", path: "src/app/lesson06-use-hook" },
  { name: "Combining useActionState and useOptimistic", href: "/lesson07-useActionState-useOptimistic/", path: "src/app/lesson07-useActionState-useOptimistic" },
  { name: "React Server Components", href: "/lesson08-react-server-components/", path: "src/app/lesson08-react-server-components" },
  { name: "Server Functions", href: "/lesson09-server-functions/", path: "src/app/lesson09-server-functions" },
  { name: "Accessing ref via Props", href: "/lesson10-ref-via-props/", path: "src/app/lesson10-ref-via-props" }
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {features.map(({ name, href, path }) => (
            <li key={href} className="mb-2">
              <a
                className="hover:underline hover:underline-offset-4"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  {path}
                </code>
              </a>
            </li>
          ))}
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/rgbkids/react-19-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          React v19 Sample Code Examples
        </a>
      </footer>
    </div>
  );
}
