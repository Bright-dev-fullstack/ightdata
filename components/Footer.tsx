import Link from "next/link"

export default function Footer(){
    return(
        <main>
                  {/* ================= FOOTER ================= */}

      <footer className="bg-gray-950 text-gray-400 px-5 pt-16 pb-8">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            <div className="col-span-2 md:col-span-1">

              <h2 className="text-2xl font-bold text-white tracking-tight">

                IGHT<span className="text-green-500">DATA</span>

              </h2>

              <p className="text-sm leading-7 mt-5 max-w-xs">

                Connecting research, data, and intelligence
                to help people and organizations make
                informed decisions.

              </p>

            </div>


            <div>

              <h3 className="text-white font-semibold text-sm">

                Platform

              </h3>

              <div className="flex flex-col gap-4 mt-6 text-sm">

                <Link href="/about" className="hover:text-green-500 transition">
                  About Us
                </Link>

                <Link href="/research" className="hover:text-green-500 transition">
                  Research
                </Link>

                <Link href="/insights" className="hover:text-green-500 transition">
                  Insights
                </Link>

                <Link href="/hub" className="hover:text-green-500 transition">
                  Research Hub
                </Link>

              </div>

            </div>


            <div>

              <h3 className="text-white font-semibold text-sm">

                Get Started

              </h3>

              <div className="flex flex-col gap-4 mt-6 text-sm">

                <Link href="/business/signup" className="hover:text-green-500 transition">
                  For Businesses
                </Link>

                <Link href="/researcher/signup" className="hover:text-green-500 transition">
                  For Researchers
                </Link>

                <Link href="/contact" className="hover:text-green-500 transition">
                  Contact Us
                </Link>

              </div>

            </div>


            <div>

              <h3 className="text-white font-semibold text-sm">

                Legal

              </h3>

              <div className="flex flex-col gap-4 mt-6 text-sm">

                <Link href="/privacy" className="hover:text-green-500 transition">
                  Privacy Policy
                </Link>

                <Link href="/terms" className="hover:text-green-500 transition">
                  Terms & Conditions
                </Link>

              </div>

            </div>

          </div>


          <div className="border-t border-gray-800 mt-14 pt-7 flex flex-col sm:flex-row justify-between gap-4 text-xs">

            <p>© 2026 IGHTDATA. All rights reserved.</p>

            <p> Research. Data. Decisions.</p>

          </div>

        </div>

      </footer>

        </main>
    )
}