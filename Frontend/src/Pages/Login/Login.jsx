import React, { useState } from "react";

const Login = () => {
  const [focused, setFocused] = useState({ email: false, password: false });
  const [values, setValues] = useState({ email: "", password: "" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-teal-100 to-green-100">
      <div className="relative w-full max-w-md p-8 bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-tr from-teal-400 to-blue-400 rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-tr from-green-400 to-teal-400 rounded-full opacity-30 animate-bounce-slow"></div>

        <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
          Welcome Back
        </h2>
        <form className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              onFocus={() => setFocused({ ...focused, email: true })}
              onBlur={() => setFocused({ ...focused, email: false })}
              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              autoComplete="email"
              required
            />
            <label
              htmlFor="email"
              className={`absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-200
                ${
                  focused.email || values.email
                    ? "text-xs -top-2 bg-white px-1"
                    : "peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1"
                }
              `}
            >
              Email Address
            </label>
          </div>
          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              id="password"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              onFocus={() => setFocused({ ...focused, password: true })}
              onBlur={() => setFocused({ ...focused, password: false })}
              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              autoComplete="current-password"
              required
            />
            <label
              htmlFor="password"
              className={`absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-200
                ${
                  focused.password || values.password
                    ? "text-xs -top-2 bg-white px-1"
                    : "peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1"
                }
              `}
            >
              Password
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-400 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-teal-600 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-bounce-slow {
            animation: bounceSlow 3s infinite alternate;
          }
          @keyframes bounceSlow {
            from { transform: translateY(0);}
            to { transform: translateY(20px);}
          }
        `}
      </style>
    </div>
  );
};

export default Login;
