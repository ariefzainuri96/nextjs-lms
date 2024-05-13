import React from "react";
import { logout } from "../actions";

const DashboardStudentPage = () => {
  return (
    <div className="flex flex-col">
      <p>Dashboard Student</p>
      <form action={logout}>
        <button className="btn-outlined" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
};

export default DashboardStudentPage;
