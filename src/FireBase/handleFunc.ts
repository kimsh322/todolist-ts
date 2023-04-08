import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const handleCreateId = (
  id: string,
  password: string,
  setCreateSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  createUserWithEmailAndPassword(auth, id, password)
    .then((userCredential) => {
      // id 생성
      // const user = userCredential.user;
      // console.log(user);
    })
    .then(() => setCreateSuccess(true))
    .catch((error) => {
      console.log(error);
    });
};
