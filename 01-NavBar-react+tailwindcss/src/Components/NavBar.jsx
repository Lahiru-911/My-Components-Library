import  { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  NavbarMenuItem,
} from "@nextui-org/react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    "Home",
    "About",
    "Products",
    "Entertainment",
    "Services",
    "Contacts",
  ];

const NavBar = () => {
  return (
    <>
    
    </>
  )
}

export default NavBar; 