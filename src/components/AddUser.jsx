import "animate.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewUser = () => {
  const [gender, setGender] = useState("Male");
  const [status, setStatus] = useState("Active");

  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;

    if (!name || !email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields!",
      });
      return;
    }

    const newUser = { name, email,photo, gender, status };
    //console.log(newUser);

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "User Added!",
          text: `New user ${name} added successfully.`,
        });
      });

    // Clear the form
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 animate__animated animate__fadeInUp">
        <button className="absolute top-4 right-4 py-2 px-4 bg-teal-700 text-white rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300">
          {" "}
          <Link to="/users">All Users</Link>
        </button>
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
          New User
        </h2>
        <form onSubmit={handleSave} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <div className="flex items-center border rounded-lg mt-2 p-2">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter full name"
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
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                required
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
          {/* Image Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Image Url
            </label>
            <div className="flex items-center border rounded-lg mt-2 p-2">
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter Image Url"
                required
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Gender Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Gender
            </label>
            <div className="flex mt-2">
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                  className="mr-2"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Status Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Status
            </label>
            <div className="flex mt-2">
              <label className="mr-4">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={status === "Active"}
                  onChange={() => setStatus("Active")}
                  className="mr-2"
                />
                Active
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={status === "Inactive"}
                  onChange={() => setStatus("Inactive")}
                  className="mr-2"
                />
                Inactive
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-700 to-cyan-600 text-white font-bold rounded-lg shadow-md hover:from-teal-600 hover:to-cyan-500 transition-all duration-300 animate__animated animate__pulse animate__infinite"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
