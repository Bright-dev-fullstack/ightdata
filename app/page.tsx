import Link from "next/link";
import type { ReactNode } from "react";

import { BsClipboard2Check } from "react-icons/bs";

import {
  FaChartLine,
  FaArrowTrendUp,
} from "react-icons/fa6";

import {
  FiBarChart,
  FiPieChart,
  FiUsers,
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
  FiSearch,
  FiDatabase,
  FiGlobe,
  FiBriefcase,
  FiTrendingUp,
  FiShield,
  FiLayers,
  FiFileText,
  FiActivity,
  FiMessageSquare,
  FiMap,
  FiShoppingBag,
  FiHeart,
  FiBookOpen,
  FiChevronDown,
} from "react-icons/fi";

import {
  MdPlaylistAdd,
  MdOutlineInsights,
} from "react-icons/md";


interface Step {
  icon: ReactNode;
  count: string;
  head: string;
  body: string;
}

interface Feature {
  icon: ReactNode;
  title: string;
  body: string;
}

interface Category {
  icon: ReactNode;
  title: string;
  body: string;
}

interface Audience {
  icon: ReactNode;
  title: string;
  body: string;
  points: string[];
}


// HOW IT WORKS

const steps: Step[] = [
  {
    icon: <FiTarget />,
    count: "01",
    head: "Define The Objective",
    body: "Identify the question, problem, or research area you want to understand.",
  },
  {
    icon: <FiUsers />,
    count: "02",
    head: "Collect Real Data",
    body: "Use structured questionnaires and interviews to gather relevant responses.",
  },
  {
    icon: <FiPieChart />,
    count: "03",
    head: "Analyze Information",
    body: "Organize collected responses and identify meaningful patterns and trends.",
  },
  {
    icon: <FiBarChart />,
    count: "04",
    head: "Discover Insights",
    body: "Transform research findings into information that supports better decisions.",
  },
];


// PLATFORM FEATURES

const features: Feature[] = [
  {
    icon: <BsClipboard2Check />,
    title: "Structured Data Collection",
    body: "Create organized questionnaires designed to collect relevant information from real respondents.",
  },
  {
    icon: <FiDatabase />,
    title: "Organized Research Data",
    body: "Keep collected information structured, accessible, and ready for further analysis.",
  },
  {
    icon: <FiActivity />,
    title: "Research & Analysis",
    body: "Understand responses, identify patterns, and discover what the collected data reveals.",
  },
  {
    icon: <MdOutlineInsights />,
    title: "Actionable Insights",
    body: "Turn research findings into meaningful information that supports informed decisions.",
  },
  {
    icon: <FiShield />,
    title: "Research Integrity",
    body: "Build confidence through transparent research methods and responsible data handling.",
  },
  {
    icon: <FiGlobe />,
    title: "Industry Intelligence",
    body: "Understand markets, communities, consumer behaviour, and changing industry trends.",
  },
];


// RESEARCH CATEGORIES

const categories: Category[] = [
  {
    icon: <FiBriefcase />,
    title: "Business & Enterprise",
    body: "Business performance, customer satisfaction, and market opportunities.",
  },
  {
    icon: <FiShoppingBag />,
    title: "Market Research",
    body: "Consumer preferences, purchasing behaviour, and market trends.",
  },
  {
    icon: <FiBookOpen />,
    title: "Education & Research",
    body: "Academic research, educational experiences, and institutional studies.",
  },
  {
    icon: <FiHeart />,
    title: "Healthcare",
    body: "Public health awareness, healthcare experiences, and community research.",
  },
  {
    icon: <FiUsers />,
    title: "Social Research",
    body: "Human behaviour, public opinions, social trends, and community insights.",
  },
  {
    icon: <FiMap />,
    title: "Development & Policy",
    body: "Community development, public programmes, and policy research.",
  },
];


// AUDIENCES

const audiences: Audience[] = [
  {
    icon: <FiBriefcase />,
    title: "For Businesses",
    body: "Understand your customers, identify opportunities, and make business decisions supported by research.",
    points: [
      "Understand customer behaviour",
      "Identify market opportunities",
      "Measure customer satisfaction",
      "Access relevant research findings",
    ],
  },
  {
    icon: <FiBookOpen />,
    title: "For Researchers",
    body: "Make research more accessible through structured data collection and organized research information.",
    points: [
      "Create structured questionnaires",
      "Collect relevant responses",
      "Organize research information",
      "Access meaningful findings",
    ],
  },
];


// FAQ

const faqs = [
  {
    question: "What is IGHTDATA?",
    answer:
      "IGHTDATA is a research and data intelligence platform designed to connect structured data collection with meaningful insights for businesses, researchers, and organizations.",
  },
  {
    question: "Who can use IGHTDATA?",
    answer:
      "Businesses, researchers, organizations, institutions, and individuals who need reliable information to understand a particular problem or make informed decisions.",
  },
  {
    question: "How does data collection work?",
    answer:
      "Research questionnaires are designed around specific objectives and distributed to relevant respondents. Their responses are collected and organized for analysis.",
  },
  {
    question: "Can businesses request custom research?",
    answer:
      "Yes. Businesses can submit research requirements describing their objectives, target audience, and the information they need.",
  },
  {
    question: "Does IGHTDATA provide research reports?",
    answer:
      "The platform is designed to transform collected research information into organized findings and reports that help users understand their research objectives.",
  },
];


export default function Home() {

  return (
    <main className="overflow-hidden bg-white text-gray-700">

      {/* ================= HERO SECTION ================= */}

      <section className="relative px-5 pt-24 pb-24 md:pt-32 md:pb-32">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-100/40 blur-[120px] rounded-full -z-0" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <p className="text-xs tracking-widest bg-green-50 text-green-700 font-semibold w-max mx-auto px-4 py-2 rounded-full border border-green-100">
            RESEARCH. DATA. DECISIONS.
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-7 leading-tight text-gray-800">

            Make Decisions With

            <span className="block text-green-600">
              More Than Assumptions.
            </span>

          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-500 leading-8 text-sm md:text-base"> Discover a smarter way to collect data, understand people,
            uncover insights, and make decisions backed by meaningful
            research.</p>

          <p className="max-w-2xl mx-auto mt-3 text-sm text-gray-500 leading-7"><strong className="text-green-600">IGHTDATA</strong> bridges
            the gap between research and real-world intelligence,
            helping businesses, researchers, and organizations
            make sense of the world through reliable data.</p>


          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">

            <Link
              href="/insights"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-7 py-3.5 rounded-lg font-medium text-sm"
            >
              Explore Insights
              <FiArrowRight />
            </Link>

            <Link
              href="/how-it-works"
              className="flex items-center justify-center gap-2 border border-gray-200 hover:border-green-600 hover:text-green-600 transition px-7 py-3.5 rounded-lg font-medium text-sm"
            >
              How It Works
              <FiArrowRight />
            </Link>

          </div>


          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 text-xs text-gray-500">

            <span className="flex items-center gap-2">
              <FiCheckCircle className="text-green-600" />
              Research-driven decisions
            </span>

            <span className="flex items-center gap-2">
              <FiCheckCircle className="text-green-600" />
              Structured data collection
            </span>

            <span className="flex items-center gap-2">
              <FiCheckCircle className="text-green-600" />
              Meaningful insights
            </span>

          </div>

        </div>

      </section>


      {/* ================= WHAT WE DO ================= */}

      <section className="py-20 px-5 bg-gray-50/80">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-xs tracking-widest text-green-600 font-semibold">
              WHAT WE DO
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">

              Data Is Everywhere.
              Understanding It Changes Everything.

            </h2>

            <p className="text-gray-500 text-sm leading-7 mt-4">

              Every industry has questions that need answers.
              Every important decision deserves reliable evidence.

              IGHTDATA makes research more accessible by connecting
              data collection with meaningful insights.

            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            {features.map((item, index) => (

              <div
                key={index}
                className="bg-white border border-gray-100 p-7 rounded-xl hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 transition duration-300"
              >

                <div className="w-12 h-12 flex items-center justify-center text-2xl text-green-600 bg-green-50 rounded-lg">

                  {item.icon}

                </div>

                <h3 className="font-semibold text-gray-800 mt-5">

                  {item.title}

                </h3>

                <p className="text-sm text-gray-500 leading-7 mt-2">

                  {item.body}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="py-24 px-5">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-xs tracking-widest text-green-600 font-semibold">
              HOW IT WORKS
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">

              From Questions To Actionable Insights.

            </h2>

            <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-7">

              A structured approach to understanding problems,
              collecting relevant information, and discovering
              meaningful answers.

            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

            {steps.map((item, index) => (

              <div
                key={index}
                className="relative border border-gray-100 rounded-xl p-6 bg-white hover:shadow-lg hover:shadow-green-900/5 transition"
              >

                <div className="flex justify-between items-center">

                  <div className="text-4xl text-green-600">

                    {item.icon}

                  </div>

                  <span className="text-3xl font-bold text-green-100">

                    {item.count}

                  </span>

                </div>

                <h3 className="font-semibold text-gray-800 mt-7">

                  {item.head}

                </h3>

                <p className="text-sm text-gray-500 leading-7 mt-3">

                  {item.body}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= RESEARCH CATEGORIES ================= */}

      <section className="py-20 px-5 bg-gray-50/80">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

            <div>

              <p className="text-xs tracking-widest text-green-600 font-semibold">
                RESEARCH AREAS
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">

                Research That Covers
                What Matters.

              </h2>

              <p className="text-sm text-gray-500 mt-3 max-w-xl leading-7">

                Different industries have different questions.
                We make it easier to understand the information
                that matters to them.

              </p>

            </div>

            <Link
              href="/research"
              className="text-sm font-semibold text-green-600 flex items-center gap-2 hover:gap-3 transition-all"
            >
              Explore Research Areas
              <FiArrowRight />
            </Link>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            {categories.map((item, index) => (

              <Link
                href="/research"
                key={index}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:border-green-300 hover:shadow-md transition"
              >

                <div className="flex justify-between items-center">

                  <div className="text-2xl text-green-600 bg-green-50 p-3 rounded-lg">

                    {item.icon}

                  </div>

                  <FiArrowRight className="text-gray-300 group-hover:text-green-600 group-hover:translate-x-1 transition" />

                </div>

                <h3 className="font-semibold text-gray-800 mt-5">

                  {item.title}

                </h3>

                <p className="text-sm text-gray-500 leading-7 mt-2">

                  {item.body}

                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FOR BUSINESSES AND RESEARCHERS ================= */}

      <section className="py-24 px-5">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-xs tracking-widest text-green-600 font-semibold">
              WHO WE SERVE
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">

              Research That Works For Everyone.

            </h2>

            <p className="text-sm text-gray-500 mt-4">

              Whether you are growing a business or conducting research,
              the right information makes a difference.

            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-7 mt-12">

            {audiences.map((item, index) => (

              <div
                key={index}
                className="border border-gray-100 rounded-2xl p-8 md:p-10 hover:shadow-lg hover:shadow-green-900/5 transition"
              >

                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl bg-green-50 text-green-600">

                  {item.icon}

                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6">

                  {item.title}

                </h3>

                <p className="text-sm text-gray-500 leading-7 mt-3">

                  {item.body}

                </p>


                <div className="space-y-4 mt-7">

                  {item.points.map((point, i) => (

                    <p
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >

                      <FiCheckCircle className="text-green-600 text-lg shrink-0" />

                      {point}

                    </p>

                  ))}

                </div>


                <Link
                  href={index === 0 ? "/business/signup" : "/researcher/signup"}
                  className="flex items-center gap-2 mt-9 text-green-600 font-semibold text-sm hover:gap-3 transition-all"
                >

                  Get Started
                  <FiArrowRight />

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= INSIGHTS PREVIEW ================= */}

      <section className="py-20 px-5 bg-gray-50/80">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-xs tracking-widest text-green-600 font-semibold">
              RESEARCH & INSIGHTS
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">

              Information Is Valuable.
              Insights Make It Powerful.

            </h2>

            <p className="text-sm text-gray-500 max-w-xl mx-auto leading-7 mt-4">

              Explore research findings, understand emerging trends,
              and discover information that helps explain the world
              around us.

            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-5 mt-12">

            {[
              {
                category: "MARKET RESEARCH",
                title: "Understanding Consumer Behaviour",
                body: "Explore how consumer preferences and purchasing decisions shape markets.",
                icon: <FiShoppingBag />,
              },
              {
                category: "BUSINESS INTELLIGENCE",
                title: "The Changing Business Landscape",
                body: "Understand the factors influencing business growth and market opportunities.",
                icon: <FiTrendingUp />,
              },
              {
                category: "SOCIAL RESEARCH",
                title: "Understanding Communities",
                body: "Discover how research can reveal public opinions and social patterns.",
                icon: <FiUsers />,
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition"
              >

                <div className="h-40 bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center">

                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-4xl text-green-600 shadow-sm">

                    {item.icon}

                  </div>

                </div>

                <div className="p-6">

                  <p className="text-[10px] font-bold tracking-widest text-green-600">

                    {item.category}

                  </p>

                  <h3 className="font-semibold text-gray-800 mt-3">

                    {item.title}

                  </h3>

                  <p className="text-sm text-gray-500 leading-7 mt-3">

                    {item.body}

                  </p>

                  <Link
                    href="/insights"
                    className="flex items-center gap-2 text-green-600 font-semibold text-sm mt-6"
                  >

                    Explore Insight
                    <FiArrowRight />

                  </Link>

                </div>

              </div>

            ))}

          </div>


          <div className="text-center mt-10">

            <Link
              href="/insights"
              className="inline-flex items-center gap-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition px-7 py-3 rounded-lg text-sm font-medium"
            >

              View All Insights
              <FiArrowRight />

            </Link>

          </div>

        </div>

      </section>


      {/* ================= WHY IGHTDATA ================= */}

      <section className="py-24 px-5">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>

            <p className="text-xs tracking-widest text-green-600 font-semibold">
              WHY IGHTDATA
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-5 leading-tight">

              Better Information.
              <span className="text-green-600 block">
                Better Understanding.
              </span>

            </h2>

            <p className="text-sm text-gray-500 leading-8 mt-5">

              Information alone is not enough. What matters is
              understanding what that information means and
              how it can be used.

              IGHTDATA brings research, data collection,
              and insights together in one connected platform.

            </p>


            <div className="space-y-6 mt-9">

              {[
                {
                  icon: <FiTarget />,
                  title: "Purpose-driven research",
                  body: "Every research process begins with a clear objective.",
                },
                {
                  icon: <FiDatabase />,
                  title: "Organized information",
                  body: "Make collected information easier to understand and interpret.",
                },
                {
                  icon: <FiTrendingUp />,
                  title: "Insightful decisions",
                  body: "Use meaningful findings to support better decisions.",
                },
              ].map((item, index) => (

                <div key={index} className="flex gap-4">

                  <div className="text-xl text-green-600 bg-green-50 w-11 h-11 shrink-0 rounded-lg flex items-center justify-center">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-800">

                      {item.title}

                    </h3>

                    <p className="text-sm text-gray-500 mt-1 leading-6">

                      {item.body}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* VISUAL DATA REPRESENTATION */}

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-xs text-gray-400 font-medium">
                  RESEARCH WORKFLOW
                </p>

                <h3 className="font-bold text-gray-800 mt-2">
                  From Data To Intelligence
                </h3>

              </div>

              <div className="text-green-600 text-2xl bg-green-50 p-3 rounded-lg">

                <FiActivity />

              </div>

            </div>


            <div className="space-y-4 mt-10">
              {[
                {
                  title: "Research Objective",
                  desc: "Define what needs to be understood.",
                  icon: <FiTarget />,
                  width: "w-full",
                },
                {
                  title: "Data Collection",
                  desc: "Gather relevant information.",
                  icon: <FiUsers />,
                  width: "w-[90%]",
                },
                {
                  title: "Data Analysis",
                  desc: "Identify patterns and relationships.",
                  icon: <FiPieChart />,
                  width: "w-[80%]",
                },
                {
                  title: "Actionable Insights",
                  desc: "Understand the research findings.",
                  icon: <FiTrendingUp />,
                  width: "w-[70%]",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className={`bg-white border border-gray-100 rounded-xl p-4 ${item.width}`}
                >

                  <div className="flex items-center gap-3">

                    <div className="text-green-600 text-xl">
                      {item.icon}</div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>


            <div className="mt-7 flex items-center gap-3 bg-green-600 text-white rounded-xl p-5">

              <MdOutlineInsights className="text-3xl shrink-0" />

              <div>

                <h4 className="font-semibold text-sm">

                  Meaningful Research Outcomes

                </h4>

                <p className="text-xs text-green-100 mt-1">

                  Turning collected information into understanding.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="px-5 py-20">

        <div className="max-w-6xl mx-auto bg-green-700 rounded-2xl p-9 md:p-16 text-center relative overflow-hidden">

          <div className="absolute w-72 h-72 bg-green-500/30 rounded-full blur-3xl -top-32 -left-20" />

          <div className="absolute w-72 h-72 bg-green-400/20 rounded-full blur-3xl -bottom-32 -right-20" />


          <div className="relative z-10">

            <p className="text-xs tracking-widest text-green-100 font-semibold">

              YOUR NEXT DECISION STARTS HERE

            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-white mt-5 leading-tight">

              Stop Guessing.
              Start Understanding.

            </h2>

            <p className="text-sm text-green-100 max-w-xl mx-auto mt-5 leading-7">

              Whether you need research for your business,
              an organization, or an academic project,
              start with the right questions and discover
              the information that matters.

            </p>


            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">

              <Link
                href="/business/signup"
                className="bg-white text-green-700 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-green-50 transition"
              >

                Get Started

              </Link>

              <Link
                href="/contact"
                className="border border-green-300 text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-green-600 transition"
              >

                Talk To Us

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="py-20 px-5 bg-gray-50/80">

        <div className="max-w-3xl mx-auto">

          <div className="text-center">

            <p className="text-xs tracking-widest text-green-600 font-semibold">
              FAQ
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">

              Frequently Asked Questions

            </h2>

            <p className="text-sm text-gray-500 mt-3">

              Everything you need to know about IGHTDATA.

            </p>

          </div>


          <div className="mt-10 space-y-3">

            {faqs.map((item, index) => (

              <details
                key={index}
                className="group bg-white border border-gray-100 rounded-xl p-5"
              >

                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-sm text-gray-800">

                  {item.question}

                  <FiChevronDown className="text-green-600 shrink-0 group-open:rotate-180 transition-transform" />

                </summary>

                <p className="text-sm text-gray-500 leading-7 mt-4">

                  {item.answer}

                </p>

              </details>

            ))}

          </div>

        </div>

      </section>
    </main>
  );
}