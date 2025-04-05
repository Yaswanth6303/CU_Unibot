import React from "react";

const DepartmentSelector = ({ department, setDepartment, colors }) => {
  return (
    <div className="p-4 bg-gray-50 border-b border-gray-200">
      <label
        className="text-sm font-semibold block mb-1"
        style={{ color: colors.primary }}
      >
        Department:
      </label>
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent text-gray-700 bg-white transition-all"
        style={{ borderColor: colors.primary, focusRing: colors.secondary }}
      >
        <option value="General">General</option>
        <option value="Admissions">Admissions</option>
        <option value="Academics">Academics</option>
        <option value="Support">Support</option>
      </select>
    </div>
  );
};

export default DepartmentSelector;
