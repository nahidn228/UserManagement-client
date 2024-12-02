import "animate.css";
import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirm");
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your User has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className=" w-11/12 md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 ">
      {users.map((user, idx) => (
        <div
          key={idx}
          className="card w-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white p-4 rounded-lg animate__animated animate__fadeIn shadow-2xl"
        >
          {/* Image */}
          <div className="flex justify-center mb-4">
            <img
              src={user.photo}
              alt="User"
              className="w-24 h-24 object-cover rounded-full border-4 border-white"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p className="text-sm">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Gender:</span> {user.gender}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Status:</span> {user.status}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex justify-between">
            <button
              className="btn btn-sm btn-ghost text-yellow-300 flex items-center space-x-1"
              title="View"
            >
              <FaEye />
              <span>View</span>
            </button>
            <Link
              to={`/update/${user._id}`}
              className="btn btn-sm btn-ghost text-blue-300 flex items-center space-x-1"
              title="Edit"
            >
              <FaEdit />
              <span>Edit</span>
            </Link>
            <button
              onClick={() => handleDelete(user._id)}
              className="btn btn-sm btn-ghost text-red-300 flex items-center space-x-1"
              title="Delete"
            >
              <FaTrash />
              <span>Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
