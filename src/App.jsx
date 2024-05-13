import "./App.css";
import { Text } from "./components/Text";
import { Counter } from "./components/Counter";

import { useState } from "react";
import { SingleLight } from "./components/SingleLight";
import { Grid } from "./components/Grid";

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleIncrementRow = () => {
    setRows(rows + 1);
  };

  const handleDecrementRow = () => {
    if (rows <= 0) {
      return;
    }
    setRows(rows - 1);
  };

  const handleIncrementColumn = () => {
    if(columns >= 9){
      return
    }
    setColumns(columns + 1);
  };

  const handleDecrementColumn = () => {
    if (columns <= 0) {
      return;
    }
    setColumns(columns - 1);
  };

  const totalLights = rows * columns;
  const lights = Array.from({length: totalLights});

  return (
    <div>
      <nav className={"nav"}>
        <Text>{totalLights} bulbs</Text>
        <Counter
          text={"rows"}
          count={rows}
          onDecrement={handleDecrementRow}
          onIncrement={handleIncrementRow}
        />
        <Counter
          text={"columns"}
          count={columns}
          onDecrement={handleDecrementColumn}
          onIncrement={handleIncrementColumn}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, index)=>{
          return <SingleLight key={index}/>
        })}
      </Grid>
    </div>
  );
}

export default App;
