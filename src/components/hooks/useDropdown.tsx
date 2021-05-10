import React, { useState } from "react";
import { SelectProps } from "../Forms/Select/Select";
export function useDropdown(props: SelectProps) {
  const [dropdownIsOpen, setDropdown] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(props.itemsList[0]);
  const toggleDropdown = () => setDropdown(!dropdownIsOpen);
  const selectItem = (item: string) => {
    setSelected(item);
    setDropdown(false);
  };
  const exported: [boolean, () => void, string, (item: string) => void] = [
    dropdownIsOpen,
    toggleDropdown,
    selected,
    selectItem,
  ];
  return exported;
}
