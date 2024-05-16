import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex justify-around pt-4">
      <div className="form-control">
        <span className="label-text text-white">Male</span>
        <input type="checkbox" className="checkbox" border-slate-900 />
      </div>
      <div className="form-control">
        <span className="label-text text-white">Female</span>
        <input type="checkbox" className="checkbox" border-slate-900 />
      </div>
    </div>
  );
};

export default GenderCheckbox;
