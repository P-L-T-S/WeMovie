import styled from "styled-components";

export const CartWrapper = styled.aside`
  background-color: #ffffff;
  color: #2f2e41;

  margin: 32px;
  padding: 16px;

  border-radius: 4px;

  .header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    color: #999999;
    font-weight: bold;
  }

  .separator {
    border-top: 1px solid #999;
    margin: 16px 0;
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: bold;

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

    div,
    &.mobile div {
      display: flex;
      align-items: center;

      gap: 16px;

      span {
        color: #999;
      }
    }

    &.mobile {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      a {
        width: 100%;
      }
    }
  }
`;
