import Map from "./Map";
import { useState } from "react";
import Image from "next/image";
export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstName: event.target["firstName"].value,
      lastName: event.target["lastName"].value,
      email: event.target.email.value,
      phoneNumber: event.target["phoneNumber"].value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsModalOpen(true);
        console.log("Form submitted successfully");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-center items-center flex-col pt-6 pb-12 ">
      <div className="contactwrapper grid  mx-12 gap-4">
        <div className="grid sm:grid-cols-2">
          <div>
            <Image src="/lbgsign.png" width={300} height={300} />{" "}
          </div>
          <form onSubmit={handleSubmit} method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="phone-number"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let’s talk
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-white">
              By submitting this form, I agree to the{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
            </p>
          </form>
        </div>
      </div>
      <Map />
    </div>
  );
}
