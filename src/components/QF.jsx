import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    --white: #FFFCF9;
    --black: #060700;
    --blue: #2F549D;
    --navy: #1D3461;
    --light-black: #00000B;
    --purple: #6e5577;
    --plum: #423348;
    }
 * {
    margin: 0;
    padding: 0;
    }

    body {
    background: var(--white);
    font-size: 15px;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: 'chad chad brenda' 'bae john brenda';
  gap: 10px;
  padding: 10px;

  @media (width < 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas:
      'chad brenda'
      'bae john';
  }
  @media (width < 540px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'chad' 'brenda'
      'bae' 'john';
  }
`;

const Wrapper = styled.div`
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Quote = styled.p`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
  }
`;

const Testimonial = styled.div`
  position: relative;
  color: var(--white);
  border-radius: 10px;
  padding: 1rem 1rem 0;
  overflow: hidden;
  box-shadow: 0 4px 6px var(--light-black);

  &:nth-child(1) {
    background: var(--navy);
    grid-area: chad;
  }
  &:nth-child(1) ${Quote}::after {
    background: linear-gradient(transparent, var(--navy));
  }
  &:nth-child(2) {
    background: var(--purple);
    grid-area: brenda;
  }
  &:nth-child(2) ${Quote}::after {
    background: linear-gradient(transparent, var(--purple));
  }
  &:nth-child(3) {
    background: var(--plum);
    grid-area: bae;
  }
  &:nth-child(3) ${Quote}::after {
    background: linear-gradient(transparent, var(--plum));
  }
  &:nth-child(4) {
    background: var(--blue);
    grid-area: john;
  }
  &:nth-child(4) ${Quote}::after {
    background: linear-gradient(transparent, var(--blue));
  }
`;
const Author = styled.div`
  display: flex;
  gap: 1rem;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Info = styled.div``;
const Title = styled.span`
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
`;
const Name = styled.span`
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 2px;
`;
const Snippet = styled.p`
  font-size: 1.1rem;
`;

const DoubleQuote = styled.span`
  font-size: 10rem;
  position: absolute;
  right: 2rem;
  color: var(--light-black);
  top: 0;

  @container (width < 350px) {
    bottom: -80px;
    top: initial;
    font-size: 9rem;
    right: 1rem;
  }
  @media (width < 450px) {
    display: none;
  }
`;

function QF() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Testimonial>
          <Wrapper>
            <Author>
              <Avatar src="https://i.imgur.com/UDDSnXQ.png" />
              <Info>
                <Name>Chad Richardson</Name>
                <Title>Professional Meeting Attendar</Title>
              </Info>
            </Author>
            <Snippet>I literally cannot be more neutral.</Snippet>
            <Quote>
              Honestly, I’ve sat through a lot of meetings that go nowhere. This
              time, things actually moved forward. The team was clear,
              efficient, and didn’t waste time overcomplicating simple problems.
              We need someone to do the Quality Assurance on Acme Solution Inc.
              There service was adequate and their product launched
              successfully.
            </Quote>
            <DoubleQuote>”</DoubleQuote>
          </Wrapper>
        </Testimonial>
        <Testimonial>
          <Wrapper>
            <Author>
              <Avatar src="https://i.imgur.com/WohfzpU.png" />
              <Info>
                <Name> Brenda Montgomery</Name>
                <Title>VP of Synergy Optimization</Title>
              </Info>
            </Author>
            <Snippet>Exactly what we needed.</Snippet>
            <Quote>
              Their ability to quickly understand our business challenges and
              translate them into practical solutions was impressive. Execution
              was consistent, communication was sharp, and the results spoke for
              themselves. Absolutely not an issue if the quality is not
              compromised. Lets communicate for the further feature to be
              included in Q4. New year resolution is absolutely welcomed in our
              company. We are thrinving in the age of AI. Lets continue with the
              Codex and Copilot in future to solve our problems.
            </Quote>
          </Wrapper>
        </Testimonial>

        <Testimonial>
          <Wrapper>
            <Author>
              <Avatar src="https://randomuser.me/api/portraits/women/90.jpg" />
              <Info>
                <Name>Bae Donna</Name>
                <Title>Senior Designer</Title>
              </Info>
            </Author>
            <Snippet>Surprisingly effective.</Snippet>
            <Quote>
              I wasn’t expecting much, but the results were actually solid. The
              team delivered on time and communication was smooth.
            </Quote>
          </Wrapper>
        </Testimonial>

        <Testimonial>
          <Wrapper>
            <Author>
              <Avatar src="https://randomuser.me/api/portraits/men/9.jpg" />
              <Info>
                <Name>John Morrison</Name>
                <Title>Senior Product Manager</Title>
              </Info>
            </Author>
            <Snippet>Low expectations.</Snippet>
            <Quote>
              Clean code, reliable delivery, and no unnecessary complexity.
              That’s rare. Definitely working with them again.
            </Quote>
          </Wrapper>
        </Testimonial>
      </Container>
    </>
  );
}

export default QF;
