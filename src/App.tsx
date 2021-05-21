import React from "react";

import { useDropdown } from "./components/hooks/useDropdown";
import { SelectDropdown } from "./components/Forms/Select/Select";
function App() {
  const [dropdownIsOpen, toggleDropdown, selected, selectItem] = useDropdown();
  return (
    <div className="App">
      <SelectDropdown
        itemsList={[
          {
            id: "12",
            display: "Elemento 2",
          },
          {
            id: "15",
            display: "Elemento 4",
          },
        ]}
        dropdownIsOpen={dropdownIsOpen}
        toggleDropdown={toggleDropdown}
        selected={selected}
        selectItem={selectItem}
        borderRadius="5px"
      />
    </div>
  );
}

export default App;
