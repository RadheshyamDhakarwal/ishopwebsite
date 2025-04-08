import React from "react";
import ProfileTab from "../../Profile/ProfileTab";

const ProfilePageUser = ({ user }) => {
  return (
    <>
    <div className="w-full">
       <ProfileTab/> 
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center bg-teal-600 text-white rounded-full text-xl font-bold">
            {user.initials}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600 flex items-center gap-2">
              {user.email} <span className="cursor-pointer">📋</span>
            </p>
          </div>
        </div>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-md">Edit</button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-500">First Name</p>
          <p className="text-lg font-medium">{user.firstName}</p>
        </div>
        <div>
          <p className="text-gray-500">Last Name</p>
          <p className="text-lg font-medium">{user.lastName}</p>
        </div>
        <div>
          <p className="text-gray-500">Email</p>
          <p className="text-lg font-medium">{user.email}</p>
        </div>
        <div>
          <p className="text-gray-500">Mobile</p>
          <p className="text-lg font-medium">{user.mobile}</p>
        </div>
        <div>
          <p className="text-gray-500">Address</p>
          {/* <p className="text-lg font-medium">{user.dob || "--"}</p> */}
          <textarea name="text" id="text">{user.addres || "--"}</textarea>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

const UserProfile = () => {
  const user = {
    initials: "JD",
    name: "Jhon Deo",
    firstName: "Jhon",
    lastName: "Deo",
    email: "admin@example.com",
    mobile: "+919785058004",
    addres: "--",
  };

  return (
    <div className=" w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ProfilePageUser user={user} />
    </div>
  );
};

export default UserProfile;

