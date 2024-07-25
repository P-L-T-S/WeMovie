import styled from "styled-components";

export const MovieOnCartCardMobileWrapper = styled.section`
  display: flex;

  .product {
    display: flex;
    flex: 1;

    font-weight: bold;

    gap: 16px;

    & > div {
      display: grid;
      align-items: center;

      .inputWrapper {
        display: flex;
        align-items: center;

        gap: 8px;

        button {
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
          width: 60px;

          text-align: center;

          background-color: white;
          color: #2f2e41;

          border: 1px solid #d9d9d9;
          outline: none;
          border-radius: 4px;
        }
      }
    }
  }

  .subtotal {
    display: grid;
    font-weight: bold;

    p {
      display: flex;
      align-items: center;

      gap: 12px;
    }
    span {
      color: #999999;
    }
  }
`;
