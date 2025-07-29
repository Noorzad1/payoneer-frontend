import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Username</label>
            <input type="text" className="w-full mt-1 p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full mt-1 p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="w-full mt-1 p-2 border rounded-md" />
          </div>
          <button className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
