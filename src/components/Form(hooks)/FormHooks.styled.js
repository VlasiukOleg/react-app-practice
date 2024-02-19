import styled from "styled-components";

export const FormUser = styled.form`
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

  button:disabled {
    background-color: gray;
    cursor: default;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;

  input {
    margin-left: 10px;
  }
`;
