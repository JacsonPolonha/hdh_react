
// src/components/HamburgerMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Estilos para o layout do cabeçalho
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0;
    font-size: 24px;
  }
`;

// Estilos para o ícone do hambúrguer
const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${({ open }) => (open ? "transparent" : "#333")};
  position: relative;
  transition: 0.3s ease;

  &::before,
  &::after {
    content: "";
    width: 30px;
    height: 3px;
    background-color: #333;
    position: absolute;
    transition: 0.3s ease;
  }

  &::before {
    top: ${({ open }) => (open ? "0" : "-10px")};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "none")};
  }

  &::after {
    top: ${({ open }) => (open ? "0" : "10px")};
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "none")};
  }
`;

// Estilos para o menu
const Menu = styled.ul`
  list-style: none;
  display: ${({ open }) => (open ? "block" : "none")};
  background-color: #f5f5f5;
  position: absolute;
  top: 50px;
  right: 0;
  width: 200px;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    color: #000;
    font-size: 1.2rem;

    &:last-child {
      border-bottom: none;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    position: static;
    flex-direction: row;
    width: auto;

    li {
      padding: 10px 20px;
      border-bottom: none;
    }
  }
`;

// Estilos para o container do menu
const MenuContainer = styled.div`
  position: relative;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer>
      <h1>HDH</h1>
      <MenuContainer>
        <HamburgerButton onClick={toggleMenu}>
          <HamburgerIcon open={open} />
        </HamburgerButton>
        <Menu open={open}>
        <Link to="/"><li>Home</li></Link>
        <Link to="about"><li>About</li></Link>
          {/* <li>Services</li> */}
          <li>Contact</li>
        </Menu>
      </MenuContainer>
    </HeaderContainer>
    
  );
};

export default HamburgerMenu;
