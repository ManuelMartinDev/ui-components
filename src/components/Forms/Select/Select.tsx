import React, { useState } from "react";
import {
  Container,
  Select,
  SelectList,
  SelectItem,
  Span,
  Opener,
} from "./Styles";
import { shapedComponentsProps } from "../../commonInterfaces/shapedComponents";
import { uuid } from "uuidv4";
import { useDropdown } from "../../hooks/useDropdown";
export interface SelectProps extends shapedComponentsProps {
  dropdownIsOpen?: boolean;
  itemsList: string[];
  opener: string | React.FC | React.Component | React.ReactElement;
}
export const SelectDropdown: React.FC<SelectProps> = (props) => {
  const [dropdownIsOpen, toggleDropdown, selected, selectItem] = useDropdown(
    props
  );
  const { itemsList } = props;
  return (
    <Container>
      <Select {...props} dropdownIsOpen={dropdownIsOpen}>
        {React.isValidElement(itemsList[0]) ? (
          selected
        ) : (
          <Span>{selected}</Span>
        )}
        <Opener onClick={toggleDropdown}>{props.opener}</Opener>
      </Select>
      {dropdownIsOpen && (
        <SelectList {...props} dropdownIsOpen={dropdownIsOpen}>
          {itemsList.map((item) => (
            <SelectItem
              onClick={() => {
                selectItem(item);
              }}
              key={uuid()}
            >
              {item}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </Container>
  );
};

SelectDropdown.defaultProps = {
  itemsList: new Array(10).fill(1).map((e, i) => (e = `Elemento ${i}`)),
  opener: <Opener>{">"}</Opener>,
};
