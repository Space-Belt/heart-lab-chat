import React, { useContext } from "react";
import styled from "@emotion/styled";
import { LoginJoinContext } from "../../context/LoginJoin";
import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";

type Props = {};

function LoginJoinBox({}: Props) {
  const { ljCheck } = useContext(LoginJoinContext);
  return (
    <LoginJoinFormBox>
      {ljCheck === "login" ? <LoginForm /> : <JoinForm />}
    </LoginJoinFormBox>
  );
}

const LoginJoinFormBox = styled.div`
  width: 50%;
  background-color: #eeeeee;
`;

export default LoginJoinBox;
