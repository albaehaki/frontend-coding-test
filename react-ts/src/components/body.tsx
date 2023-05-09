import React, {useEffect, useState} from 'react'

import {ButtonStart,Container, ContainerBody, Count} from "../style/bodyStyle"

const Body = () => {
    const [countdown, setCountdown] = useState(15);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        }
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [countdown]);
  
    const handleCountdownClick = () => {
      setCountdown(15);
    };
  
    return (
      <>
      <ContainerBody>
      <Container>
        <Count>{countdown}</Count>
        <ButtonStart onClick={handleCountdownClick}>Mulai</ButtonStart>
        </Container>
        </ContainerBody>
      </>
    );

}

export default Body