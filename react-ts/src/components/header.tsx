import React, { useState } from "react";
import {
  HeaderStyled,
  NameStyled,
  HumburgerButton,
  ContainerMenu,
  MenuStyled,
  ContainerMenuMobileStyled,
  MobileMenuStyled,
} from "../style/headerStyle";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <HeaderStyled>
        <NameStyled>Header</NameStyled>
        <ContainerMenu>
          <MenuStyled>About</MenuStyled>
          <MenuStyled>Contact me</MenuStyled>
        </ContainerMenu>
        <HumburgerButton 
        onClick={() => {
           
                setToggle(!toggle);
       
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </HumburgerButton>
      </HeaderStyled>
      {toggle? (
        <ContainerMenuMobileStyled>
          <MobileMenuStyled>About</MobileMenuStyled>
          <MobileMenuStyled>Contact Me</MobileMenuStyled>
        </ContainerMenuMobileStyled>
   ) : ( 
      "" 
     )} 
    </>
  );
};

export default Header;
