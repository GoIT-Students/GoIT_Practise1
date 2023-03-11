import styled from "styled-components";

export const InputContainer = styled.div`
  border-bottom: 2px solid #000;
  background-color: #fff;
`;

export const InputField = styled.input`
  background-color: transparent;
  border: none;
  padding: 10px;
  outline: none;
  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #fff inset !important;
  }
  &:-webkit-autofill:hover {
    box-shadow: 0 0 0 30px #fff inset !important;
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 30px #fff inset !important;
  }
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
`;
