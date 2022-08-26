import React from "react";
import { Link } from "react-router-dom";
import OverView from "../../assets/images/overview.svg";
import Cloud from "../../assets/images/cloud.svg";
import Sketch from "../../assets/images/sketch.svg";
import Experiments from "../../assets/images/experiments.svg";
import Security from "../../assets/images/security.svg";
import Ownership from "../../assets/images/ownership.svg";
import Test from "../../assets/images/test.svg";
import Colors from "../../assets/images/colors.svg";
import Logout from "../../assets/images/logout.svg";
function MenuList() {
  return (
    <>
      <ul className="menu">
        <li className="menu__item mt-4">
          <Link
            className="text-decoration-none d-flex align-items-center"
            to={"/"}
          >
            <img src={OverView} alt="a social logo" />
            <span className="menu__text text-white h5 ms-4">TodoList</span>
          </Link>
        </li>
        <li className="menu__item mt-4">
          <Link
            className="text-decoration-none d-flex align-items-center"
            to={"/todo"}
          >
            <img src={Ownership} alt="a social logo" />
            <span className="menu__text text-white h5 ms-4">Todo API</span>
          </Link>
        </li>
        {/* <li className="menu__item mt-4">
          <a href="" className="text-decoration-none d-flex align-items-center">
            <img src={Cloud} alt="a social logo" />
            <span className="menu__text text-white h5 ms-4">Cloud</span>
          </a>
        </li>
        <li className="menu__item mt-4">
          <a href="" className="text-decoration-none d-flex align-items-center">
            <img src={Sketch} alt="a social logo" />
            <span className="menu__text text-white h5 ms-4">Sketch</span>
          </a>
        </li>
        <li className="menu__item mt-4">
          <a href="" className="text-decoration-none d-flex align-items-center">
            <img src={Experiments} alt="a social logo" />
            <span className="menu__text text-white h5 ms-4">Experiments</span>
          </a>
        </li>
        <li className="menu__item mt-4">
          <a href="" className="text-decoration-none d-flex align-items-center">
            <img src={Security} alt="a social logo" />
            <span className="menu__text text-white h5 ms-4">Security</span>
          </a>
        </li>
        <li className="menu__item mt-4">
          <a href="" className="text-decoration-none d-flex align-items-center">
            <img src={Ownership} alt="a social logo" />
            <span className="menu__text text-white h5 ms-4">Ownership</span>
          </a>
        </li>
        <li className="menu__item mt-4">
          <a href="" className="text-decoration-none d-flex align-items-center">
            <img src={Test} alt="a social logo" />
            <span className="menu__text text-white h5 ms-4">A/B Test</span>
          </a>
        </li>
        <li className="menu__item mt-4">
          <a href="" className="text-decoration-none d-flex align-items-center">
            <img src={Colors} alt="a social logo" />
            <span className="menu__text text-white h5 ms-4">Colors</span>
          </a>
        </li> */}
      </ul>
      <a href="#" className="logout d-flex text-decoration-none mt-4">
        <img src={Logout} alt="logout img" />
        <span className="logout__text ms-4 h5 text-white">Logout</span>
      </a>
    </>
  );
}

export default MenuList;
