import React from "react";
import { withRouter } from "react-router";
import house from "../../assets/house.png";
import "./Header.scss";
import Button from "../button/Button";
import { Link } from "react-router-dom";

function Header(props) {
  const navigation = [
    {
      path: "/",
      title: "",
    },
    {
      path: "/sale",
      title: "Продажа",
    },
    {
      path: "/#",
      title: "Аренда",
    },
    {
      path: "/#",
      title: "Посёлки",
    },
    {
      path: "/#",
      title: "О компании",
    },
  ];

  return (
    <div className="wrapper-header w-100">
      <div className="header px-5 pt-3 pb-3 d-flex justify-content-between align-items-center">
        <div className="left">
          {navigation.map((item) => (
            <Link
            key={item.title}
              to={item.path}
              className={`${
                item.path === props.location.pathname ? "active" : ""
              } pr-4`}
            >
              {item.title ? item.title : <img src={house} alt="Logo"></img>}
            </Link>
          ))}
        </div>
        <div className="right">
          <span className="px-3">+7 (495) 132-03-90</span>
          <Button>Обратный звонок</Button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
