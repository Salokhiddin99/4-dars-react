import React from "react";
import "./SideBar.scss";
import Logo from "../../assets/images/Logo.svg";
import MenuList from "../MenuList/MenuList";
function SideBar() {
  return (
    <>
      <aside className="aside w-25">
        <img src={Logo} alt="a logo" className="logo" />
        <div className="line"></div>
        <MenuList />
      </aside>
    </>
  );
}

export default SideBar;
