import React from "react";

function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <p className="text-sm mb-6">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600">
              Sign up
            </a>
          </p>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              EMAIL OR PHONE
            </label>
            <input
              type="text"
              id="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Type here"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
                placeholder="Type here"
              />
              <button className="absolute right-2 top-2 text-gray-600">
                {/* Ko'zcha iconi */}
                👁
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Keep me logged in</span>
            </label>
            <a href="#" className="text-sm text-blue-600">
              Forgot password
            </a>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-md mb-4">
            Login
          </button>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>user@githubbit.com</span>
            <button className="text-green-500">copy</button>
          </div>
          <p className="text-center text-gray-600 text-sm my-4">
            or access quickly
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-200 p-2 rounded-full">🍏</button>
            <button className="bg-gray-200 p-2 rounded-full">📘</button>
            <button className="bg-gray-200 p-2 rounded-full">🟢</button>
          </div>
        </div>
      </div>
      {/* Right Side: Image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url(https://path-to-image.jpg)" }}
      >
        {/* Suratingizni to'g'ridan to'g'ri bu yergacha kiritishingiz mumkin */}
      </div>
    </div>
  );
}

export default LoginPage;
