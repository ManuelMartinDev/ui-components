import React, { useState } from "react";

import { shapedComponentsProps } from "../commonInterfaces/shapedComponents";
import { ThemeProvider } from "styled-components";
import { theme } from "../themes";
import Face from "../../assets/face.jpeg";
import {
  Wrapper,
  Navbar,
  Logo,
  Hambuger,
  UserDropdown,
  Dropdown,
  DropdownList,
  DropdownItem,
  UserPicture,
  MobileMenu,
  LinksList,
  LinkListItem,
  FullLinkList,
  FullLinkListItem,
} from "./styles";
import Svg from "../../assets/fastify-icon.svg";
import HambugerSvg from "../../assets/menu.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";
export interface NavProps extends shapedComponentsProps {
  logo?: string;
  mobileLogo: string;
  direction?: string;
  dropdownIsOpen?: boolean;
  userLinks?: string[] | React.Component[] | React.FC[];
  userPicture?: React.FC | React.Component | React.FC[] | React.Component[];
  menuColor: string;
  navLinks: JSX.Element[] | React.FC[] | React.Component[] | string[];
  menuIsOpen?: boolean;
  triggerOn: "tablet" | "desktop";
}
export const Nav: React.FC<NavProps> = (props) => {
  const { userPicture, navLinks, triggerOn, theme, logo, mobileLogo } = props;
  const [dropdownIsOpen, setDropdown] = useState<boolean>(false);
  const [menuIsOpen, setMenu] = useState<boolean>(false);
  const closeDropdown = (e: React.MouseEvent) => {
    setDropdown(false);
  };
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropdown(!dropdownIsOpen);
  };
  const toggleMenu = () => setMenu(!menuIsOpen);
  const match = useMediaQuery(theme.breakpoints[triggerOn]);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar onClick={closeDropdown} {...props}>
          {match && (
            <Hambuger
              onClick={toggleMenu}
              alt="menu"
              src={HambugerSvg}
            ></Hambuger>
          )}
          <Logo {...props} alt="logo" src={match ? mobileLogo ?? logo : logo} />
          {!match && (
            <FullLinkList>
              {props.navLinks.map((link: any) => (
                <FullLinkListItem>{link}</FullLinkListItem>
              ))}
            </FullLinkList>
          )}
          {userPicture ? (
            <UserDropdown onClick={toggleDropdown}>
              <UserPicture src={Face} />
              <Dropdown
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                {...props}
                dropdownIsOpen={dropdownIsOpen}
              >
                <DropdownList>
                  {props.userLinks?.map((link) => (
                    <DropdownItem>{link}</DropdownItem>
                  ))}
                </DropdownList>
              </Dropdown>
            </UserDropdown>
          ) : (
            <span></span>
          )}
        </Navbar>
        <MobileMenu {...props} menuIsOpen={menuIsOpen}>
          <LinksList>
            {navLinks.map((link: any) => (
              <LinkListItem>{link}</LinkListItem>
            ))}
          </LinksList>
        </MobileMenu>
      </Wrapper>
    </ThemeProvider>
  );
};

Nav.defaultProps = {
  theme,
  userLinks: ["Home", "Shop"],
  userPicture: () => <img alt="face" src={Face}></img>,
  menuColor: theme.colors.dark,
  navLinks: ["Link1", "Link2", "Link3", "Link4"],
  triggerOn: "tablet",
  logo: Svg,
};
