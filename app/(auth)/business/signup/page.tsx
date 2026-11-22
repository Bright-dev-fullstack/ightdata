"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiDatabase,
  FiEye,
  FiEyeOff,
  FiGlobe,
  FiLock,
  FiMail,
  FiPhone,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { BsFillBugFill } from "react-icons/bs";

export default function BusinessSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    jobTitle: "",
    email: "",
    phoneCode: "+234",
    phone: "",
    country: "",
    state: "",
    industry: "",
    companySize: "",
    website: "",
    registrationNumber: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Your passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setMessage("Please accept the terms and conditions.");
      return;
    }

    setMessage(
      "Form validation successful. Connect the authentication backend to create your business account."
    );

    console.log(formData);
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const labelStyle =
    "mb-2 block text-sm font-medium text-gray-700";

  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* Back to account selection */}

        <Link
          href="/signup"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-green-700"
        >
          <FiArrowLeft />
          Back to account selection
        </Link>

        <div className="grid overflow-hidden rounded-2xl border border-gray-100 shadow-sm lg:grid-cols-2">

          {/* LEFT INFORMATION PANEL */}

          <section className="relative flex flex-col justify-between overflow-hidden bg-[#101a16] p-8 text-white sm:p-12">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

            <div className="relative z-10">

              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-white">
                  <FiBriefcase size={22} />
                </div>

                <span className="text-xl font-bold tracking-wide">
                  IGHT<span className="text-green-400">DATA</span>
                </span>
              </div>

              <span className="mb-5 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400">
                Business Registration
              </span>

              <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
                Make better decisions with reliable data.
              </h1>

              <p className="max-w-md text-sm leading-7 text-gray-300 sm:text-base">
                Connect your organisation to research,
                industry insights and data-driven intelligence.
                Discover the information that helps your
                business understand markets and make informed
                decisions.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                    <FiDatabase size={20} />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold">
                      Access research insights
                    </h3>

                    <p className="text-sm leading-6 text-gray-400">
                      Explore research findings and industry
                      information relevant to your organisation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                    <FiGlobe size={20} />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold">
                      Understand your industry
                    </h3>

                    <p className="text-sm leading-6 text-gray-400">
                      Discover trends, consumer insights and
                      information that support business growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                    <FiShield size={20} />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold">
                      A dedicated business account
                    </h3>

                    <p className="text-sm leading-6 text-gray-400">
                      Manage your organisation&apos;s research
                      activities and account information.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative z-10 mt-12 border-t border-white/10 pt-6">
              <p className="text-xs text-gray-400">
                IGHTDATA — Connecting research, people and
                businesses through data.
              </p>
            </div>

          </section>

          {/* RIGHT SIGNUP FORM */}

          <section className="bg-white p-6 sm:p-10 lg:p-12">

            <div className="mb-8">

              <p className="mb-2 text-sm font-semibold text-green-700">
                BUSINESS ACCOUNT
              </p>

              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Register your organisation to get started with
                IGHTDATA.
              </p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* BUSINESS INFORMATION */}

              <div>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-900">
                  <BsFillBugFill className="text-green-600" />
                  Business Information
                </h3>

                <div className="space-y-4">

                  <div>
                    <label className={labelStyle}>
                      Business / Organisation Name *
                    </label>

                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Enter your business name"
                      className={inputStyle}
                      minLength={2}
                      maxLength={120}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Industry *
                    </label>

                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={inputStyle}
                      required
                    >
                      <option value="">
                        Select your industry
                      </option>

                      <option value="Agriculture">
                        Agriculture
                      </option>

                      <option value="Technology">
                        Technology
                      </option>

                      <option value="Education">
                        Education
                      </option>

                      <option value="Healthcare">
                        Healthcare
                      </option>

                      <option value="Finance">
                        Finance and Banking
                      </option>

                      <option value="Manufacturing">
                        Manufacturing
                      </option>

                      <option value="Retail">
                        Retail and Commerce
                      </option>

                      <option value="Construction">
                        Construction and Real Estate
                      </option>

                      <option value="Transportation">
                        Transportation and Logistics
                      </option>

                      <option value="Energy">
                        Energy and Utilities
                      </option>

                      <option value="Media">
                        Media and Communications
                      </option>

                      <option value="Government">
                        Government and Public Sector
                      </option>

                      <option value="Hospitality">
                        Hospitality and Tourism
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Company Size *
                    </label>

                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className={inputStyle}
                      required
                    >
                      <option value="">
                        Select company size
                      </option>

                      <option value="1-10">
                        1–10 employees
                      </option>

                      <option value="11-50">
                        11–50 employees
                      </option>

                      <option value="51-200">
                        51–200 employees
                      </option>

                      <option value="201-500">
                        201–500 employees
                      </option>

                      <option value="501-1000">
                        501–1,000 employees
                      </option>

                      <option value="1000+">
                        More than 1,000 employees
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Business Website
                      <span className="ml-1 text-gray-400">
                        (Optional)
                      </span>
                    </label>

                    <div className="relative">
                      <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://www.yourbusiness.com"
                        className={`${inputStyle} pl-11`}
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Business Registration Number
                      <span className="ml-1 text-gray-400">
                        (Optional)
                      </span>
                    </label>

                    <input
                      type="text"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      placeholder="Enter CAC registration number"
                      className={inputStyle}
                      maxLength={50}
                    />

                    <p className="mt-1 text-xs text-gray-400">
                      For Nigerian businesses, you can enter
                      your CAC registration number.
                    </p>
                  </div>

                </div>
              </div>

              {/* CONTACT INFORMATION */}

              <div className="border-t border-gray-100 pt-6">

                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-900">
                  <FiUser className="text-green-600" />
                  Contact Person
                </h3>

                <div className="space-y-4">

                  <div>
                    <label className={labelStyle}>
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputStyle}
                      minLength={2}
                      maxLength={80}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Job Title / Position *
                    </label>

                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="e.g. Founder, Manager, Director"
                      className={inputStyle}
                      maxLength={80}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Business Email Address *
                    </label>

                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@business.com"
                        className={`${inputStyle} pl-11`}
                        maxLength={254}
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Phone Number *
                    </label>

                    <div className="flex gap-2">

                      <select
                        name="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleChange}
                        className="w-32 rounded-lg border border-gray-200 bg-white px-2 py-3 text-sm text-gray-900 outline-none focus:border-green-600"
                        autoComplete="tel-country-code"
                        aria-label="Country calling code"
                      >
                        <option value="+234">
                          NG +234
                        </option>

                        <option value="+233">
                          GH +233
                        </option>

                        <option value="+254">
                          KE +254
                        </option>

                        <option value="+27">
                          ZA +27
                        </option>

                        <option value="+44">
                          UK +44
                        </option>

                        <option value="+1">
                          US/CA +1
                        </option>

                        <option value="+91">
                          IN +91
                        </option>

                        <option value="+61">
                          AU +61
                        </option>

                        <option value="+971">
                          UAE +971
                        </option>

                        <option value="+237">
                          CM +237
                        </option>
                      </select>

                      <div className="relative flex-1">
                        <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                          className={`${inputStyle} pl-11`}
                          autoComplete="tel-national"
                          maxLength={15}
                          pattern="[0-9\s()-]{7,15}"
                          required
                        />
                      </div>

                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <div>
                      <label className={labelStyle}>
                        Country *
                      </label>

                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. Nigeria"
                        className={inputStyle}
                        maxLength={56}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>
                        State / Region
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="e.g. Lagos"
                        className={inputStyle}
                        maxLength={80}
                      />
                    </div>

                  </div>

                </div>
              </div>

              {/* PASSWORD */}

              <div className="border-t border-gray-100 pt-6">

                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-900">
                  <FiLock className="text-green-600" />
                  Account Security
                </h3>

                <div className="space-y-4">

                  <div>
                    <label className={labelStyle}>
                      Password *
                    </label>

                    <div className="relative">

                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        className={`${inputStyle} pr-12`}
                        minLength={8}
                        maxLength={64}
                        pattern="(?=.[A-Za-z])(?=.[0-9]).{8,}"
                        autoComplete="new-password"
                        required
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <FiEyeOff size={18} />
                        ) : (
                          <FiEye size={18} />
                        )}
                      </button>

                    </div>

                    <p className="mt-2 text-xs text-gray-400">
                      Use at least 8 characters, including
                      letters and numbers.
                    </p>
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Confirm Password *
                    </label>

                    <div className="relative">

                      <input
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={`${inputStyle} pr-12`}
                        minLength={8}
                        maxLength={64}
                        autoComplete="new-password"
                        required
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                        aria-label={
                          showConfirmPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showConfirmPassword ? (
                          <FiEyeOff size={18} />
                        ) : (
                          <FiEye size={18} />
                        )}
                      </button>

                    </div>
                  </div>

                </div>
              </div>

              {/* TERMS */}

              <div className="border-t border-gray-100 pt-6">

                <label className="flex cursor-pointer items-start gap-3">

                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 accent-green-600"
                    required
                  />

                  <span className="text-sm leading-6 text-gray-600">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-semibold text-green-700 hover:underline"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-semibold text-green-700 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>

                </label>

              </div>

              {/* MESSAGE */}

              {message && (
                <div
                  role="alert"
                  className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                >
                  {message}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Create Business Account
                <FiArrowRight size={18} />
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-green-700 hover:underline"
                >
                  Sign in
                </Link>
              </p>

            </form>

          </section>

        </div>
      </div>
    </main>
  );
}