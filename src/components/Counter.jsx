import { Text } from "./Text";
import { IconDecrement } from "./icons/IconDecrement";
import { IconIncrement } from "./icons/IconIncrement";

import styles from "./Counter.module.css";
import { useState } from "react";

export const Counter = (props) => {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value <= 0) {
            return
        }
        setValue(value - 1)
    }

  return (
    <div className={styles.wrapper}>
      <Text>
        {value} {props.text}
      </Text>
      <nav>
        <IconDecrement onClick={handleDecrement} />
        <IconIncrement onClick={handleIncrement} />
      </nav>
    </div>
  );
};
