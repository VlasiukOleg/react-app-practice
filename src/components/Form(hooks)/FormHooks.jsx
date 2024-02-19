import React, { useEffect, useState } from "react";

import { FormUser, FormLabel } from "./FormHooks.styled";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const FormHooks = () => {
  const [userName, setUserName] = useLocalStorage("userName", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("middle");
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "experience":
        setExperience(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setExperience("middle");
    setAgree(false);
  };

  const handleAgreeChange = (e) => {
    setAgree(!agree);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userName,
      email,
      password,
      experience,
    };
    console.log(data);
    resetForm();
  };

  return (
    <FormUser onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <input
          type="text"
          onChange={handleChange}
          value={userName}
          name="userName"
        />
      </FormLabel>
      <FormLabel>
        Email
        <input
          type="email"
          onChange={handleChange}
          value={email}
          name="email"
        />
      </FormLabel>
      <FormLabel>
        Password
        <input
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
        />
      </FormLabel>
      <FormLabel>
        <input
          type="radio"
          name="experience"
          value="junior"
          onChange={handleChange}
          checked={experience === "junior"}
        />
        Junior
      </FormLabel>
      <FormLabel>
        <input
          type="radio"
          name="experience"
          value="middle"
          onChange={handleChange}
          checked={experience === "middle"}
        />
        Middle
      </FormLabel>
      <FormLabel>
        <input
          type="radio"
          name="experience"
          onChange={handleChange}
          value="senior"
          checked={experience === "senior"}
        />
        Senior
      </FormLabel>
      <FormLabel>
        <input
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={handleAgreeChange}
        />
        I agree with all rules
      </FormLabel>
      <button type="submit" disabled={!agree}>
        Submit
      </button>
    </FormUser>
  );
};
