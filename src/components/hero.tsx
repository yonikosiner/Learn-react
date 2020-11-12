import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
    font-size: 35px;
    padding: 50px;
    font-family: "Roboto", sans-serif;
` 

const DescriptionWrapper = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin-top: -14%;
    font-family: "Roboto", sans-serif;
`

const Description = styled.p`
    text-align: justify;
`

const Here = () => {
     return(
        <div>
            <Title>Send me a message</Title>
            <DescriptionWrapper>
                <Description>Feel free to get In touch with me. <br/> About coding productivity etc. <br/> I will respond ass I soon I can.</Description>
            </DescriptionWrapper>
        </div>
     )
}

export default Here;