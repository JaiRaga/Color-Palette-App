import React from "react";
import Palette from "./component/Palette";
import seedPalette from "./seedPalette";

function App() {
  return (
    <div className='App'>
      <Palette {...seedPalette[3]} />
    </div>
  );
}

export default App;
