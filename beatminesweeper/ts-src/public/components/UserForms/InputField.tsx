import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, size: _, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <TextField
      {...field}
      label={label}
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      error={!!error}
      helperText={error ?? " "}
      variant="outlined"
      size="small"
      fullWidth
      autoComplete="off"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "primary.main" },
          "&:hover fieldset": { borderColor: "primary.light" },
          "&.Mui-focused fieldset": { borderColor: "primary.main" },
        },
        "& .MuiInputLabel-root": { color: "text.secondary" },
        "& .MuiInputLabel-root.Mui-focused": { color: "primary.main" },
        "& .MuiInputBase-input": { color: "text.primary" },
        "& .MuiFormHelperText-root.Mui-error": { color: "error.main" },
      }}
    />
  );
};

export default InputField;
