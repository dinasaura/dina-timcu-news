import styled from "styled-components";
import { mobileMini, tablet } from "../../constants/index";

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Onest, sans-serif, Helvetica;
  padding: 24px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;

  @media (max-width: ${tablet}) {
    margin: 0;
  }

  @media (max-width: ${mobileMini}) {
    margin: 0;
    display: contents;
  }
`;

export const Logo = styled.div`
  text-align: center;
  margin: 40px 0;
  paddind: 20px;
`;

export const LogoImage = styled.img`
  width: 190px;
  heith: 100px;
`;

export const TextGrey = styled.p`
  color: rgb(128, 128, 128);
  font-weight: 500;
  font-size: 14px;
  margin-top: 10px;
`


