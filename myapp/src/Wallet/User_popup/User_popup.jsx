import React from "react";
import { Link } from "react-router-dom";

function User_popup() {
  return (
    <div className="">
      <div className="h-[8rem] w-20  flex flex-col items-center justify-center">
        <Link to='kyc'><span className="font-arima">KYC</span></Link>{" "}
        <hr className=" border-gray-300" />
        <Link to='profile'><span className="font-arima">Profile</span></Link>{" "}
        <hr className=" border-gray-300" />
        <span className="font-arima">Logout</span>{" "}
        <hr className=" border-black-300" />
      </div>
    </div>
  );
}

export default User_popup;
