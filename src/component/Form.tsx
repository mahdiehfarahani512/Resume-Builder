import React from 'react'
import type { UseFormRegister } from 'react-hook-form';

interface Personal {
  FullName: string;
  EmailAddress: string;
  PhoneNumber: string;
  Location: string;
  Profession: string;
  LinkedInProfile: string;
  PersonalWebsite: string;
}
type Props = {
  register: UseFormRegister <Personal>;
};


const Form = ({ register }: Props) => {
  return (
   <div className="bg-white px-6 py-4 flex flex-col gap-4 w-2xl  border border-gray-300 rounded-lg ">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <button className="flex items-center gap-1 text-sm text-blue-600 bg-linear-to-b from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-panels-top-left"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M9 21V9"></path>
            </svg>
            <span className="max-sm:hidden">Template</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-purple-600 bg-linear-to-b from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-palette"
              aria-hidden="true"
            >
              <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </svg>{" "}
            <span className="max-sm:hidden">Accent</span>
          </button>
        </div>
    <div>
          <button className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right size-4"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
 </div>
      <hr className="text-gray-300" />
      <div className="flex flex-col ">
        <h3 className="text-[18px] font-semibold text-gray-900">
          Personal Information
        </h3>
        <p className="primaryTest text-gray-600">
          Get Started with the personal information
        </p>
      </div>
      <div className="flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-user size-10 p-2.5 border rounded-full"
          aria-hidden="true"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <p className="text-[15px]">upload user image</p>
      </div>
 <form className="flex flex-col gap-4 " action="">
        <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user size-4"
              aria-hidden="true"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg   focus:border-blue-500 outline-none transition-colors text-sm"
            {...register("FullName", {
              required: true,
            })}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail size-4"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
            Email Address<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg   focus:border-blue-500 outline-none transition-colors text-sm"
            {...register("EmailAddress", {
              required: true,
            })}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone size-4"
              aria-hidden="true"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            Phone Number
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg   focus:border-blue-500 outline-none transition-colors text-sm"
            {...register("PhoneNumber")}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin size-4"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Location
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg   focus:border-blue-500 outline-none transition-colors text-sm"
            {...register("Location")}
            type="text"
          />
        </div>
      <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase-business size-4"
              aria-hidden="true"
            >
              <path d="M12 12h.01"></path>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
              <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
            Profession
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg   focus:border-blue-500 outline-none transition-colors text-sm"
            {...register("Profession")}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin size-4"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn Profile
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg   focus:border-blue-500 outline-none transition-colors text-sm"
            {...register("LinkedInProfile")}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-globe size-4"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            Personal Website
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg   focus:border-blue-500 outline-none transition-colors text-sm"
            {...register("PersonalWebsite")}
            type="text"
          />
        </div>
        <div className="flex items-start">
        <button className="bg-linear-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring hover:ring-green-400 transition-all rounded-md px-6 py-2 mt-6 text-sm">
          Save Changes
        </button>
        </div>
      </form>
    </div>

  )
}

export default Form