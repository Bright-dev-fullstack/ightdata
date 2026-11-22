"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import {
  FiArrowLeft,
  FiArrowRight,
  FiUser,
  FiMail,
  FiLock,
  FiGlobe,
  FiMapPin,
  FiPhone,
  FiEye,
  FiEyeOff,
  FiBookOpen,
  FiCheckCircle,
  FiDatabase,
  FiSearch,
} from "react-icons/fi";


export default function ResearcherSignup() {

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  // Form values
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");


  // Form feedback
  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");


  // Form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setError("");
    setSuccess("");


    // Password matching validation
    if (password !== confirmPassword) {

      setError("Your passwords do not match.");

      return;

    }


    setSuccess(
      "Your information is valid. Connect the authentication backend to create your account."
    );

  };


  return (

    <main className="min-h-screen bg-[#F9FAF9] px-5 py-10 text-black sm:px-8 md:py-16">

      <div className="mx-auto max-w-6xl">


        {/* Back Navigation */}

        <Link
          href="/signup"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-green-700"
        >

          <FiArrowLeft size={17} />

          Back to account selection

        </Link>



        {/* Main Layout */}

        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">


          {/* LEFT INFORMATION SECTION */}

          <section className="lg:sticky lg:top-10">


            {/* Icon */}

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">

              <FiBookOpen size={27} />

            </div>



            {/* Heading */}

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">

              Researcher Account

            </span>


            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">

              Your voice.

              <br />

              Your data.

              <br />

              <span className="text-green-700">

                Your impact.

              </span>

            </h1>



            {/* Description */}

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">

              Join the IGHTDATA research community. Participate in
              questionnaires, contribute valuable information and
              discover opportunities to support meaningful research.

            </p>



            {/* Benefits */}

            <div className="mt-10 space-y-6">


              {/* Benefit 1 */}

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">

                  <FiCheckCircle size={20} />

                </div>


                <div>

                  <h3 className="text-sm font-semibold text-black">

                    Participate in research

                  </h3>


                  <p className="mt-1 text-xs leading-6 text-gray-500">

                    Discover questionnaires and contribute to
                    research projects.

                  </p>

                </div>

              </div>



              {/* Benefit 2 */}

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">

                  <FiDatabase size={20} />

                </div>


                <div>

                  <h3 className="text-sm font-semibold text-black">

                    Contribute meaningful data

                  </h3>


                  <p className="mt-1 text-xs leading-6 text-gray-500">

                    Help generate insights that support better
                    decisions.

                  </p>

                </div>

              </div>



              {/* Benefit 3 */}

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">

                  <FiSearch size={20} />

                </div>


                <div>

                  <h3 className="text-sm font-semibold text-black">

                    Explore opportunities

                  </h3>


                  <p className="mt-1 text-xs leading-6 text-gray-500">

                    Stay informed about research opportunities
                    relevant to your interests.

                  </p>

                </div>

              </div>


            </div>


          </section>




          {/* RIGHT REGISTRATION FORM */}

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-9">


            {/* Form Heading */}

            <div className="mb-8">

              <h2 className="text-2xl font-bold text-black">

                Create your account

              </h2>


              <p className="mt-2 text-sm text-gray-500">

                Enter your information to get started.

              </p>

            </div>




            {/* Registration Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >



              {/* FULL NAME */}

              <div>

                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >

                  Full name

                  <span className="ml-1 text-red-500">*</span>

                </label>


                <div className="relative">

                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />


                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={80}
                    pattern=".\S."
                    title="Enter your full name."
                    className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                  />

                </div>

              </div>




              {/* EMAIL ADDRESS */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >

                  Email address

                  <span className="ml-1 text-red-500">*</span>

                </label>


                <div className="relative">

                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />


                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                  />

                </div>

              </div>




              {/* PHONE NUMBER */}

              <div>

                <label
                  htmlFor="phoneNumber"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >

                  Phone number

                  <span className="ml-2 text-xs font-normal text-gray-400">

                    (Optional)

                  </span>

                </label>


                <div className="flex gap-2">


                  {/* COUNTRY CODE */}

                  <div className="relative w-[125px] shrink-0">

                    <select
                      id="phoneCountryCode"
                      name="phoneCountryCode"
                      defaultValue="+234"
                      aria-label="Country calling code"
                      autoComplete="tel-country-code"
                      className="h-full w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 py-3.5 pr-7 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                    >

                      <option value="+234">🇳🇬 +234</option>

                      <option value="+233">🇬🇭 +233</option>

                      <option value="+254">🇰🇪 +254</option>

                      <option value="+27">🇿🇦 +27</option>

                      <option value="+1">🇺🇸 +1 (USA)</option>

                      <option value="+1">🇨🇦 +1 (Canada)</option>

                      <option value="+44">🇬🇧 +44</option>

                      <option value="+91">🇮🇳 +91</option>

                      <option value="+61">🇦🇺 +61</option>

                      <option value="+971">🇦🇪 +971</option>

                      <option value="+33">🇫🇷 +33</option>

                      <option value="+49">🇩🇪 +49</option>

                      <option value="+86">🇨🇳 +86</option>

                      <option value="+81">🇯🇵 +81</option>

                      <option value="+55">🇧🇷 +55</option>

                      <option value="+7">🇷🇺 +7</option>

                      <option value="+39">🇮🇹 +39</option>

                      <option value="+34">🇪🇸 +34</option>

                      <option value="+20">🇪🇬 +20</option>

                      <option value="+237">🇨🇲 +237</option>

                      <option value="+256">🇺🇬 +256</option>

                      <option value="+255">🇹🇿 +255</option>

                      <option value="+251">🇪🇹 +251</option>

                      <option value="+212">🇲🇦 +212</option>

                    </select>

                  </div>



                  {/* PHONE INPUT */}

                  <div className="relative flex-1">

                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />


                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="801 234 5678"
                      autoComplete="tel-national"
                      maxLength={15}
                      pattern="[0-9\s()-]{7,15}"
                      title="Enter a valid phone number without the country code."
                      className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                    />

                  </div>


                </div>


                <p className="mt-2 text-xs text-gray-400">

                  Select your country code and enter your phone number.

                </p>

              </div>




              {/* COUNTRY AND STATE */}

              <div className="grid gap-5 sm:grid-cols-2">


                {/* COUNTRY */}

                <div>

                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >

                    Country

                    <span className="ml-1 text-red-500">*</span>

                  </label>


                  <div className="relative">

                    <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />


                    <input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="e.g. Nigeria"
                      autoComplete="country-name"
                      required
                      maxLength={56}
                      className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                    />

                  </div>

                </div>



                {/* STATE */}

                <div>

                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >

                    State / Region

                    <span className="ml-2 text-xs font-normal text-gray-400">

                      (Optional)

                    </span>

                  </label>


                  <div className="relative">

                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />


                    <input
                      id="state"
                      name="state"
                      type="text"
                      placeholder="e.g. Abuja"
                      autoComplete="address-level1"
                      maxLength={80}
                      className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                    />

                  </div>

                </div>


              </div>




              {/* RESEARCH INTERESTS */}

              <div>

                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >

                  Research interests

                  <span className="ml-2 text-xs font-normal text-gray-400">

                    (Optional)

                  </span>

                </label>


                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-600 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                >

                  <option value="" disabled>

                    Select your area of interest

                  </option>

                  <option value="technology">

                    Technology

                  </option>

                  <option value="education">

                    Education

                  </option>

                  <option value="health">

                    Health

                  </option>

                  <option value="agriculture">

                    Agriculture

                  </option>

                  <option value="finance">

                    Finance and Banking

                  </option>

                  <option value="business">

                    Business and Economy

                  </option>

                  <option value="environment">

                    Environment

                  </option>

                  <option value="social-science">

                    Social Sciences

                  </option>

                  <option value="engineering">

                    Engineering

                  </option>

                  <option value="other">

                    Other

                  </option>

                </select>

              </div>




              {/* PASSWORD */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >

                  Password

                  <span className="ml-1 text-red-500">*</span>

                </label>


                <div className="relative">

                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />


                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    maxLength={64}
                    pattern="(?=.[A-Za-z])(?=.[0-9]).{8,64}"
                    title="Password must contain at least 8 characters, including one letter and one number."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                  />


                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-green-700"
                  >

                    {showPassword ? (

                      <FiEyeOff size={19} />

                    ) : (

                      <FiEye size={19} />

                    )}

                  </button>

                </div>


                <p className="mt-2 text-xs leading-5 text-gray-400">

                  Minimum 8 characters, including at least one letter
                  and one number.

                </p>

              </div>




              {/* CONFIRM PASSWORD */}

              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >

                  Confirm password

                  <span className="ml-1 text-red-500">*</span>

                </label>


                <div className="relative">

                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />


                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    maxLength={64}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                  />


                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                    aria-pressed={showConfirmPassword}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-green-700"
                  >

                    {showConfirmPassword ? (

                      <FiEyeOff size={19} />

                    ) : (

                      <FiEye size={19} />

                    )}

                  </button>

                </div>

              </div>




              {/* ERROR MESSAGE */}

              {error && (

                <div
                  role="alert"
                  className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600"
                >

                  {error}

                </div>

              )}




              {/* SUCCESS MESSAGE */}

              {success && (

                <div
                  role="status"
                  className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700"
                >

                  {success}

                </div>

              )}




              {/* TERMS AND CONDITIONS */}

              <div className="flex items-start gap-3 pt-2">


                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-green-700"
                />


                <label
                  htmlFor="terms"
                  className="text-xs leading-6 text-gray-500"
                >

                  I agree to the{" "}


                  <Link
                    href="/terms"
                    className="font-semibold text-green-700 hover:underline"
                  >

                    Terms of Service

                  </Link>


                  {" "}and{" "}


                  <Link
                    href="/privacy"
                    className="font-semibold text-green-700 hover:underline"
                  >

                    Privacy Policy

                  </Link>


                  .

                </label>


              </div>




              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-700 px-5 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-green-800"
              >

                Create Researcher Account

                <FiArrowRight size={18} />

              </button>



            </form>




            {/* SIGN IN */}

            <div className="mt-8 border-t border-gray-100 pt-6 text-center">

              <p className="text-sm text-gray-500">

                Already registered?


                <Link
                  href="/login"
                  className="ml-2 font-semibold text-green-700 transition hover:text-green-900 hover:underline"
                >

                  Sign in

                </Link>

              </p>

            </div>



          </section>


        </div>

      </div>

    </main>

  );

}