import styled from 'styled-components';
import { mobileMini, tablet } from './ArticleList/style';

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Onest, sans-serif, Helvetica;
  padding: 24px;
  margin: 0 80px;
  background-color: #ffffff; 
  border-radius: 8px; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 

  @media (max-width: ${tablet}) {
    margin: 0;
  }

  @media (max-width: ${mobileMini}) {
    margin: 0;
    display: contents;
  }
`;