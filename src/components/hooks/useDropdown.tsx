import React, { useState } from "react";
import { SelectProps } from "../Forms/Select/Select";

export interface DropdownItem {
  id: string;
  display: string;
}
export function useDropdown() {
  const [dropdownIsOpen, setDropdown] = useState<boolean>(false);
  const [selected, setSelected] = useState<DropdownItem>();
  const toggleDropdown = () => setDropdown(!dropdownIsOpen);
  const selectItem = (item: DropdownItem) => {
    item && setSelected(item);
    setDropdown(false);
  };
  const exported: [
    boolean,
    () => void,
    DropdownItem,
    (item: DropdownItem) => void
  ] = [dropdownIsOpen, toggleDropdown, selected!, selectItem];
  return exported;
}
