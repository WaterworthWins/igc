"use client";
export default function Method() {
  return (
    <div className="dark">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-pink-500 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-[1618px] px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">i-Group&apos;s High-Performance Business Method</span>
                </h1>
              </div>
              <blockquote className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <p>
                  An integrated solution to support the development of &quot;High-Performance&quot; inception start-up
                  opportunities accompanied with ongoing oversight and guidance to optimize business assets and
                  valuation through staged-growth / staged-yield process.
                </p>
                <p className="mt-4 font-semibold">Yr 1: Inception Seed Stage</p>
                <p className="mt-2">Yr 2 - 3: Growth Stage</p>
                <p className="mt-2">Yr 4 - 5: Scale Partner Hyper-Grow</p>
              </blockquote>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[800px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-600 rounded-full blur-3xl opacity-50" />
                <div className="relative rounded-full aspect-[1.618] w-full overflow-hidden">
                  <ScalingIcon className="w-full h-full text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScalingIcon(props: React.SVGProps<SVGSVGElement> ) {
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
      <path d="M21 3 9 15" />
      <path d="M12 3H3v18h18v-9" />
      <path d="M16 3h5v5" />
      <path d="M14 15H9v-5" />
    </svg>
  )
}
