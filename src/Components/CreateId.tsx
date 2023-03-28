import styled from "styled-components";
import { useState } from "react";
import useInput from "./customhook/useInput";
import handleCreateId from "../FireBase/handleCreateId";

const CreateIdForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80%;
  .input-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25%;
    margin-bottom: 10px;
    label {
      font-size: 1.5em;
    }
    input {
      height: 2em;
    }
    .coincide,
    .invalid {
      color: red;
    }
  }
  .submit {
    width: 50%;
    height: 10%;
    font-size: 1.5em;
  }
`;

const CreateId = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [coincide, setCoincide] = useState(true);
  const inputId = useInput(id, setId);
  const inputPassword = useInput(password, setPassword);
  const inputPasswordConfirm = useInput(passwordConfirm, setPasswordConfirm);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const validId =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
        id
      ); // 이메일 형식인지 확인
    if (password !== passwordConfirm) setCoincide(false);
    if (!validId) setInvalid(true);
    if (password === passwordConfirm && validId) {
      handleCreateId(id, password);
    }
  };

  return (
    <CreateIdForm>
      <h2>회원가입</h2>
      <div className="input-box">
        <label htmlFor="id">ID</label>
        <input id="id" {...inputId} onFocus={() => setInvalid(false)}></input>
        {invalid ? (
          <span className="invalid">유효하지 않은 id 입니다</span>
        ) : (
          <span>id는 이메일 형식으로 만들어야 합니다.</span>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" {...inputPassword}></input>
        <span>비밀번호는 6자리 이상이어야 합니다.</span>
      </div>
      <div className="input-box">
        <label htmlFor="password2">비밀번호확인</label>
        <input
          id="password2"
          type="password"
          {...inputPasswordConfirm}
          onFocus={() => setCoincide(true)}
        ></input>
        {coincide ? null : (
          <span className="coincide">비밀번호가 일치하지 않습니다.</span>
        )}
      </div>
      <button className="submit" onClick={(e) => handleSubmit(e)}>
        가입하기
      </button>
    </CreateIdForm>
  );
};

export default CreateId;
