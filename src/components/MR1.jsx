import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    --white: #fffffa;
    --orange: #f58f29;
    -- purple: #A020F0;
    --dark-purle: #30173a;
    --light-gay: #e0e3de;
    --gray: #60695c;
    --dark-gray: #3c4238;
    }
`;

const Container = styled.div``;
const H1 = styled.h1``;
const Highlight = styled.span``;
const Tagline = styled.p``;
const InputBox = styled.div``;
const TextArea = styled.textarea``;
const InputFooter = styled.div``;
const Button = styled.button``;
const Suggestions = styled.div``;
const Pill = styled.button``;

function MR1() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <H1>
          What do you want to <Highlight>hallucinate</Highlight> today?
        </H1>
        <Tagline>Your bugs, delivered faster</Tagline>
        <InputBox>
          <TextArea placeholder="Describe your billion dollar idea..."></TextArea>
          <InputFooter>
            <Button aria-label="Submit">&#8593;</Button>
          </InputFooter>
        </InputBox>
        <Suggestions>
          <Pill>&#8593; Technical debt</Pill>
          <Pill>&#8593; Spaghetti code</Pill>
          <Pill>&#8593; It workd locally</Pill>
        </Suggestions>
      </Container>
    </>
  );
}

export default MR1;
