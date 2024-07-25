import styled from "styled-components";

export const OrderedWrapper = styled.main`
  background-color: #ffffff;
  color: #000;

  margin: 0 5%;

  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;

  gap: 20px;

  border-radius: 4px;

  height: calc(100% - 150px);

  a {
    background-color: #009edd;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;

    border-radius: 4px;

    width: 306px;
    height: 40px;

    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }

  /* telas pequenas-medias */
  @media only screen and (min-width: 750px) {
    & {
      padding: 0 10%;
    }
  }
`;
