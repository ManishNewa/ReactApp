export function TrendingSkeleton() {
    return (
        <div className="relative h-[77vh] w-full bg-gray-600 flex items-center overflow-hidden animate-pulse">
            <div className="absolute inset-0 w-full bg-gray-700"></div>

            <div className="absolute z-10 px-12 max-w-2xl w-full">
                <div className="h-16 md:h-20 w-3/4 bg-gray-500 rounded mb-6"></div>

                <div className="flex items-center space-x-4 mb-8">
                    <div className="h-4 w-32 bg-gray-500 rounded"></div>
                    <div className="h-4 w-24 bg-gray-500 rounded"></div>
                    <div className="h-4 w-20 bg-gray-500 rounded"></div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="h-12 w-32 bg-gray-500 rounded-full"></div>
                    <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
