import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../FireBase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import SignOutConfirmModal from "./SignOutComfirmModal";
import springImg from "../img/spring.jpg";

const MyPageContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  position: relative;
  padding: 3%;
  background-image: url(${springImg});
  background-size: cover;
  .hello {
    font-size: 2em;
    margin-bottom: 10%;
  }
  .list-number {
    display: flex;
    justify-content: right;
    font-size: 2em;
    margin-top: 5%;
  }
  .sign-out {
    position: absolute;
    right: 3%;
    bottom: 3%;
    width: 25%;
    height: 10%;
    font-size: 1.5em;
    border-radius: 10px;
    cursor: pointer;
    background-color: #c0dbea;
  }
`;

const MyPageContents = () => {
  const [listNum, setListNum] = useState(0);
  const [username, setUsername] = useState("");
  const [isConfirmSignOutModal, setIsConfirmSignOutModal] = useState(false);

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

  return (
    <MyPageContentsContainer>
      <span className="hello">반갑습니다 {username}님!</span>
      <div className="list-number"> 지금까지 작성한 TodoList는 </div>
      <div className="list-number">총 {listNum}개 입니다!</div>
      <button className="sign-out" onClick={() => setIsConfirmSignOutModal(true)}>
        Sign out
      </button>
      {isConfirmSignOutModal ? <SignOutConfirmModal setIsConfirmSignOutModal={setIsConfirmSignOutModal} /> : null}
    </MyPageContentsContainer>
  );
};

export default MyPageContents;
