import "./Header.scss";

import logo from "../../assets/icons/logo.svg";
import like from "../../assets/icons/like.svg";
import person from "../../assets/icons/person.svg";
import buy from "../../assets/icons/buy.svg";
import search from "../../assets/icons/search.svg";
import menu from "../../assets/icons/menu.svg";

import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory  } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // take URL where we are
  const showBackground = location.pathname === "/";
  const [currentCategory, setCurrentCategory] = useState("home");
  const history = useHistory();

  useEffect(() => {
    const category = location.pathname.replace("/", "");
    setCurrentCategory(category || "home");
  }, [location]);

  // Функція, яка встановлює поточну категорію
  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    const url = category === "home" ? "/" : `/${category}`;
    history.push(url);
  };;

  return (
    <header className={`header ${showBackground ? "with-background" : ""}`}>
      <div className="container">
        <div className="header_wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header_btn">
            <div className="search">
              <img src={search} alt="search" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="menu_btn">
              <img src={like} alt="like" />
              <img src={buy} alt="buy" />
              <img src={person} alt="person" />
            </div>
          </div>
        </div>

        <div className={`header_menu ${currentCategory !== 'home' ? 'header_menu_absolute' : ''}`}>
          <ul className="menu_list">
            <li
              className={`menu_item ${
                currentCategory === "home" ? "active" : ""
              }`}
            >
              <Link
                to="/"
                className="menu_link"
                onClick={() => handleCategoryClick("home")}
              >
                {currentCategory === "home" && (
                  <img src={menu} alt="Selected" />
                )}
                ГОЛОВНА
              </Link>
            </li>
            <li
              className={`menu_item ${
                currentCategory === "shop" ? "active" : ""
              }`}
            >
              <Link
                to="/shop"
                className="menu_link"
                onClick={() => handleCategoryClick("shop")}
              >
                {currentCategory === "shop" && (
                  <img src={menu} alt="Selected" />
                )}
                МАГАЗИН
              </Link>
            </li>
            <li
              className={`menu_item ${
                currentCategory === "collections" ? "active" : ""
              }`}
            >
              <Link
                to="/collections"
                className="menu_link"
                onClick={() => handleCategoryClick("collections")}
              >
                {currentCategory === "collections" && (
                  <img src={menu} alt="Selected" />
                )}
                КОЛЕКЦІЇ
              </Link>
            </li>
            <li
              className={`menu_item ${
                currentCategory === "collaboration" ? "active" : ""
              }`}
            >
              <Link
                to="/collaboration"
                className="menu_link"
                onClick={() => handleCategoryClick("collaboration")}
              >
                {currentCategory === "collaboration" && (
                  <img src={menu} alt="Selected" />
                )}
                КОЛОБОРАЦІЇ
              </Link>
            </li>
            <li
              className={`menu_item ${
                currentCategory === "about" ? "active" : ""
              }`}
            >
              <Link
                to="/about"
                className="menu_link"
                onClick={() => handleCategoryClick("about")}
              >
                {currentCategory === "about" && (
                  <img src={menu} alt="Selected" />
                )}
                ПРО НАС
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {currentCategory === "home" && (
        <div className="header_title">
          <h1>WAY</h1>
        </div>
      )}
    </header>
  );
};

export default Header;
