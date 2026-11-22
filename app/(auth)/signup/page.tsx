import Link from "next/link";

import {
  FiArrowRight,
  FiUsers,
  FiBriefcase,
  FiShield,
  FiBarChart2,
  FiDatabase,
  FiSearch,
} from "react-icons/fi";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-16 text-black sm:px-8 md:py-24">

      {/* Main Section */}
      <section className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-700">
            <FiShield size={15} />
            Join the IGHTDATA Network
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
            Create your
            <span className="text-green-700"> IGHTDATA </span>
            account
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            A platform connecting research, people and businesses
            through reliable data and meaningful insights.
            Choose how you want to get started.
          </p>

        </div>


        {/* Account Cards */}
        <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-2">


          {/* Researcher Card */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-xl sm:p-9">

            {/* Icon */}
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
              <FiUsers size={27} />
            </div>

            <h2 className="text-2xl font-bold text-black">
              Researcher
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Participate in research, contribute valuable
              information and explore opportunities to
              make your voice count.
            </p>


            {/* Features */}
            <div className="my-8 space-y-5">

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiSearch size={18} className="shrink-0 text-green-700" />
                Participate in questionnaires
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiDatabase size={18} className="shrink-0 text-green-700" />
                Contribute meaningful data
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiBarChart2 size={18} className="shrink-0 text-green-700" />
                Explore research opportunities
              </div>

            </div>


            {/* Button */}
            <Link
              href="/researcher/signup"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-700 px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-800"
            >
              Continue as Researcher
              <FiArrowRight size={18} />
            </Link>

          </div>



          {/* Business Card */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-xl sm:p-9">

            {/* Icon */}
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
              <FiBriefcase size={27} />
            </div>

            <h2 className="text-2xl font-bold text-black">
              Business
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Discover industry insights, access research
              reports and make informed decisions using
              reliable data.
            </p>


            {/* Features */}
            <div className="my-8 space-y-5">

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiBarChart2 size={18} className="shrink-0 text-green-700" />
                Access research insights
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiDatabase size={18} className="shrink-0 text-green-700" />
                Explore industry reports
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiSearch size={18} className="shrink-0 text-green-700" />
                Request custom research
              </div>

            </div>


            {/* Button */}
            <Link
              href="/business/signup"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-black px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
            >
              Continue as Business
              <FiArrowRight size={18} />
            </Link>

          </div>

        </div>


        {/* Sign In */}
        <div className="mt-12 text-center">

          <p className="text-sm text-gray-500">
            Already have an account?

            <Link
              href="/signin"
              className="ml-2 font-semibold text-green-700 transition hover:text-green-900"
            >
              Sign in
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}