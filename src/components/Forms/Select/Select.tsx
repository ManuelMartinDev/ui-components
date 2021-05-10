import React, { useState } from "react";
import { Container, Select, SelectList, SelectItem } from "./Styles";
import { shapedComponentsProps } from "../../commonInterfaces/shapedComponents";
import { uuid } from "uuidv4";
export interface SelectProps extends shapedComponentsProps {
  dropdownIsOpen?: boolean;
}
export const SelectDropdown: React.FC<SelectProps> = (props) => {
  const [itemsList] = useState<string[]>(
    new Array(10).fill(1).map((e, i) => (e = `Elemento ${i}`))
  );
  const [dropdownIsOpen, toggleDropdown] = useState<boolean>(true);
  return (
    <Container>
      <Select dropdownIsOpen={dropdownIsOpen} {...props}>
        <span onClick={() => toggleDropdown(!dropdownIsOpen)}>open me</span>
      </Select>
      {dropdownIsOpen && (
        <SelectList dropdownIsOpen={dropdownIsOpen} {...props}>
          {itemsList.map((item) => (
            <SelectItem key={uuid()}>{item}</SelectItem>
          ))}
        </SelectList>
      )}
    </Container>
  );
};
