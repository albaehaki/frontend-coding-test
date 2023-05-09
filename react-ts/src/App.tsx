import { memo, useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";

//components
import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body"

const Title = styled.h1`
  color: #666;
`;

function App() {
 

  return (
    <>
      <GlobalStyles />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default memo(App);
