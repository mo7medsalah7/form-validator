import React from "react";
import "./form-input.css";

export default function FormInput(props) {
  const [focused, setFocused] = React.useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input_wrapper">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="error">{errorMessage}</span>
    </div>
  );
}
