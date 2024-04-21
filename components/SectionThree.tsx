"use client";
export default function SectionThree() {
  return (
    <div className="dark">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-pink-500 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-[1618px] px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Our</span>
                  <span className="block">Focus</span>
                </h1>
              </div>
              <blockquote className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <p>A Purpose Based Opportunity is different...</p>
                <p>
                  Focusing equal efforts on a commercially viable and profitable business opportunity while
                  simultaneously contributing to society and making a positive difference in the world.
                </p>
              </blockquote>
              <div className="mt-4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                  Purpose Based Opportunities
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[800px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-600 rounded-full blur-3xl opacity-50" />
                <div className="relative rounded-full aspect-[1.618] w-full overflow-hidden">
                  <FocusIcon className="w-full h-full text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FocusIcon(props: React.SVGProps<SVGSVGElement> ) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}

