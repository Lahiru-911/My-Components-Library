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

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="font-inter "
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/*Logo for Mobile */}
      <NavbarContent className="sm:hidden pr-6" justify="center">
        <NavbarBrand>
          <Link href="/" passHref>
            <img
              src="https://www.svgrepo.com/show/475695/windowsphone-color.svg"
              alt="Residue Logo"
              className="h-5 cursor-pointer"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/*Logo for Desktop */}
      <NavbarBrand className="hidden sm:flex">
        <Link href="/" passHref>
          <img
            src="https://www.svgrepo.com/show/475695/windowsphone-color.svg"
            alt="Residue Logo"
            className="h-5 sm:h-4 md:h-5 lg:h-7 xl:h-8 cursor-pointer"
          />
        </Link>
      </NavbarBrand>

      {/* Desktop Menu Items */}
      <NavbarContent className="hidden sm:flex gap-4 sm:gap-4 md:gap-5 lg:gap-8 xl:gap-14 2xl:gap-16" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href="#"
              onClick={() => setActiveItem(item)}
              className={`${
                activeItem === item
                  ? "text-[#0081FB] font-bold"
                  : "text-gray-600"
              } hover:text-[#0081FB] transition-colors duration-300 text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-xl`} // Adjusted font sizes
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Button */}
      <NavbarContent justify="end">
        <NavbarItem>
          <button className="relative p-1 rounded-full bg-white text-[#0081FB] isolation-auto z-10 border-2 border-[#0081FB] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#0081FB] before:transition-all before:duration-700 before:hover:w-full before:z-[-1] hover:text-white before:hover:rounded-full before:rounded-full overflow-hidden transition-all duration-500 ease-in-out text-xs sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-base font-inter font-normal">
            Button Here
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Items */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${
                activeItem === item
                  ? "font-bold text-[#0081FB]"
                  : "text-gray-600"
              } text-base sm:text-lg`} // Active item style for mobile menu
              href="#"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              onClick={() => setActiveItem(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
