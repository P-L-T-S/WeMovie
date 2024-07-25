import styled from "styled-components";

export const HomeWrapper = styled.main`
  text-align: center;

  padding: 0 5%;

  & > section {
    display: grid;

    grid-template-columns: repeat(1, 1fr);

    justify-content: center;

    gap: 16px;
  }

  /* telas pequenas-medias */
  @media only screen and (min-width: 750px) {
    & {
      padding: 0 10%;
    }
    & > section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* telas grandes */
  @media only screen and (min-width: 1100px) {
    & > section {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
