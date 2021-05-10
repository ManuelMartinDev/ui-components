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
  border: 2px solid red;
  border-bottom: 0;
  border-bottom: ${({ dropdownIsOpen }) =>
    dropdownIsOpen ? "0" : "2px solid red"};
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: flex-end;
`;

export const SelectList = styled.ul<SelectProps>`
  width: 100%;
  border: 2px solid red;
  border-top: 0;
  border-top: ${({ dropdownIsOpen }) =>
    dropdownIsOpen ? "0" : "2px solid red"};
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  position: absolute;
  top: 30px;
  padding-top: 10px;
`;
export const SelectItem = styled.li`
  width: 100%;
  height: 30px;
  border: 2px solid pink;
  box-sizing: border-box;
  margin: 0;
`;
