import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border: 0.1rem solid gray;
  border-radius: 1rem;
  padding: 1rem;
  width: 30rem;
`;
export const Title = styled.span`
  font-size: small;
`;
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #13B3BC;
  }
`