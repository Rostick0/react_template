import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function Input({ className, type = "text", ...other }) {
  const styleClassName = setClassName(className);

  return (
    <input className={styles.Input + styleClassName} type={type} {...other} />
  );
}
