import styled from "styled-components";

export const CounterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const CounterValue = styled.span`
  font-size: 30px;
  margin-bottom: 15px;
`;

export const CounterControls = styled.div`
  button {
    padding: 10px 20px;
    margin-right: 10px;
    background-color: skyblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
  }
`;
