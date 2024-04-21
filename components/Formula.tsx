"use client";
export default function Formula() {
  return (
    <div className="dark">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-pink-500 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-[1618px] px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Formula</span>
                </h1>
              </div>
              <blockquote className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <p>
                  Balancing business for profit with an authentic business
                  opportunity of meaning and purpose.
                </p>
                <p>Profit and purpose are not in conflict.</p>
                <p>
                  The closer and tighter we focus on purpose, the more profit
                  grows.
                </p>
              </blockquote>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[800px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-600 rounded-full blur-3xl opacity-50" />
                <div className="relative rounded-full aspect-[1.618] w-full overflow-hidden">
                  <ScaleIcon className="w-full h-full text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScaleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}
