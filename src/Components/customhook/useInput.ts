import { useState } from "react";

type ReturnArr = [
  { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void },
  React.Dispatch<React.SetStateAction<string>>
];

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const bind = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
  };
  const returnArr: ReturnArr = [bind, setValue];
  return returnArr;
};

export default useInput;
