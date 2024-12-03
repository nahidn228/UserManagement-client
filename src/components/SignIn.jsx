import "animate.css";
import { useContext, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");

        Swal.fire({
          icon: "success",
          title: `You are successfully Login`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorCode}`,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 animate__animated animate__fadeInDown">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-6">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold rounded-lg shadow-md hover:from-purple-600 hover:to-pink-500 transition-all duration-300 animate__animated animate__pulse animate__infinite"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Do not have an account?{" "}
          <a
            href="/signup"
            className="text-purple-700 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
