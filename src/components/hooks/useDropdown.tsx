import React, { useState } from "react";
import { SelectProps } from "../Forms/Select/Select";
export function useDropdown(itemsList: [{ id: string; display: string }]) {
  const [dropdownIsOpen, setDropdown] = useState<boolean>(false);
  const [selected, setSelected] = useState<{ id: string; display: string }>(
    itemsList[0]
  );
  const toggleDropdown = () => setDropdown(!dropdownIsOpen);
  const selectItem = (item: { id: string; display: string }) => {
    setSelected(item);
    setDropdown(false);
  };
  const exported: [
    boolean,
    () => void,
    { id: string; display: string },
    (item: { id: string; display: string }) => void
  ] = [dropdownIsOpen, toggleDropdown, selected, selectItem];
  return exported;
}
