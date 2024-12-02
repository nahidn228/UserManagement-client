import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsers = () => {

  const data = useLoaderData();
  const [users, setUsers] = useState(data);

  // Delete user function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter((user) => user.id !== id));
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };

  // Edit user function
  const handleEdit = (id) => {};

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 p-6">
      <div className="w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
          User Management System
        </h2>
        <div className="text-right mb-4">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">
            {" "}
            <Link to="/add">New User</Link>
          </button>
        </div>
        <table className="w-full table-auto text-center border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{idx + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.gender}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td className="px-4 py-2 flex justify-center items-center space-x-2">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="text-teal-600 hover:text-teal-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
