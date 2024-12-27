"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles


function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true); 
    e.preventDefault();
    try{
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      toast.success("Form Submitted Successfully", {
        position: "top-right",
        autoClose: 2000,
      }); 
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        details: "",
      });
    } else {
      toast.error("Error submitting form:",{
        position: "top-right",
        autoClose: 2000,
      })
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("There was an error submitting the form.", {
      position: "top-right",
      autoClose: 2000,
    }); // Error toast
  } finally {
    setLoading(false); // End loading
  }
  };


  return (
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pt-10 bg-white"
      id="contact-section"
    >
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600">
            We'd love to talk about how we can help you.
          </p>
        </div>
        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
            <h2 className="mb-8 text-xl font-semibold text-gray-800">
              Fill in the form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border rounded">
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="py-3 px-4 block w-full border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={50}
                    />
                  </div>
                  <div className="border rounded">
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="py-3 px-4 block w-full border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={50}
                    />
                  </div>
                </div>
                <div className="border rounded">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="border rounded">
                  <label htmlFor="phoneNumber" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="py-3 px-4 block w-full border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>
                <div className="border rounded">
                  <label htmlFor="details" className="sr-only">
                    Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="py-3 px-4 block w-full border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Details"
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="mt-4 grid">
              <button
            type="submit"
            className="hero-btn w-full  py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm text-black bg-blue-600 border-transparent bg-themebase  hover:bg-themehover transition-all duration-100 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <span className="loader mr-2"></span> // Add a loading spinner here if needed
            ) : (
              "Submit"
            )}
          </button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 text-gray-800 mt-1.5"
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
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">Our address</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Our office is conveniently located to serve you better.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="https://www.google.com/maps/place/185,+C+Block+Janakpuri+Rd,+Desu+Colony,+RWA+Colony,+Janakpuri,+New+Delhi,+Delhi,+110058/@28.610433,77.098274,16z/data=!4m5!3m4!1s0x390d1b54ebf42ecf:0x6a52d9fa9cbbd34d!8m2!3d28.610433!4d77.0982743?hl=en&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  HISAR,KETHAL,KARNAL,BHIWANI,ROHTAK, (HARYANA)
DWARKA,NAZAFGARH,ROHINI-(DELHI)
GHAZIABAD,BIJNOR,MEERUT- (UTTAR PRADESH)
                  <svg
                    className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1 text-gray-600"
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
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 text-gray-800 mt-1.5"
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
                <path d="M22 2H2v20l4-4h16V2Z"></path>
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">Email us</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Our team is here to help you via email.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href=""
                >
                  Send Email
                  <svg
                    className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1 text-gray-600"
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
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 mt-1.5"
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">Call us</h3>
                <p className="mt-1 text-sm text-gray-500">
                  We are available to take your call.
                </p>
                <hr />
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="tel:+91-9266777488 "
                >
                   +91-9266777488                  <svg
                    className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1 text-gray-600"
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
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeButton={true}
      />
    </div>
  );
}

export default ContactForm;
