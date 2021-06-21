import React, { useState } from "react";

import { shapedComponentsProps } from "../commonInterfaces/shapedComponents";
import { ThemeProvider } from "styled-components";
import { theme } from "../themes";
import { uuid } from "uuidv4";
import {
  Wrapper,
  Navbar,
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

import HambugerSvg from "../../assets/menu.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";
export interface NavProps extends shapedComponentsProps {
  logo?: React.ReactChild;
  direction?: string;
  dropdownIsOpen?: boolean;
  userLinks?: string[] | React.ReactChild[];
  userPictureSrc?: string;
  menuColor: string;
  navLinks: JSX.Element[] | React.FC[] | React.Component[] | string[];
  menuIsOpen?: boolean;
  triggerOn: "tablet" | "desktop";
  sticky?: boolean;
  navLinksHoverBg?: string;
}
export const Nav: React.FC<NavProps> = (props) => {
  const { navLinks, triggerOn, theme, logo } = props;
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
  const match = useMediaQuery(theme!.breakpoints[triggerOn]);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper {...props}>
        <Navbar className="navbar" onClick={closeDropdown} {...props}>
          {match && (
            <Hambuger
              onClick={toggleMenu}
              alt="menu"
              src={HambugerSvg}
            ></Hambuger>
          )}
          {logo && logo}
          {!match && (
            <FullLinkList className="navbar__full-linklist">
              {props.navLinks.map((link: any) => (
                <FullLinkListItem
                  {...props}
                  key={uuid()}
                  className="navbar__full-linklist__item"
                >
                  {link}
                </FullLinkListItem>
              ))}
            </FullLinkList>
          )}
          {props.userPictureSrc ? (
            <UserDropdown onClick={toggleDropdown}>
              {
                <UserPicture
                  className="navbar__user-picture"
                  src={props.userPictureSrc}
                />
              }
              <Dropdown
                className="navbar__dropdown"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                {...props}
                dropdownIsOpen={dropdownIsOpen}
              >
                <DropdownList className="navbar__dropdown__list">
                  {props.userLinks?.map((link: any) => (
                    <DropdownItem
                      key={uuid()}
                      className="navbar__dropdown__list-item"
                    >
                      {link}
                    </DropdownItem>
                  ))}
                </DropdownList>
              </Dropdown>
            </UserDropdown>
          ) : (
            <span></span>
          )}
        </Navbar>
        <MobileMenu
          className="navbar__mobile-menu"
          {...props}
          menuIsOpen={menuIsOpen}
        >
          <LinksList className="navbar__mobile-menu__list">
            {navLinks.map((link: any) => (
              <LinkListItem
                key={uuid()}
                className="navbar__mobile-menu__list__item"
              >
                {link}
              </LinkListItem>
            ))}
          </LinksList>
        </MobileMenu>
      </Wrapper>
    </ThemeProvider>
  );
};

Nav.defaultProps = {
  theme,
  menuColor: theme.colors.dark,
  triggerOn: "tablet",
};
