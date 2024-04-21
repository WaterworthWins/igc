"use client";
export default function Portfolio() {
  return (
    <div className="dark">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-pink-500 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-[1200px] px-4 py-6 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center lg:order-last">
              <div className="relative w-full max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-600 rounded-full blur-3xl opacity-50" />
                <div className="relative rounded-full aspect-[1.618] w-full overflow-hidden">
                  <BriefcaseIcon className="w-full h-full text-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:items-start">
              <div className="mb-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                  <span className="block">i-Group of Companies</span>
                </h1>
              </div>
              <blockquote className="mt-3 text-base text-gray-200 sm:mt-4 sm:text-lg sm:max-w-lg md:mt-4 md:text-xl lg:max-w-none">
                <p>i-Group of Companies curates a portfolio of diversified Purpose Based Opportunities (PBO):</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <ActivityIcon className="w-5 h-5 text-white" />
                    <span className="text-sm">Tribute Training</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <UserIcon className="w-5 h-5 text-white" />
                    <span className="text-sm">Women-Led Enterprise</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <RocketIcon className="w-5 h-5 text-white" />
                    <span className="text-sm">Inception Tech Start-Up</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <MedalIcon className="w-5 h-5 text-white" />
                    <span className="text-sm">Provantage</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <HardHatIcon className="w-5 h-5 text-white" />
                    <span className="text-sm">VICIS Helmet Tech</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement> ) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function BriefcaseIcon(props: React.SVGProps<SVGSVGElement> ) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}


function HardHatIcon(props: React.SVGProps<SVGSVGElement> ) {
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
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
      <path d="M14 6h0a6 6 0 0 1 6 6v3" />
    </svg>
  )
}


function MedalIcon(props: React.SVGProps<SVGSVGElement> ) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  )
}


function RocketIcon(props: React.SVGProps<SVGSVGElement> ) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function UserIcon(props: React.SVGProps<SVGSVGElement> ) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
