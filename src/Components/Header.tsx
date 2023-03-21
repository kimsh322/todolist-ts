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
  background-color: #408e91;

  .calender {
    position: absolute;
    right: 5px;
    width: 5%;
    height: 10%;
  }
`;
// typeit 폰트크기 조정
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
          }}
        >
          <MainHead>{headText}</MainHead>
        </TypeIt>
      ) : (
        <div></div>
      )}
      <button className="calender">달력</button>
    </HeaderContainer>
  );
};

export default Header;
