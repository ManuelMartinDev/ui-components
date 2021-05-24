import React from "react";
import {
  Container,
  Select,
  SelectList,
  SelectItem,
  Span,
  Opener,
} from "./Styles";
import { shapedComponentsProps } from "../../commonInterfaces/shapedComponents";
import { DropdownItem } from "../../hooks/useDropdown";
import { uuid } from "uuidv4";

export interface SelectProps extends shapedComponentsProps {
  itemsList: DropdownItem[];
  opener?: string | React.FC | React.Component | React.ReactElement;
  dropdownIsOpen: boolean;
  toggleDropdown: () => void;
  selected: { id: string; display: string };
  selectItem: (item: DropdownItem) => void;
  placeholder?: string;
  borderRadius?: string;
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
          <Span>{selected ? selected.display : props.placeholder}</Span>
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
  opener: <Opener>{">"}</Opener>,
  placeholder: "Edit this message using placeholder prop",
};
