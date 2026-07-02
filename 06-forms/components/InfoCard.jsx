import React from "react";

const InfoCard = ({ employee }) => {
  if (!employee) return null;

  return (
    <div className="max-w-md mx-auto mt-8 bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Employee Details
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-600">Name</span>
          <span className="text-gray-900">{employee.name}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-600">Email</span>
          <span className="text-blue-600">{employee.email}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-600">Age</span>
          <span>{employee.age}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-600">Department</span>
          <span>{employee.department}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-600">Salary</span>
          <span className="font-bold text-green-600">₹ {employee.salary}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Joining Date</span>
          <span className="italic text-gray-500">{employee.joiningDate}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
