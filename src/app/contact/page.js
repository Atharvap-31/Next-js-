"use client";

import React from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    alert("form submited");
    console.log(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">User Form</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            First Name
          </label>
          <input
            {...register("firstName", { required: true, maxLength: 10 })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <span className="text-sm font-medium text-red-700">
              {errors.firstName.type === "required"
                ? "First Name is required"
                : "Max Length has been exeeded"}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Last Name
          </label>
          <input
            {...register("lastName", {
              required: true,
              minLength: 3,
              maxLength: 10,
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <span className="text-sm font-medium text-red-700">
              {errors.lastName.type === "required"
                ? "Last Name is required"
                : errors.lastName.type === "minLength"
                ? "At least enter 3 letters"
                : "Max Length has been exeeded"}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
