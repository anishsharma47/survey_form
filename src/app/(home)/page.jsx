"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  return (
    <div>
      <SurveyForm />
    </div>
  );
};

export default page;

function SurveyForm() {
  const [experience, setExperience] = useState("amazing");
  const [usage, setUsage] = useState("everyday");
  const [feedback, setFeedback] = useState("");
  const [feeling, setFeeling] = useState("great");

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
    let formData = {
      name,
      contact,
      email,
      experience,
      usage,
      feedback,
      feeling,
    };
    console.log("formdata", formData);
    toast.success("form submitted successfully");
  }

  return (
    <div className=" bg-gray-100">
      <div className=" rounded-lg shadow-lg w-full flex">
        <div className="w-[400px] bg-white min-h-full text-black pt-10 px-5 rounded-xl hidden md:block">
          <div className="relative top-[20%] ">
            {" "}
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              Survey form
            </h2>
            <p className="text-gray-600 mb-6">
              News feed user experience survey
            </p>
          </div>
        </div>

        <div className=" w-full md:w-[80%] h-full space-y-10  md:space-y-16 text-black p-6 md:p-10  lg:p-20">
          <h1 className="text-2xl font-bold text-blue-500">Survey form</h1>
          <div className="w-full flex gap-5 flex-wrap">
            <div className="flex-grow">
              <label className="text-black  mb-2" htmlFor="">
                Name
              </label>
              <div className="flex h-[42px] rounded-lg ">
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border w-full border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-transparent outline-none p-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex-grow">
              <label className="text-black  mb-2" htmlFor="">
                Contact No.
              </label>
              <div className="flex h-[42px]  rounded-lg">
                <input
                  required
                  type="text"
                  placeholder="Enter your contact no."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="border w-full border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-transparent outline-none p-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex-grow">
              <label className="text-black mb-2" htmlFor="">
                Email
              </label>
              <div className="flex h-[42px]  rounded-lg">
                <input
                  required
                  type="text"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border w-full border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-transparent outline-none p-2 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">
              How would you rate your overall experience on our app?
            </label>
            <div className=" flex items-center gap-8 flex-wrap">
              {["Amazing", "Good", "Average", "Poor", "Extremely Poor"].map(
                (option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="experience"
                      className="accent-blue-bg-blue-500  focus:ring-blue-bg-blue-500 w-4 h-4"
                      value={option.toLowerCase()}
                      checked={experience === option.toLowerCase()}
                      onChange={() => setExperience(option.toLowerCase())}
                    />
                    <span
                      className={`text-nowrap ${
                        experience === option.toLowerCase() && "text-blue-500"
                      }`}
                    >
                      {option}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2 text-black">
              How often do you use our newsfeed?
            </label>
            <div className=" flex gap-8 items-center flex-wrap">
              {[
                "Everyday",
                "Fairly often",
                "Sometimes",
                "Not that often",
                "Rarely",
              ].map((option) => (
                <label key={option} className="flex items-center gap-4">
                  <input
                    value={option.toLowerCase()}
                    checked={usage === option.toLowerCase()}
                    onChange={() => setUsage(option.toLowerCase())}
                    className="w-5 h-5 accent-blue-bg-blue-500  focus:ring-blue-bg-blue-500 cursor-pointer"
                    type="checkbox"
                  />
                  <span
                    className={`text-nowrap ${
                      usage === option.toLowerCase() && "text-blue-500"
                    }`}
                  >
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">
              Tell us about your experience with the Facebook newsfeed.
            </label>
            <textarea
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              rows={3}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Type your feedback here..."
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">
              How do you feel when using our newsfeed?
            </label>
            <div className="flex gap-4 flex-wrap">
              {[
                {
                  label: "Great",
                  img: "😍",
                },
                {
                  label: "Good",
                  img: "😃",
                },
                {
                  label: "Ok",
                  img: "😶",
                },
                { label: "Bad", img: "😞" },
                { label: "Terrible", img: "😣" },
              ].map((option, index) => (
                <div
                  key={index}
                  onClick={() => setFeeling(option.label.toLowerCase())}
                  className={`flex justify-center flex-col items-center p-2 rounded-md cursor-pointer ${
                    feeling === option.label.toLowerCase()
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-blue-200 duration-300"
                  } `}
                >
                  <div className="text-center text-[40px] ">{option.img}</div>
                  <div className={`p-2 w-[100px] rounded-md text-center  `}>
                    {option.label} {/* Render only the label */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleSubmit()}
            className="bg-blue-500 w-full  sm:w-fit px-6 text-white py-3 rounded-xl"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
