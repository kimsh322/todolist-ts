import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const handleCreateId = (id: string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, id, password).then((userCredential) => {
    // id 생성
    const user = userCredential.user;
  });
};

export default handleCreateId;
