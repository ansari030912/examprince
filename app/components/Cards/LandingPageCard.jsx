/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

const LandingPageCard = () => {
  return (
    <section
      class="pb-6"
      style={{
        backgroundImage: `url("/bg-img-3.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="container px-4 mx-auto pt-12">
        <div class="flex flex-wrap items-center -mx-4">
          <div class="w-full md:w-7/12 px-4 mb-6 md:mb-0">
            <span class="font-semibold text-xs text-blue-400">
              What's new at Exam Prince
            </span>
            <h2 class="mt-8 mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold">
              Ace Your Upcoming Certification Exam Quickly!
            </h2>
            <div class="max-w-lg mb-6 lg:mb-12">
              <p class="text-xl text-gray-500">
                Prepare, study, and ace your certification exam effortlessly
                with everything you need. Enjoy 90 days of free updates and
                ensure 100% success on your first attempt.
              </p>
            </div>
            <div class="flex flex-wrap">
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-blue-400 hover:bg-blue-500 text-white rounded transition duration-200">
                Latest Questions & Answers
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-blue-400 hover:bg-blue-500 text-white rounded transition duration-200">
                Hight sucess rate
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-blue-400 hover:bg-blue-500 text-white rounded transition duration-200">
                Quick availability
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-blue-400 hover:bg-blue-500 text-white rounded transition duration-200">
                Instantly prepared access
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-blue-400 hover:bg-blue-500 text-white rounded transition duration-200">
                Safe, Private, Reliable
              </span>
              <span class="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-blue-400 hover:bg-blue-500 text-white rounded transition duration-200">
                Easy to refund
              </span>
            </div>
          </div>
          <div class="relative w-full md:w-5/12 px-4">
            <img class="relative" src="/img-2.png" alt="" />
          </div>
        </div>
      </div>
      <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a class="mr-auto text-lg font-semibold leading-none">
              <img
                class="h-7"
                src="zeus-assets/logo/logo-zeus-red.svg"
                alt=""
                width="auto"
              />
            </a>
            <button class="navbar-close">
              <svg
                class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li class="mb-1">
                <a class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded">
                  About
                </a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded">
                  Company
                </a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded">
                  Services
                </a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <div class="pt-6">
              <a class="block py-3 text-center text-sm leading-normal bg-red-50 hover:bg-red-100 text-red-300 font-semibold rounded transition duration-200">
                Contact Us
              </a>
            </div>
            <p class="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default LandingPageCard;
