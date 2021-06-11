import React from "react";
import { StyleSheet } from 'react-native';
import { slide as Menu } from "react-burger-menu";
import "./burger.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", 'false')
    : menuWrap.setAttribute("aria-hidden", 'true');
};
const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default function App() {
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", 'true');
    }
  }, []);

  return (
    <div className="App">
      <BurgerMenu />
      <div>
        <header>
          <h2 style={{ margin: 0 }}>Welcome to a website</h2>
        </header>
      </div>
    </div>
  );
}


const styles = StyleSheet.create({
  /*
  bm-burger-button: {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }
  
  .bm-burger-bars: {
    backgroundColor: "#000";
  }
  */
  
  /* .bm-menu-wrap {
    visibility: hidden;
  }
  
  .bm-menu-wrap.open {
    visibility: visible;
  } */
/*  
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  
  .bm-cross {
    background: #bdc3c7;
  }
  
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  
  .bm-item-list {
    padding: 0.8em;
  }
  
  .bm-item {
    display: block;
    color: #bdc3c7;
  }*/
});