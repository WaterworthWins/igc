"use clent";
export default function ContactForm() {
  return (
    <div className="dark">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-pink-500 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-[1618px] px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Contact</span>
                </h1>
              </div>
              <div className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <div className="flex items-center gap-2 border-b border-indigo-600 pb-2">
                  <MapPinIcon className="w-6 h-6 text-indigo-600" />
                  <div>
                    <p>#105 3382 Wesbrook Mall</p>
                    <p>Vancouver, British Columbia Canada</p>
                    <p>V6S 0A7</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-b border-indigo-600 py-2">
                  <PhoneIcon className="w-6 h-6 text-indigo-600" />
                  <p>Tel: 1-778-389-1164</p>
                </div>
                <div className="flex items-center gap-2 pt-2 border-b border-indigo-600 pb-2">
                  <MailIcon className="w-6 h-6 text-indigo-600" />
                  <p>Email: admin@i-groupofcompanies.com</p>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                  Send us a message - we look forward to having a conversation
                  with you:
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium text-white"
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full rounded-md border-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="name"
                      name="name"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-white"
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full rounded-md border-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="email"
                      name="email"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-white"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full rounded-md border-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="phone"
                      name="phone"
                      type="tel"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-white"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      className="block w-full rounded-md border-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      defaultValue=""
                      id="message"
                      name="message"
                      rows={4}
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[800px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-600 rounded-full blur-3xl opacity-50" />
                <div className="relative rounded-full aspect-[1.618] w-full overflow-hidden">
                  <ContactIcon className="w-full h-full text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
