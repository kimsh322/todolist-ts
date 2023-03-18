import { useState } from "react";
import styled from "styled-components";
import TypeIt from "typeit-react";

interface Props {
  headText: string;
  loading: boolean;
}
interface TypeitProps {
  children: string;
}
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: beige;

  h1 {
    font-size: 4em;
  }
  button {
    position: absolute;
    right: 5px;
    width: 5%;
    height: 10%;
  }
`;

const MainHead = ({ children }: TypeitProps) => {
  return <h1 style={{ fontSize: "4em" }}>{children}</h1>;
};

const Header = ({ headText, loading }: Props) => {
  return (
    <HeaderContainer>
      {loading ? (
        <TypeIt
          options={{
            cursor: false,
            startDelay: 300,
          }}
        >
          <MainHead>{headText}</MainHead>
        </TypeIt>
      ) : (
        <div></div>
      )}
      <button>달력</button>
    </HeaderContainer>
  );
};

export default Header;
