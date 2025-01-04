import React from 'react';
import { useSelector } from 'react-redux';

const AllUsers = () => {
  const users = useSelector((state) => state.userInfo.userInfo);

  return (
    <div className="p-5 min-h-screen bg-gray-100 flex flex-col items-center">
      {users.length > 0 ? (
        <ul className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 divide-y divide-gray-200">
          {users.map((user, index) => (
            <li
              key={index}
              className="py-4 px-6 flex flex-col gap-5  rounded-lg hover:bg-gray-50 transition"
            >
              <div className="text-lg font-semibold text-gray-800">
                <strong>Name:</strong> {user.name}
              </div>
              <div className="text-lg text-gray-600 border-b border-gray-400 rounded-lg shadow-md pb-6">
                <strong>Email:</strong> {user.email}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-lg">No users found.</p>
      )}
    </div>
  );
};

export default AllUsers;
