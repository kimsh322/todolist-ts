import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const handleCreateId = (
  id: string,
  password: string,
  setCreateSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, id, password)
    .then((userCredential) => {
      // id 생성
      const user = userCredential.user;
    })
    .then(() => setCreateSuccess(true));
};

export default handleCreateId;
