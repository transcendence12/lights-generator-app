import "./App.css";
import { Text } from "./components/Text";
import { Counter } from "./components/Counter";

import { useState } from 'react';
import { SingleLight } from "./components/SingleLight";

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
      <SingleLight />
    </div>
  );
}

export default App;
