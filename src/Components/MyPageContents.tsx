import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../FireBase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
const MyPageContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2em;
`;

const MyPageContents = () => {
  const [listNum, setListNum] = useState(0);
  // 현재 유저 정보 가져오기
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        DataNum(uid);
      }
    });
  }, []);
  // 작성한 list 숫자 세기
  const DataNum = async (uid: string) => {
    const querySnapshot = await getDocs(collection(db, uid));
    let num = 0;
    querySnapshot.forEach((doc) => {
      num++;
    });
    setListNum(num);
  };

  return (
    <MyPageContentsContainer>
      <span>뭐넣지 으아아아아아아아아아아아</span>
      <span> 지금까지 작성한 TodoList는 총 {listNum}개 입니다!</span>
      <button> 로그 아웃</button>
    </MyPageContentsContainer>
  );
};

export default MyPageContents;
