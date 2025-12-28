"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="p-8 text-center">
            <h2>Something went wrong!</h2>
            <p className="text-gray-600 mb-4">{error.message}</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-500 text-white rounded shadow">
                Try Again
            </button>
        </div>
    )
}