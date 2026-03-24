import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    --white: #fffffa;
    --orange: #f58f29;
    --purple: #A020F0;
    --dark-purle: #30173a;
    --light-gray: #e0e3de;
    --gray: #60695c;
    --dark-gray: #3c4238;
    }

`;

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: var(--dark-purple);
  text-align: center;
  margin: 0;
`;
const Highlight = styled.span``;
const Tagline = styled.p``;
const InputBox = styled.div`
  background: var(--gray);
  width: 420px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
const TextArea = styled.textarea`
  background: transparent;
  border: none;
  padding: 0;
  font-size: 15px;
  color: var(--white);
  outline: none;
  height: 40px;
  resize: none;
`;
const InputFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button``;
const Suggestions = styled.div`
  display: flex;
  gap: 10px;
`;
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
