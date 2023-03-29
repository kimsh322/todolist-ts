import styled from "styled-components";
import useInput from "./customhook/useInput";
import catImg from "../img/cat.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { changeToSignIn } from "../store/logSlice";
import { useAppDispatch } from "../store/reduxHooks";
import { auth } from "../FireBase/firebase";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .right-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #b0daff;
    width: 40%;
    height: 70%;
    padding: 5% 0;
    border-radius: 0 10px 10px 0;
    .header-text {
      margin-bottom: 3%;
      font-size: 2.5em;
    }
    .input-box {
      width: 70%;
      height: 15%;
      margin: 3% 0;
      #id,
      #password {
        width: 100%;
        height: 100%;
      }
    }
    .sign-in-button {
      width: 70%;
      height: 15%;
      margin-top: 5%;
      font-size: 1.3em;
      background-color: #159895;
      border-radius: 5px;
    }
  }

  .left-box {
    display: flex;
    align-items: center;
    width: 30%;
    height: 70%;
    background-color: #68e9ff;
    border-radius: 10px 0 0 10px;
    overflow: hidden;
    .cat-img {
      width: 100%;
    }
  }
  .sign-up-container {
    width: 70%;
    .sign-up {
      width: 40%;
      height: 70%;
      font-size: 1em;
      color: blue;
      margin-top: 10%;
      border-radius: 5px;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setIsOpen }: Props) => {
  const inputId = useInput("");
  const inputPassword = useInput("");
  const id = inputId.value;
  const password = inputPassword.value;
  const dispatch = useAppDispatch();

  // 로그인 함수
  const handleSignInButtonClick = () => {
    signInWithEmailAndPassword(auth, id, password)
      .then((userCredential) => {
        // 로그인 성공
        const user = userCredential.user;
        console.log(user);
        dispatch(changeToSignIn());
      })
      .catch((error) => {
        // 로그인 실패
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignInClick = () => {
    setIsOpen(true);
  };
  return (
    <LoginContainer>
      <div className="left-box">
        <img className="cat-img" src={catImg} alt="cat" />
      </div>
      <div className="right-box">
        <span className="header-text">Login</span>
        <div className="input-box">
          <input id="id" {...inputId} placeholder="E-mail"></input>
        </div>
        <div className="input-box">
          <input id="password" type="password" {...inputPassword} placeholder="password"></input>
        </div>
        <button className="sign-in-button" onClick={handleSignInButtonClick}>
          Sign in
        </button>
        <div className="sign-up-container">
          <span>계정이 없으신가요? </span>
          <button className="sign-up" onClick={handleSignInClick}>
            회원가입
          </button>
        </div>
      </div>
    </LoginContainer>
  );
};
export default Login;
