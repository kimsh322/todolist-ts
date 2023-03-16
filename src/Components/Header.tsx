import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  background-color: beige;

  h1 {
    font-size: 6rem;
  }
  button {
    position: absolute;
    right: 5px;
    width: 5%;
    height: 10%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>TodoList</h1>
      <button>달력</button>
    </HeaderContainer>
  );
};

export default Header;
