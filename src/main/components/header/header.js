import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import logo from "../../../asset/logo.jpg";
import "./header.css";
const Header = () => {
  const navslide = () => {
    const burger = document.querySelector(".burger");
    const navitem = document.querySelector(".headeritem");
    const navlinks = document.querySelectorAll(".headeritem p");

    burger.addEventListener("click", () => {
      navitem.classList.toggle("headeritem-active");

      navlinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navlinkfade 0.5s ease forwards ${
            index / 5 + .5
          }s`;
        }
      });

      burger.classList.toggle('toggle')
    });
  };
  useEffect(() => {
    navslide();
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <p style={{ color: "#ed7d31" }}>VYORIUS</p>
      </div>
      <div className="headeritem">
        <p>Why Vyorius</p>
        <p>Solution</p>
        <p>Product</p>
        <p>Use Case</p>
        <p>Team</p>
        <p>Partner</p>
        <p>Contact Us</p>
      </div>
      <div className="headerbtn">
        <Button
          variant="contained"
          disableElevation
          size = "small"
          style={{ color: "white", backgroundColor: "#ed7d31", fontSize: 13 , letterSpacing:1 }}
        >
          Launch Vyorius
        </Button>
      </div>
      <div className="burger">
        <div className="first"></div>
        <div className="second "></div>
        <div className="third"></div>
      </div>
    </div>
  );
};

export default Header;
