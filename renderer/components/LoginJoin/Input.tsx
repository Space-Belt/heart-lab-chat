import React from "react";
import styled from "@emotion/styled";
type Props = {
  inputId: string;
  labelName: string;
  placed: string;
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ inputId, labelName, placed, value, handleOnChange }: Props) {
  return (
    <Box>
      <label htmlFor={inputId}>{labelName}</label>
      <input
        id={inputId}
        name={inputId}
        placeholder={placed}
        type="text"
        value={value}
        onChange={handleOnChange}
        required
      />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 4vh;
    height: 4vh;
    font-weight: 700;
    width: 20%;
  }
  & input {
    margin-left: 25px;
    border: 1px solid #eeeeee;
    height: 4vh;
    width: 60%;
  }
`;

export default Input;
