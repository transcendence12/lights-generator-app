import { Text } from "./Text";
import { IconDecrement } from "./icons/IconDecrement";
import { IconIncrement } from "./icons/IconIncrement";

import styles from "./Counter.module.css";

export const Counter = (props) => {


  return (
    <div className={styles.wrapper}>
      <Text>
        {props.count} {props.text}
      </Text>
      <nav>
        <IconDecrement onClick={props.onDecrement} />
        <IconIncrement onClick={props.onIncrement} />
      </nav>
    </div>
  );
};
