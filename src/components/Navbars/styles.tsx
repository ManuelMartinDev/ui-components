import { shapedComponentStyles } from "../globalStyles/shapedComponents";
import { baseStyles } from "../globalStyles/base";
import { styled } from "../commonInterfaces/themes";
import { NavProps } from "./Nav";
import { cssifyObject } from "css-in-js-utils";
import { css } from "styled-components";
export const Wrapper = styled.div<NavProps>`
  ${({ sticky }) =>
    sticky
      ? css`
          position: sticky;
          top: 2px;
        `
      : css`
          position: relative;
        `}
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 64px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  ${shapedComponentStyles};
  ${baseStyles};
`;

export const Logo = styled.img<NavProps>`
  ${({ triggerOn, theme }) => `@media(min-width:${theme.breakpoints.tablet}) { 
	${cssifyObject({ marginLeft: "20px" })}
  }`}
`;

export const Hambuger = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  cursor: pointer;
`;

export const UserDropdown = styled.div`
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;
  right: 10px;
  cursor: pointer;
`;

export const Dropdown = styled.div<NavProps>`
  position: absolute;
  top: 40px;
  width: 192px;
  min-height: 115px;
  background-color: white;
  transform-origin: top center;
  transform: translateX(-160px);
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-radius: 10px;
  padding: 0;
  overflow: hidden;
  display: ${({ dropdownIsOpen }) => (dropdownIsOpen ? "flex" : "none")};
  z-index: 10;
`;

export const DropdownList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  padding-top: 4px;
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  overflow: hidden;
  margin-top: 10px;
`;

export const DropdownItem = styled.li`
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: rgba(243, 244, 246, 1);
  }
`;

export const UserPicture = styled.img`
  width: 100%;
  height: 100;
  border-radius: 50%;
`;

export const MobileMenu = styled.div<NavProps>`
  background-color: ${({ menuColor }) => menuColor};
  height: 300px;
  width: 100%;
  position: absolute;
  z-index: 1;
  max-height: ${({ menuIsOpen }) => (menuIsOpen ? "1080px" : 0)};
  transition: max-height 200ms ease-in-out;
  overflow: hidden;
  box-sizing: border-box;
`;

export const LinksList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 10px;
`;

export const LinkListItem = styled.li`
  width: calc(100% - 20px);
  color: white;
  box-sizing: border-box;
  padding: 10px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-family: ---apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  margin: 0 14px 0 14px;
`;

export const FullLinkList = styled.ul`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const FullLinkListItem = styled.li<NavProps>`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 10px 5px 10px;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: ${({ navLinksHoverBg }) =>
      navLinksHoverBg && navLinksHoverBg};
    transition: 200ms ease-in-out;
  }
  border-radius: 5px;
`;
