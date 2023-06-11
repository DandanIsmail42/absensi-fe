import React from "react";

const NavbarDash = ({ logout }) => {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{localStorage.getItem("nama")}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
            <button
              type="button"
              className="mx-3 btn btn-sm btn-outline-secondary"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <h2>Dashboard</h2>
    </div>
  );
};

export default NavbarDash;
