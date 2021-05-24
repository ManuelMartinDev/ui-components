import React from "react";
import { SelectDropdown, SelectProps } from "./Select";
import { useDropdown } from "../../hooks/useDropdown";
export const SelectSample: React.FC<SelectProps> = (props) => {
  const [dropdownIsOpen, toggleDropdown, selected, selectItem] = useDropdown();
  return (
    <SelectDropdown
      {...props}
      dropdownIsOpen={dropdownIsOpen}
      toggleDropdown={toggleDropdown}
      selected={selected}
      selectItem={selectItem}
    />
  );
};
