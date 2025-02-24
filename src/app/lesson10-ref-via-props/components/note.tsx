// One of the improvements in React 19 is the ability to access refs as props
"use client";

import { useRef, forwardRef } from "react";

const ChildInputPropRef = ({ placeholder, ref }: { placeholder: string, ref: React.Ref<HTMLInputElement> }) => (
    <input ref={ref} type="text" placeholder={placeholder} className="border p-2 rounded" />
);

const ChildInputForwardRef = forwardRef<HTMLInputElement, { placeholder: string }>(
    ({ placeholder }, ref) => (
        <input ref={ref} type="text" placeholder={placeholder} className="border p-2 rounded" />
    )
);

ChildInputForwardRef.displayName = "ChildInputForwardRef";

export default function Note() {
    const inputForwardRef = useRef<HTMLInputElement>(null);
    const inputPropRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-col items-center gap-4 p-4 m-2">
            <p className="text-xs text-gray-500 bg-white my-2">
                One of the improvements in React 19 is that refs can be accessed as props. `forwardRef` is no longer needed.
            </p>
            <input type="text" placeholder="Normal" className="border p-2 rounded" />
            <ChildInputForwardRef placeholder="ForwardRef" ref={inputForwardRef} />
            <ChildInputPropRef placeholder="PropRef" ref={inputPropRef} />
            <button
                onClick={() => inputForwardRef.current?.focus()}
                className="bg-blue-500 text-white p-2 m-2 rounded"
            >
                ForwardRef focus()
            </button>
            <button
                onClick={() => inputPropRef.current?.focus()}
                className="bg-blue-500 text-white p-2 m-2 rounded"
            >
                PropRef focus()
            </button>
        </div>
    );
}