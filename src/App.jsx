import React from "react";
import FormInput from "./components/FormInput";
import "./styles.css";

export default function App() {
  // suppose what is passed inside the useState is the names of each input
  const [state, setState] = React.useState({
    userName: "",
    emaill: "",
    password: "",
    confirPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      label: "username",
      placeholder: "User Name",
      errorMessage: "It's Required",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",

      label: "email",
      placeholder: "Email",
      errorMessage: "Should be Valid Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",

      label: "birthday",
      placeholder: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",

      label: "Password",
      placeholder: "Password",
      errorMessage:
        "Password should have at least 8 chars, one capital letter, one small and one number",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: "confirPassword",
      type: "password",
      label: "confirm password",
      placeholder: "Password",
      errorMessage: "must be equal the entered password",
      pattern: state.password,
      required: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    // because we named the state of each state by the name of the input
    // we're gonna set the state by thier names to e.target.value
    // since we can access the name by e.target.name
    setState({ ...state, [e.target.name]: e.target.value });
  };

  console.log(state);

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        {inputs.map((input) => {
          // spreading all what inside input
          return (
            <>
              <FormInput
                key={input.id}
                {...input}
                value={state[input.name]}
                onChange={handleChange}
              />
            </>
          );
          //acts as  <FormInput key={input.id} name={input.name} email={input.email}/>;
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}
