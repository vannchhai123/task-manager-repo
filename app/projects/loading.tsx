export default function Loading() {
    return (
        <div className="p-8 animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
        </div>
    )
}