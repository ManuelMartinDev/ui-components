import styled from "styled-components";
import { SelectProps } from "./Select";
export const Container = styled.div`
  width: 400px;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  position: relative;
`;

export const Select = styled.div<SelectProps>`
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-bottom: 0;
  border-bottom: ${({ dropdownIsOpen }) =>
    dropdownIsOpen ? 0 : "2px solid rgba(0,0,0,0.4)"};
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  border-radius: ${({ borderRadius }) => borderRadius};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const SelectList = styled.ul<SelectProps>`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-top: 0;
  border-top: ${({ dropdownIsOpen }) =>
    dropdownIsOpen ? "0" : "2px solid rgba(0,0,0,0.4)"};
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  position: absolute;
  top: 40px;
  padding-top: ${({ dropdownIsOpen }) => (dropdownIsOpen ? "10px" : "0")};
  overflow-y: hidden;
  border-bottom: ${({ dropdownIsOpen }) =>
    dropdownIsOpen ? "2px solid rgba(0,0,0,0.4)" : "0"};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;
export const SelectItem = styled.li`
  font-family: ---apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  height: 30px;
  border: 0;
  border-top: 2px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  margin: 0;
  padding: 20px 0 20px 10px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(242, 242, 242);
  }
  cursor: pointer;
`;

export const Span = styled.span`
  margin-left: 10px;
`;

export const Opener = styled.span`
  transform: rotate(90deg);
`;
