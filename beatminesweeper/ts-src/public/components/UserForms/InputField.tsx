import React from "react";
import { useField } from "formik";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <span>
      {/* <label htmlFor={field.name}>{label}</label> */}
      <input
        {...field}
        {...props}
        autoComplete='off'
        type="text"
        id={field.name}
        placeholder={props.placeholder}
      />

      <div className="error-message-container">
        <h5 className="form-error-message">{error ? error : null}</h5>
      </div>
    </span>
  );
};

export default InputField;
