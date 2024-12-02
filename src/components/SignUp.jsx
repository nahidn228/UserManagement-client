import "animate.css";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password didn't match!",
      });
      return;
    }
    console.log(name, email, password, confirmPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 animate__animated animate__fadeInDown">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <div className="flex items-center border rounded-lg mt-2 p-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <div className="flex items-center border rounded-lg mt-2 p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="flex items-center border rounded-lg mt-2 p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full focus:outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="focus:outline-none text-gray-500 ml-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <div className="flex items-center border rounded-lg mt-2 p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                className="w-full focus:outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={handleToggleConfirmPassword}
                className="focus:outline-none text-gray-500 ml-2"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold rounded-lg shadow-md hover:from-purple-600 hover:to-pink-500 transition-all duration-300 animate__animated animate__pulse animate__infinite"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-purple-700 font-semibold hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
