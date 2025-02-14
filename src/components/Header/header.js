import React from "react";
import "../Header/header.css";
import logo from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../SelectDrop/select" 

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-2">
              <img src={logo} alt="Logo" />
            </div>

            {/* Search Section */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <div className="selectDrop position-relative cours">
                  All Categories
                  <Select />
                </div>
                <div className="search">
                  <input type="text" placeholder="Search..." />
                  <SearchIcon className="searchIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
