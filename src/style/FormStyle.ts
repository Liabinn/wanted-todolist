import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 2rem;
`;
export const Title = styled.label`
  font-size: large;
  font-weight: bold;
  margin-right: 1rem;
`;
export const Input = styled.input`
  height: 2.5rem;
  border: 0.1rem solid gray;
  border-radius: 0.5rem;
  outline: none;
`;
export const AddButton = styled.button`
  height: 2.2rem;
  background-color: #13B3BC50;
  border-radius: 0.5rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #13B3BC;
    color: #FFFEFA;
  }
`