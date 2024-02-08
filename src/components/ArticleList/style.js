import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ArticleItem = styled.li`
  display: flex;
  margin-bottom: 20px;
`;

export const ArticleListImage = styled.img`
  flex: 0 0 auto;
  width: 240px;
  height: auto;
  margin-right: 20px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LastModified = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;

export const StyledLink = styled(Link)`
  color: black; 
  text-decoration: none; 
  transition: color 0.1s ease; 
  line-height: 1.2;
    text-size-adjust: 100%;

  &:hover {
    color: rgb(255, 71, 0); 
  }

  h3{
    margin:0;
    font-size: 24px
  }
`;

export const ContainerForArticle = styled.ul`
  padding: 1px;
`;

export const SubtitleText = styled.ul`
  color: rgb(15, 23, 42);
  font-size: 16px;
  padding: 0;
  
`;

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
