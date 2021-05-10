import React from "react";

import { useDropdown } from "./components/hooks/useDropdown";
import { SelectDropdown } from "./components/Forms/Select/Select";
function App() {
  const [dropdownIsOpen, toggleDropdown, selected, selectItem] = useDropdown([
    {
      id: "1",
      display: "Elemento 2",
    },
  ]);
  return (
    <div className="App">
      <SelectDropdown
        itemsList={[
          {
            id: "12",
            display: "Elemento 2",
          },
        ]}
        dropdownIsOpen={dropdownIsOpen}
        toggleDropdown={toggleDropdown}
        selected={selected}
        selectItem={selectItem}
      />
    </div>
  );
}

export default App;
