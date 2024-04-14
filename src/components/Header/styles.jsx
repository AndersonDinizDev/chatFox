import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  gap: 2rem;
  align-items: center;
  border-bottom: 1px solid #f2f4f7;
  padding: 1rem;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ListLink = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2rem;
  margin-left: 2rem;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #475467;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-left: auto;
`;

export const Button = styled.button`
  padding: 10px 18px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#7f56d9" : "transparent"};
  color: ${(props) => (props.isSelected ? "#fff" : "#475467")};
  border: ${(props) => (props.isSelected ? "1px solid #7f56d9" : "none")};

  &:hover {
    background-color: #7f56d9;
    color: #fff;
    border: 1px solid #7f56d9;
  }
`;
