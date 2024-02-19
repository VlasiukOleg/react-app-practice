import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";

export const FormUser = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    padding: 5px 20px;
    background-color: skyblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;

  input {
    margin-left: 10px;
  }
`;