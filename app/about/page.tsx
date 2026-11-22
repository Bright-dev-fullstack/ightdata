import Link from "next/link";
import { BsFillLightbulbFill } from "react-icons/bs";

import {
  FiArrowRight,
  FiTarget,
  FiDatabase,
  FiBarChart,
  FiTrendingUp,
  FiUsers,
  FiBriefcase,
  FiBookOpen,
  FiGlobe,
  FiSearch,
  FiActivity,
  FiShield,
  FiCompass,
  FiMessageSquare,
  FiArrowUpRight,
  FiShoppingBag,
} from "react-icons/fi";

import { MdOutlineInsights, } from "react-icons/md";


export default function About() {

  const services = [
    {
      icon: <FiSearch />,
      title: "Research & Discovery",
      description:
        "We help identify important questions, understand research objectives, and discover the information needed to solve real-world problems.",
    },
    {
      icon: <FiDatabase />,
      title: "Structured Data Collection",
      description:
        "We design structured questionnaires and research processes to gather relevant information from individuals, communities, and target audiences.",
    },
    {
      icon: <FiBarChart />,
      title: "Data Analysis",
      description:
        "Collected information is organized, examined, and interpreted to uncover meaningful patterns, relationships, and trends.",
    },
    {
      icon: <MdOutlineInsights />,
      title: "Research Intelligence",
      description:
        "We transform research findings into understandable insights that help businesses, organizations, and researchers make informed decisions.",
    },
  ];


  const industries = [
    {
      icon: <FiBriefcase />,
      title: "Business & Enterprise",
      description: "Business performance, customer experience, and strategic decisions.",
    },
    {
      icon: <FiShoppingBag />,
      title: "Market & Consumer Research",
      description: "Consumer behaviour, purchasing patterns, and market opportunities.",
    },
    {
      icon: <FiBookOpen />,
      title: "Education & Academia",
      description: "Academic studies, institutional research, and educational insights.",
    },
    {
      icon: <FiActivity />,
      title: "Healthcare & Public Health",
      description: "Health awareness, public experiences, and community research.",
    },
    {
      icon: <FiUsers />,
      title: "Social & Community Research",
      description: "Social behaviour, public opinion, and community development.",
    },
    {
      icon: <FiGlobe />,
      title: "Development & Policy",
      description: "Development initiatives, public programmes, and policy research.",
    },
  ];


  const principles = [
    {
      icon: <FiTarget />,
      title: "Purpose Before Data",
      description:
        "Every meaningful research project starts with a clear objective. We believe information should always serve a purpose.",
    },
    {
      icon: <FiShield />,
      title: "Research Integrity",
      description:
        "Reliable research requires transparency, responsible data handling, and respect for the people providing information.",
    },
    {
      icon: <BsFillLightbulbFill />,
      title: "Meaningful Insights",
      description:
        "Data becomes valuable when people can understand it, interpret it, and use it to make better decisions.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Continuous Improvement",
      description:
        "We believe research and technology should continuously evolve to meet changing needs and challenges.",
    },
  ];


  const audiences = [
    {
      icon: <FiBriefcase />,
      title: "Businesses & Organizations",
      description:
        "Understand your customers, evaluate market opportunities, identify challenges, and make strategic decisions supported by research.",
      link: "/business/signup",
      button: "Explore Business Solutions",
    },
    {
      icon: <FiBookOpen />,
      title: "Researchers & Institutions",
      description:
        "Access structured research processes, collect relevant responses, organize information, and develop meaningful research findings.",
      link: "/researcher/signup",
      button: "Explore Research Solutions",
    },
  ];


  return (

    <main className="bg-white text-gray-700 overflow-hidden">


      {/* ================= HERO ================= */}

      <section className="relative px-5 pt-24 pb-28">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-100/50 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">

          <p className="text-xs tracking-[3px] font-bold text-green-600 bg-green-50 border border-green-100 w-max mx-auto px-4 py-2 rounded-full">

            ABOUT IGHTDATA

          </p>


          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mt-8">

            Turning Questions Into

            <span className="block text-green-600 mt-2">

              Intelligence That Matters.

            </span>

          </h1>


          <p className="max-w-2xl mx-auto text-gray-500 leading-8 mt-7 text-sm md:text-base">

            The world generates enormous amounts of information every day.
            But information alone is not enough.

            Businesses need to understand their markets.
            Organizations need to understand communities.
            Researchers need reliable information to support their work.

          </p>


          <p className="max-w-2xl mx-auto text-gray-500 leading-8 mt-4 text-sm md:text-base">

            <strong className="text-green-600">IGHTDATA</strong> exists
            to bridge that gap, connecting research, structured data
            collection, and meaningful analysis to help people
            understand the world and make better-informed decisions.

          </p>


          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">

            <Link
              href="/research"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
            >

              Explore Our Research

              <FiArrowRight />

            </Link>


            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-gray-200 px-7 py-3.5 rounded-lg text-sm font-semibold hover:border-green-600 hover:text-green-600 transition"
            >

              Get In Touch

              <FiArrowRight />

            </Link>

          </div>


          {/* BRAND STATEMENT */}

          <div className="mt-16 border-t border-gray-100 pt-9">

            <p className="text-xs text-gray-400 tracking-widest font-semibold">

              OUR APPROACH

            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-6 text-sm font-semibold">

              <span>RESEARCH</span>

              <FiArrowRight className="text-green-500" />

              <span>DATA</span>

              <FiArrowRight className="text-green-500" />

              <span>ANALYSIS</span>

              <FiArrowRight className="text-green-500" />

              <span className="text-green-600">INTELLIGENCE</span>

            </div>

          </div>

        </div>

      </section>



      {/* ================= THE PROBLEM ================= */}

      <section className="bg-gray-50 py-24 px-5">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">


          <div>

            <p className="text-xs tracking-widest font-bold text-green-600">

              THE PROBLEM WE ADDRESS

            </p>


            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mt-5">

              Good Decisions Need More Than Guesswork.

            </h2>


            <p className="text-sm text-gray-500 leading-8 mt-6">

              Across different industries, people make important decisions
              every day without always having access to the information
              they need.

            </p>


            <p className="text-sm text-gray-500 leading-8 mt-4">

              A business may struggle to understand why customers
              choose competitors. An organization may need to understand
              a community&apos;s needs. A researcher may need reliable
              responses to answer an important question.

            </p>


            <p className="text-sm text-gray-500 leading-8 mt-4">

              These challenges often come down to one thing:
              the gap between having questions and having
              reliable information to answer them.

            </p>


            <div className="mt-8 flex items-start gap-3 bg-white border border-green-100 p-5 rounded-xl">

              <BsFillLightbulbFill className="text-2xl text-green-600 shrink-0" />

              <p className="text-sm leading-7">

                <strong className="text-gray-800">Our belief:</strong>{" "}
                Better understanding begins with better research.

              </p>

            </div>

          </div>



          {/* PROBLEM VISUAL */}

          <div className="bg-white rounded-2xl border border-gray-100 p-7 md:p-9 shadow-sm">

            <h3 className="font-bold text-gray-800 text-lg">

              From Uncertainty To Understanding

            </h3>

            <p className="text-xs text-gray-400 mt-2">

              A better approach to information.

            </p>


            <div className="space-y-4 mt-9">


              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">

                <p className="text-xs text-gray-400 font-semibold tracking-widest">

                  THE CHALLENGE

                </p>

                <div className="flex items-center gap-3 mt-4">

                  <FiMessageSquare className="text-2xl text-gray-400" />

                  <div>

                    <h4 className="font-semibold text-gray-700 text-sm">

                      Questions Without Answers

                    </h4>

                    <p className="text-xs text-gray-400 mt-1">

                      Uncertainty. Limited information. Assumptions.

                    </p>

                  </div>

                </div>

              </div>


              <div className="flex justify-center">

                <FiArrowRight className="text-2xl text-green-600 rotate-90" />

              </div>


              <div className="p-5 bg-green-50 rounded-xl border border-green-100">

                <p className="text-xs text-green-600 font-semibold tracking-widest">

                  THE IGHTDATA APPROACH

                </p>

                <div className="flex items-center gap-3 mt-4">

                  <FiDatabase className="text-2xl text-green-600" />

                  <div>

                    <h4 className="font-semibold text-gray-800 text-sm">

                      Structured Research & Analysis

                    </h4>

                    <p className="text-xs text-gray-500 mt-1">

                      Relevant data. Organized information. Meaningful analysis.

                    </p>

                  </div>

                </div>

              </div>


              <div className="flex justify-center">

                <FiArrowRight className="text-2xl text-green-600 rotate-90" />

              </div>


              <div className="p-5 bg-green-600 rounded-xl text-white">

                <p className="text-xs text-green-100 font-semibold tracking-widest">

                  THE OUTCOME

                </p>

                <div className="flex items-center gap-3 mt-4">

                  <MdOutlineInsights className="text-3xl" />

                  <div>

                    <h4 className="font-semibold text-sm">

                      Informed Decisions

                    </h4>

                    <p className="text-xs text-green-100 mt-1">

                      Clarity. Understanding. Better decisions.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ================= WHAT WE DO ================= */}

      <section className="py-24 px-5">

        <div className="max-w-6xl mx-auto">


          <div className="text-center max-w-2xl mx-auto">

            <p className="text-xs tracking-widest font-bold text-green-600">

              WHAT WE DO

            </p>


            <h2 className="text-3xl font-bold text-gray-800 mt-5">

              More Than Data Collection.

            </h2>


            <p className="text-sm text-gray-500 leading-8 mt-4">

              IGHTDATA connects the essential stages of research,
              from identifying a problem to understanding what
              the findings actually mean.

            </p>

          </div>



          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

            {services.map((item, index) => (

              <div
                key={index}
                className="border border-gray-100 rounded-xl p-7 hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition duration-300"
              >

                <div className="w-12 h-12 flex items-center justify-center bg-green-50 text-green-600 text-2xl rounded-xl">

                  {item.icon}

                </div>


                <h3 className="font-bold text-gray-800 mt-6">

                  {item.title}

                </h3>


                <p className="text-sm text-gray-500 leading-7 mt-3">

                  {item.description}

                </p>

              </div>

            ))}

          </div>


        </div>

      </section>



      {/* ================= MISSION & VISION ================= */}

      <section className="bg-gray-50 py-24 px-5">

        <div className="max-w-6xl mx-auto">


          <div className="text-center">

            <p className="text-xs tracking-widest font-bold text-green-600">

              OUR PURPOSE

            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-5">

              Why IGHTDATA Exists.

            </h2>

          </div>



          <div className="grid md:grid-cols-2 gap-6 mt-12">


            <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-2xl">

              <div className="w-14 h-14 flex items-center justify-center bg-green-50 text-green-600 text-3xl rounded-xl">

                <FiCompass />

              </div>


              <p className="text-xs text-green-600 font-bold tracking-widest mt-7">

                OUR MISSION

              </p>


              <h3 className="text-2xl font-bold text-gray-800 mt-3">

                Making Research More Accessible.

              </h3>


              <p className="text-sm text-gray-500 leading-8 mt-5">

                Our mission is to make research and data intelligence
                more accessible by connecting individuals, businesses,
                researchers, and organizations with structured
                data collection, meaningful analysis, and
                useful research insights.

              </p>

            </div>



            <div className="bg-green-700 text-white p-8 md:p-10 rounded-2xl">

              <div className="w-14 h-14 flex items-center justify-center bg-white/10 text-white text-3xl rounded-xl">

                <FiGlobe />

              </div>


              <p className="text-xs text-green-200 font-bold tracking-widest mt-7">

                OUR VISION

              </p>


              <h3 className="text-2xl font-bold mt-3">

                A World That Makes Better Decisions Through Data.

              </h3>


              <p className="text-sm text-green-100 leading-8 mt-5">

                We envision a future where access to reliable
                research and meaningful information empowers
                businesses, organizations, and individuals to
                understand challenges, discover opportunities,
                and make informed decisions.

              </p>

            </div>


          </div>

        </div>

      </section>



      {/* ================= INDUSTRIES ================= */}

      <section className="py-24 px-5">

        <div className="max-w-6xl mx-auto">


          <div className="max-w-2xl">

            <p className="text-xs tracking-widest font-bold text-green-600">

              INDUSTRIES WE SERVE

            </p>


            <h2 className="text-3xl font-bold text-gray-800 mt-5">

              Research For A World Of Different Needs.

            </h2>


            <p className="text-sm text-gray-500 leading-8 mt-4">

              From business decisions to social development,
              research plays an important role in understanding
              the challenges and opportunities shaping our world.

            </p>

          </div>



          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            {industries.map((item, index) => (

              <div
                key={index}
                className="group p-7 border border-gray-100 rounded-xl hover:border-green-200 hover:bg-green-50/30 transition"
              >

                <div className="flex items-center justify-between">

                  <div className="text-2xl text-green-600 bg-green-50 p-3 rounded-lg">

                    {item.icon}

                  </div>

                  <FiArrowUpRight className="text-gray-300 group-hover:text-green-600 transition" />

                </div>


                <h3 className="font-bold text-gray-800 mt-6">

                  {item.title}

                </h3>


                <p className="text-sm text-gray-500 leading-7 mt-3">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= WHO WE SERVE ================= */}

      <section className="bg-gray-50 py-24 px-5">

        <div className="max-w-6xl mx-auto">


          <div className="text-center">

            <p className="text-xs tracking-widest font-bold text-green-600">

              WHO WE WORK WITH

            </p>


            <h2 className="text-3xl font-bold text-gray-800 mt-5">

              Built Around The People Who Need Answers.

            </h2>


            <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-4 leading-7">

              We bring research closer to the people and organizations
              that need information to understand, improve, and grow.

            </p>

          </div>



          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {audiences.map((item, index) => (

              <div
                key={index}
                className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100"
              >

                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-3xl">

                  {item.icon}

                </div>


                <h3 className="text-xl font-bold text-gray-800 mt-6">

                  {item.title}

                </h3>


                <p className="text-sm text-gray-500 leading-8 mt-4">

                  {item.description}

                </p>


                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm text-green-600 font-semibold mt-8 hover:gap-4 transition-all"
                >

                  {item.button}

                  <FiArrowRight />

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= OUR VALUES ================= */}

      <section className="py-24 px-5">

        <div className="max-w-6xl mx-auto">


          <div className="text-center">

            <p className="text-xs tracking-widest font-bold text-green-600">

              WHAT GUIDES US

            </p>


            <h2 className="text-3xl font-bold text-gray-800 mt-5">

              The Principles Behind Our Work.

            </h2>


            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-4 leading-7">

              The quality of research depends not only on the
              information collected but also on the principles
              guiding the entire process.

            </p>

          </div>



          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {principles.map((item, index) => (

              <div
                key={index}
                className="text-center p-6"
              >

                <div className="w-14 h-14 mx-auto flex items-center justify-center text-2xl bg-green-50 text-green-600 rounded-xl">

                  {item.icon}

                </div>


                <h3 className="font-bold text-gray-800 mt-5">

                  {item.title}

                </h3>


                <p className="text-sm text-gray-500 leading-7 mt-3">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= FINAL CTA ================= */}

      <section className="px-5 pb-24">

        <div className="max-w-6xl mx-auto bg-green-700 rounded-2xl p-9 md:p-16 text-center relative overflow-hidden">


          <div className="absolute w-80 h-80 bg-green-500/30 blur-3xl rounded-full -top-40 -left-20" />

          <div className="absolute w-80 h-80 bg-green-400/20 blur-3xl rounded-full -bottom-40 -right-20" />


          <div className="relative z-10">


            <p className="text-xs tracking-widest font-bold text-green-100">

              THE FUTURE IS INFORMED

            </p>


            <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 leading-tight">

              Every Great Decision
              Starts With The Right Information.

            </h2>


            <p className="max-w-xl mx-auto text-sm text-green-100 leading-8 mt-5">

              Whether you are looking to understand your market,
              conduct research, or discover meaningful insights,
              IGHTDATA gives you a place to start.

            </p>


            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">


              <Link
                href="/signup"
                className="bg-white text-green-700 px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-green-50 transition"
              >

                Join IGHTDATA

              </Link>


              <Link
                href="/contact"
                className="border border-green-300 text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition"
              >

                Contact Our Team

              </Link>


            </div>

          </div>

        </div>

      </section>


    </main>

  );

}