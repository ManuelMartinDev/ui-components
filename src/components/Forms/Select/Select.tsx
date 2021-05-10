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

export interface SelectProps extends shapedComponentsProps {
  itemsList: [{ id: string; display: string }];
  opener?: string | React.FC | React.Component | React.ReactElement;
  dropdownIsOpen: boolean;
  toggleDropdown: () => void;
  selected: { id: string; display: string };
  selectItem: (item: { id: string; display: string }) => void;
}
export const SelectDropdown: React.FC<SelectProps> = (props) => {
  const { dropdownIsOpen, toggleDropdown, selected, selectItem } = props;
  const { itemsList } = props;
  return (
    <Container>
      <Select {...props} dropdownIsOpen={dropdownIsOpen}>
        {React.isValidElement(itemsList[0]) ? (
          selected
        ) : (
          <Span>{selected.display}</Span>
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
              {item.display}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </Container>
  );
};

SelectDropdown.defaultProps = {
  itemsList: [
    {
      id: "1",
      display: "Elemento 2",
    },
  ],
  opener: <Opener>{">"}</Opener>,
};
