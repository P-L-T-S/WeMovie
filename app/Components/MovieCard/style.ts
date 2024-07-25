import styled from "styled-components";

export const CardWrapper = styled.section`
  background: #ffffff;
  color: #333333;

  display: grid;
  justify-items: center;

  height: 324px;

  padding: 16px;

  border-radius: 8px;
  text-align: center;

  button {
    background-color: #009edd;
    color: #ffffff;

    border: none;
    outline: none;

    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    width: 306px;
    height: 40px;

    &.added{
      background-color: #039B00;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
