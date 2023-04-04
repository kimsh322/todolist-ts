import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../FireBase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/reduxHooks";
import { changeToSignOut } from "../store/logSlice";

const MyPageContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  position: relative;
  padding: 3%;
  background-color: #feff86;
  .hello {
    font-size: 2em;
  }
  .list-number {
    font-size: 2em;
  }
  .sign-out {
    position: absolute;
    right: 3%;
    bottom: 3%;
    width: 25%;
    height: 10%;
    font-size: 1.5em;
    border-radius: 10px;
  }
`;

const MyPageContents = () => {
  const [listNum, setListNum] = useState(0);
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  // 현재 유저 정보 가져오기
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const userEmail = user.email;
        let userId = "";
        if (userEmail) userId = userEmail.split("@")[0]; // ID에서 @뒤부분 떼고 username에 입력
        DataNum(uid);
        setUsername(userId);
      }
    });
  }, []);
  // 작성한 list 숫자 세기
  const DataNum = async (uid: string) => {
    const querySnapshot = await getDocs(collection(db, uid));
    setListNum(querySnapshot.size);
  };
  // 로그아웃 처리
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(changeToSignOut());
      })
      .catch((error) => {});
  };

  return (
    <MyPageContentsContainer>
      <span className="hello">반갑습니다 {username}님!</span>
      <span className="list-number"> 지금까지 작성한 TodoList는 </span>
      <span className="list-number">총 {listNum}개 입니다!</span>
      <button className="sign-out" onClick={handleSignOut}>
        Sign out
      </button>
    </MyPageContentsContainer>
  );
};

export default MyPageContents;
