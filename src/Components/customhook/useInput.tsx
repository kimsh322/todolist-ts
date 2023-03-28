const useInput = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const bind = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    },
  };
  return bind;
};

export default useInput;
