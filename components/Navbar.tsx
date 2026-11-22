"use client";

import Link from "next/link";
import { useState } from "react";

import {
  GoArrowDownRight,
  GoChevronDown,
  GoArrowRight,
} from "react-icons/go";

import {
  FiBriefcase,
  FiBookOpen,
  FiBarChart,
  FiUsers,
  FiFileText,
  FiMenu,
  FiX,
} from "react-icons/fi";


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
    setBusinessOpen(false);
    setResearchOpen(false);
  };


  return (

    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-5">

        <div className="flex items-center justify-between h-16">


          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMenu}
            className="font-bold text-2xl tracking-tight text-gray-800"
          >

            IGHT<span className="text-green-600">DATA</span>

            <span className="block text-[9px] font-medium tracking-[3px] text-gray-400">
              RESEARCH & INTELLIGENCE
            </span>

          </Link>


          {/* DESKTOP NAVIGATION */}

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">


            <Link
              href="/"
              className="hover:text-green-600 transition"
            >
              Home
            </Link>


            {/* BUSINESS DROPDOWN */}

            <div
              className="relative group"
              onMouseEnter={() => setBusinessOpen(true)}
              onMouseLeave={() => setBusinessOpen(false)}
            >

              <button
                onClick={() => setBusinessOpen(!businessOpen)}
                className="flex items-center gap-1 hover:text-green-600 transition"
              >
                For Businesses
                <GoChevronDown className={`transition-transform ${businessOpen ? "rotate-180" : ""}`} />
              </button>


              {businessOpen && (

                <div className="absolute top-full left-0 pt-4 w-64">

                  <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3">

                    <Link
                      href="/business"
                      onClick={closeMenu}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition"
                    >
                      <FiBriefcase className="text-xl text-green-600 mt-1" />
                      <div>

                        <h3 className="text-sm font-semibold text-gray-800">
                          Business Solutions
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          Research for smarter business decisions.
                        </p>

                      </div>

                    </Link>


                    <Link
                      href="/business/research"
                      onClick={closeMenu}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition"
                    >
                      <FiBarChart className="text-xl text-green-600 mt-1" />
                      <div>

                        <h3 className="text-sm font-semibold text-gray-800">
                          Market Research
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          Understand your market and customers.
                        </p>

                      </div>

                    </Link>


                    <Link
                      href="/business/request"
                      onClick={closeMenu}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition"
                    >

                      <FiFileText className="text-xl text-green-600 mt-1" />

                      <div>

                        <h3 className="text-sm font-semibold text-gray-800">
                          Request Research
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          Request a custom research project.
                        </p>

                      </div>

                    </Link>

                  </div>

                </div>

              )}

            </div>


            {/* RESEARCH DROPDOWN */}

            <div
              className="relative group"
              onMouseEnter={() => setResearchOpen(true)}
              onMouseLeave={() => setResearchOpen(false)}
            >

              <button
                onClick={() => setResearchOpen(!researchOpen)}
                className="flex items-center gap-1 hover:text-green-600 transition"
              >

                For Research

                <GoChevronDown className={`transition-transform ${researchOpen ? "rotate-180" : ""}`} />

              </button>


              {researchOpen && (

                <div className="absolute top-full left-0 pt-4 w-64">

                  <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3">

                    <Link
                      href="/research"
                      onClick={closeMenu}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition"
                    >

                      <FiBookOpen className="text-xl text-green-600 mt-1" />

                      <div>

                        <h3 className="text-sm font-semibold text-gray-800">
                          Research Projects
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          Explore available research projects.
                        </p>

                      </div>

                    </Link>


                    <Link
                      href="/researcher/signup"
                      onClick={closeMenu}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition"
                    >

                      <FiUsers className="text-xl text-green-600 mt-1" />

                      <div>

                        <h3 className="text-sm font-semibold text-gray-800">
                          Become a Researcher
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          Join the research community.
                        </p>

                      </div>

                    </Link>


                    <Link
                      href="/insights"
                      onClick={closeMenu}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition"
                    >

                      <FiBarChart className="text-xl text-green-600 mt-1" />

                      <div>

                        <h3 className="text-sm font-semibold text-gray-800">
                          Research Insights
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          Discover research findings.
                        </p>

                      </div>

                    </Link>

                  </div>

                </div>

              )}

            </div>


            <Link
              href="/how-it-works"
              className="hover:text-green-600 transition"
            >
              Research Hub
            </Link>


            <Link
              href="/about"
              className="hover:text-green-600 transition"
            >
              About
            </Link>


          </div>


          {/* DESKTOP AUTH BUTTONS */}

          <div className="hidden lg:flex items-center gap-5">

            <Link
              href="/signin"
              className="text-sm font-semibold text-gray-600 hover:text-green-600 transition"
            >
              Sign In
            </Link>


            <Link
              href="/signup"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition group"
            >

              Get Started

              <GoArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />

            </Link>

          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-gray-700 p-2"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >

            {menuOpen ? <FiX /> : <FiMenu />}

          </button>


        </div>


        {/* ================= MOBILE NAVIGATION ================= */}

        {menuOpen && (

          <div className="lg:hidden border-t border-gray-100 py-5 space-y-2">


            <Link
              href="/"
              onClick={closeMenu}
              className="block px-3 py-3 text-sm font-medium hover:bg-green-50 rounded-lg"
            >
              Home
            </Link>


            {/* MOBILE BUSINESS */}

            <div>

              <button
                onClick={() => setBusinessOpen(!businessOpen)}
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium hover:bg-green-50 rounded-lg"
              >

                For Businesses

                <GoChevronDown className={businessOpen ? "rotate-180" : ""} />

              </button>


              {businessOpen && (

                <div className="ml-5 border-l-2 border-green-100 pl-3 space-y-1">

                  <Link
                    href="/business"
                    onClick={closeMenu}
                    className="block py-3 text-sm text-gray-500 hover:text-green-600"
                  >
                    Business Solutions
                  </Link>

                  <Link
                    href="/business/research"
                    onClick={closeMenu}
                    className="block py-3 text-sm text-gray-500 hover:text-green-600"
                  >
                    Market Research
                  </Link>

                  <Link
                    href="/business/request"
                    onClick={closeMenu}
                    className="block py-3 text-sm text-gray-500 hover:text-green-600"
                  >
                    Request Research
                  </Link>

                </div>

              )}

            </div>


            {/* MOBILE RESEARCH */}

            <div>

              <button
                onClick={() => setResearchOpen(!researchOpen)}
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium hover:bg-green-50 rounded-lg"
              >

                For Research

                <GoChevronDown className={researchOpen ? "rotate-180" : ""} />

              </button>


              {researchOpen && (

                <div className="ml-5 border-l-2 border-green-100 pl-3 space-y-1">

                  <Link
                    href="/research"
                    onClick={closeMenu}
                    className="block py-3 text-sm text-gray-500 hover:text-green-600"
                  >
                    Research Projects
                  </Link>

                  <Link
                    href="/researcher/signup"
                    onClick={closeMenu}
                    className="block py-3 text-sm text-gray-500 hover:text-green-600"
                  >
                    Become a Researcher
                  </Link>

                  <Link
                    href="/insights"
                    onClick={closeMenu}
                    className="block py-3 text-sm text-gray-500 hover:text-green-600"
                  >
                    Research Insights
                  </Link>

                </div>

              )}

            </div>


            <Link
              href="/how-it-works"
              onClick={closeMenu}
              className="block px-3 py-3 text-sm font-medium hover:bg-green-50 rounded-lg"
            >
              How It Works
            </Link>


            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-3 py-3 text-sm font-medium hover:bg-green-50 rounded-lg"
            >
              About
            </Link>


            {/* MOBILE AUTH */}

            <div className="flex flex-col gap-3 pt-5 border-t border-gray-100">

              <Link
                href="/signin"
                onClick={closeMenu}
                className="text-center border border-gray-200 py-3 rounded-lg text-sm font-semibold"
              >
                Sign In
              </Link>


              <Link
                href="/signup"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg text-sm font-semibold"
              >
                Get Started
                <GoArrowRight />
              </Link>

            </div>

          </div>

        )}

      </div>

    </nav>

  );

}