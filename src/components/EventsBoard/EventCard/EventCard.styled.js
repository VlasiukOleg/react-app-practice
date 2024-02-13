import styled from "styled-components";

export const EventItem = styled.li`
  position: relative;
  outline: 2px dashed skyblue;
  padding: 10px;
  border-radius: 4px;
  flex-basis: calc((100% - 40px) / 4);
`;

export const EventInfo = styled.p`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    color: grey;
  }
`;

export const Chip = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  color: white;
  padding: 5px;
  border-radius: 4px;

  background-color: ${({ type }) => {
    switch (type) {
      case "free":
        return " rgb(22, 146, 22)";
      case "paid":
        return "rgb(10, 114, 156)";

      default:
        return "black";
    }
  }};
`;
