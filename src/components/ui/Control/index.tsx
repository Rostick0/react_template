import styles from "./style.module.scss";
import { setClassName } from "../../../app/utils/class";
import { FC, memo, ReactNode } from "react";
import { ErrorMessage } from "@hookform/error-message";

interface ElemProps {
  children: ReactNode;
  styleClassName: string;
  isDiv: boolean;
}

const Elem: FC<ElemProps> = memo(
  ({ children, styleClassName, isDiv, ...other }) =>
    isDiv ? (
      <div className={styles.control + styleClassName} {...other}>
        {children}
      </div>
    ) : (
      <label className={styles.control + styleClassName} {...other}>
        {children}
      </label>
    )
);

interface ControlProps {
  className?: string;
  label?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
  isDiv?: Boolean;
}

const Control: FC<ControlProps> = ({
  className,
  label,
  error,
  children,
  isDiv = false,
  ...other
}) => {
  const styleClassName = setClassName(className);

  return (
    <Elem styleClassName={styleClassName} isDiv {...other}>
      {label && <span className={styles.control__title}>{label}</span>}
      {children}
      {error && <span className={styles.control__error}>{error}</span>}
    </Elem>
  );
};

export default Control;
