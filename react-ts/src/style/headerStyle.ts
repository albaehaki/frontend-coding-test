import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: lightblue;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;

export const NameStyled = styled.h1`
  text-weight: bold;
  font-size: 1.5em;
  margin-bottom: auto;
  margin-top: auto;
  margin-left: 50px;
  flex-grow: 8;
`;

export const ContainerMenu = styled.div`
  margin-bottom: auto;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
  flex-grow: 2;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuStyled = styled.a`
  color: black;
  cursor: pointer;
  font-weight: bold;
  padding: 2px 5px 2px 5px;
  border-radius: 30px;
  &:hover {
    background-color: white;
  }
`;


export const ContainerMenuMobileStyled = styled.div`
z-index: -1;
width: 50vw;
height: 100vh;
background-color: lightyellow;
shadow: 0px 4px 4px rgba(0,0,0,0.5)
display: flex;
flex-direction: row;
float: right;
padding: 1em
`

export const MobileMenuStyled = styled.a`
display: block;
color: black;
font-weight: bold;
margin-bottom: 1em;
cursor: pointer;s
`

export const HumburgerButton = styled.button`
  display: none;
  margin-bottom: auto;
  margin-top: auto;
  background-color: white;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  margin-right: 50px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
    color: white;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
