import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  const submit = () => {
    alert(name + email + password);
    setName("");
  };

  useEffect(() => {
    name && email && password ? setButtonActive(true) : setButtonActive(false);
  }, [name, email, password]);

  return (
    <div className="form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name=""
        id=""
        placeholder="name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="password"
        name=""
        id=""
        placeholder="password"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="email"
        name=""
        id=""
        placeholder="email"
      />
      <button
        style={{ backgroundColor: !buttonActive ? "red" : "green" }}
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
}

export default Form;
