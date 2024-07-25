import styled from "styled-components";

export const LoadSpinerWrapper = styled.main`
  margin: 0 5%;

  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;

  border-radius: 4px;

  height: calc(100% - 150px);

  img {
    color: red !important;
    border: blue;
  }

  div {
    position: absolute;

    height: 150px;
    width: 150px;
    border-radius: 50%;

    animation: loaderImprovisado infinite 100ms linear;

    animation-duration: 1s;

    &:first-child {
      border-top: 5px solid #333;
      border-right: 5px solid #333;
    }

    &:last-child {
      border-bottom: 5px solid white;
      border-left: 5px solid white;
    }
  }

  @keyframes loaderImprovisado {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(90deg);
    }
    75% {
      transform: rotate(135deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  /* telas pequenas-medias */
  @media only screen and (min-width: 750px) {
    & {
      padding: 0 10%;
    }
  }
`;
