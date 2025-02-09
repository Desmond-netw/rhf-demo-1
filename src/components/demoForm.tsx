import React from "react";
import "../index.css";

export const DemoForm = () => {
  return (
    <>
      <div className="container mx-auto max-w-md">
        <div className=" flex-auto">
          <form className=" w-auto">
            <div className=" flex gap-4  mx-auto">
              {/* first name */}
              <div>
                <label htmlFor="Fname">First Name</label>
                <input
                  type="text"
                  placeholder="FIrst name"
                  className="enabled:hover:border-gray-400 disabled:opacity-75"
                />
              </div>
              {/* last name */}
              <div>
                <label htmlFor="Fname">Last Name</label>
                <input
                  type="text"
                  placeholder="FIrst name"
                  className="enabled:hover:border-gray-400 disabled:opacity-75"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DemoForm;
