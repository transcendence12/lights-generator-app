import "./App.css";
import { Counter } from "./components/Counter";
import { Text } from "./components/Text";

import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    console.log("value increment", value)
      setValue(value + 1);
  };

  const handleDecrement = () => {
    console.log("value decrement", value)
      if (value <= 0) {
          return
      }
      setValue(value - 1)
  }
  return (
    <div>
      <nav className={"nav"}>
        <Text>0 bulbs</Text>
        <Counter text={"rows"} count={value} onDecrement={handleDecrement}/>
        <Counter text={"columns"} count={value} onIncrement={handleIncrement}/>
      </nav>
    </div>
  );
}

export default App;
