import React from "react";
import styled from "@emotion/styled";

type Props = {
  type?: string;
  value: string;
  name: string;
  readonly?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

function LoginJoinBtn({ type, value, name, onClick, readonly }: Props) {
  return (
    <Btn
      type={type}
      value={value}
      name={name}
      onClick={onClick}
      readOnly={readonly ? true : false}
    />
  );
}

const Btn = styled.input`
  width: 100%;
  line-height: 5vh;
  text-align: center;
  background-color: aliceblue;
  margin-bottom: 10px;
  cursor: pointer;
`;

export default LoginJoinBtn;
