import styled from "styled-components";

interface Props {
  text: string;
}

const ItemLi = styled.li`
  list-style: none;
  position: relative;
  margin: 10px 10px 10px 50px;
  border-radius: 10px;
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3em;
  span {
    margin-left: 10px;
    font-size: 1.5em;
  }
  .remove {
    width: 10%;
    height: 80%;
    background-color: #b42a2a;
    color: white;
    position: absolute;
    right: 20px;
  }
`;

const ListItem = ({ text }: Props) => {
  return (
    <ItemLi>
      <span>{text}</span>
      <button className="remove">삭제</button>
    </ItemLi>
  );
};

export default ListItem;
