import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import LoginJoinBtn from "./LoginJoinBtn";
import Input from "./Input";
import { LoginJoinContext } from "../../context/LoginJoin";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "../../../fbase";

type Props = {};

function JoinForm({}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPw, setcheckPw] = useState("");
  const [nickName, setNickName] = useState("");
  const [check, setCheck] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const { changeStatus } = useContext(LoginJoinContext);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "checkPW") setcheckPw(value);
    else if (name === "nickName") setNickName(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== checkPw) {
      setCheck("비밀번호가 다릅니다");
      return;
    } else {
      try {
        const data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } catch (err: any) {
        switch (err.code) {
          case "auth/email-already-in-use":
            setErrmsg("이미 가입되어 있는 계정입니다");
            break;
          case "auth/weak-password":
            setErrmsg("비밀번호는 6자리 이상이어야 합니다");
            break;
        }
      }
    }
    router.push("/aa");
  };
  return (
    <JForm onSubmit={handleSubmit}>
      <Input
        inputId={"email"}
        labelName={"아이디"}
        placed={"아이디를 입력해주세요"}
        handleOnChange={handleOnChange}
        value={email}
      />
      <Input
        inputId={"password"}
        labelName={"비밀번호"}
        placed={"비밀번호를 입력해주세요"}
        handleOnChange={handleOnChange}
        value={password}
      />
      <Input
        inputId={"checkPW"}
        labelName={"비밀번호 확인"}
        placed={"비밀번호를 입력해주세요"}
        handleOnChange={handleOnChange}
        value={checkPw}
      />
      <Input
        inputId={"nickName"}
        labelName={"닉네임"}
        placed={"닉네임을 입력해주세요"}
        handleOnChange={handleOnChange}
        value={nickName}
      />
      <LoginJoinBtn type={"submit"} value={"회원가입하기"} name={"join"} />
      <LoginJoinBtn
        value={"로그인 페이지로"}
        name={"login"}
        onClick={changeStatus}
        readonly={"readonly"}
      />
    </JForm>
  );
}

const JForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default JoinForm;
