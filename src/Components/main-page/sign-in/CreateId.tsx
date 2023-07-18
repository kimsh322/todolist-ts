import styled from "styled-components";
import { useState } from "react";
import useInput from "../../../hooks/useInput";
import { handleCreateId } from "../../../fireBase/handleFunc";
import CreateSuccess from "./CreateSuccess";

interface StyleProps {
  invalidPassword: boolean;
}
const CreateIdForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80%;
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 2em;
    }
    span {
      font-size: 1.2em;
    }
  }
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
    .password-description {
      color: ${(props: StyleProps) => (props.invalidPassword ? "red" : "black")};
    }
  }
  .submit {
    width: 50%;
    height: 10%;
    font-size: 1.5em;
  }
`;

const CreateId = () => {
  const [invalidId, setInvalidId] = useState(false);
  const [coincide, setCoincide] = useState(true);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [inputId] = useInput("");
  const [inputPassword] = useInput("");
  const [inputPasswordConfirm] = useInput("");
  const id = inputId.value;
  const password = inputPassword.value;
  const passwordConfirm = inputPasswordConfirm.value;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const validId =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(id); // 이메일 형식인지 확인
    if (!validId) setInvalidId(true);
    else if (password.length < 6) setInvalidPassword(true);
    else if (password !== passwordConfirm) setCoincide(false);
    else {
      handleCreateId(id, password, setCreateSuccess);
    }
  };

  return (
    <CreateIdForm invalidPassword={invalidPassword}>
      <h2>회원가입</h2>
      <div className="input-box">
        <label htmlFor="id">ID</label>
        <input id="id" {...inputId} onFocus={() => setInvalidId(false)}></input>
        {invalidId ? (
          <span className="invalid">유효하지 않은 id 입니다</span>
        ) : (
          <span>id는 이메일 형식으로 만들어야 합니다.</span>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          {...inputPassword}
          onFocus={() => setInvalidPassword(false)}
        ></input>
        <span className="password-description">비밀번호는 6자리 이상이어야 합니다.</span>
      </div>
      <div className="input-box">
        <label htmlFor="password2">비밀번호확인</label>
        <input
          id="password2"
          type="password"
          {...inputPasswordConfirm}
          onFocus={() => setCoincide(true)}
        ></input>
        {coincide ? null : <span className="coincide">비밀번호가 일치하지 않습니다.</span>}
      </div>
      <button className="submit" onClick={(e) => handleSubmit(e)}>
        가입하기
      </button>
      <CreateSuccess createSuccess={createSuccess} setCreateSuccess={setCreateSuccess} />
    </CreateIdForm>
  );
};

export default CreateId;
