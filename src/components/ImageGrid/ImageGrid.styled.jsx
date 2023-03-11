import styled from "styled-components";

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  max-width: 100% - 48px;
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
