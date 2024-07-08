import styles from "./style.module.scss";
import stylesInput from "../../ui/Input/style.module.scss";
import Control from "../../ui/Control";
import { FC, ReactNode } from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

interface InputFormProps {
  className?: string;
  label?: ReactNode;
  error?: ReactNode;
  register: UseFormRegister<FieldValues>;
  name: string;
  options?: RegisterOptions;
  icon?: ReactNode;
}

const InputForm: FC<InputFormProps> = ({
  className,
  label,
  error,
  register,
  name = "",
  options = {},
  icon,
  ...other
}) => {
  return (
    <Control className={className} label={label} error={error}>
      <span className={styles.field}>
        <input
          className={stylesInput.input}
          {...register(name, options)}
          {...other}
        />
        {icon && <div className={styles.field__icon}>{icon}</div>}
      </span>
    </Control>
  );
};

export default InputForm;
