import Features from "./components/Features";
import WorkWithUs from "./components/WorkWithUs";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="">
            <div className="relative">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/05/720/405/UNC-Chapel-Hill-Palestine-Protests-Flag_01.jpg?ve=1&tl=1"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-primary opacity-80 mix-blend-normal" />
              </div>
              <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <h1 className="font-anton text-center text-5xl sm:text-6xl lg:text-7xl">
                  <span className="mb-1 block uppercase text-white sm:mb-2 lg:mb-3">
                    Young Maccabees
                  </span>
                  <span className="block text-indigo-200">
                    Fighting Antisemitism
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                  A Student-lead organization fighting antisemitism on college
                  campuses and beyond, promoting productive dialog through
                  advocacy and education.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Learn more
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                    >
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="text-center text-base font-semibold text-gray-500">
              As mentioned by various media sources
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>
        <Features />
        <WorkWithUs />
        <Testimonials />
      </div>
    </main>
  );
}
