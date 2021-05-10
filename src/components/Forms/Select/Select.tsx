import React, { useState } from "react";
import { Container, Select, SelectList, SelectItem, Span } from "./Styles";
import { shapedComponentsProps } from "../../commonInterfaces/shapedComponents";
import { uuid } from "uuidv4";
export interface SelectProps extends shapedComponentsProps {
  dropdownIsOpen?: boolean;
  itemsList: string[];
}
export const SelectDropdown: React.FC<SelectProps> = (props) => {
  const [dropdownIsOpen, toggleDropdown] = useState<boolean>(false);
  const { itemsList } = props;
  return (
    <Container>
      <Select {...props} dropdownIsOpen={dropdownIsOpen}>
        {React.isValidElement(itemsList[0]) ? (
          itemsList[0]
        ) : (
          <Span>{itemsList[0]}</Span>
        )}
        <span onClick={() => toggleDropdown(!dropdownIsOpen)}>open me</span>
      </Select>
      {dropdownIsOpen && (
        <SelectList {...props} dropdownIsOpen={dropdownIsOpen}>
          {itemsList.map((item) => (
            <SelectItem key={uuid()}>{item}</SelectItem>
          ))}
        </SelectList>
      )}
    </Container>
  );
};

SelectDropdown.defaultProps = {
  itemsList: new Array(10).fill(1).map((e, i) => (e = `Elemento ${i}`)),
};
