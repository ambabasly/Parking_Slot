import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? "#00A972" : "red")};
  color: white;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.3rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  width: 100px;
`;
