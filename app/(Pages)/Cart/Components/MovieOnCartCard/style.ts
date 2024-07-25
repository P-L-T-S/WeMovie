import styled from "styled-components";

export const MovieOnCartCardWrapper = styled.section`
  background-color: white;
  color: #2f2e41;
  padding: 16px 0;

    div.row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

    .product {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 16px;

      p {
        display: grid;
        gap: 12px;
        font-weight: bold;
      }
    }

    .inputWrapper {
      display: flex;
      align-items: center;

      gap: 8px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: bold;

        width: 18px;
        height: 18px;

        border-radius: 50%;

        background: white;
        color: #009edd;

        outline: 2px solid #009edd;
        border: none;
      }

      input {
        width: 62px;
        padding: 8px 16px;

        text-align: center;

        background-color: white;
        color: #2f2e41;

        border: 1px solid #d9d9d9;
        outline: none;
        border-radius: 4px;
      }
    }

    & > p {
      display: grid;
      align-items: center;

      &:last-child {
        justify-content: end;
      }
    }
  }
`;
