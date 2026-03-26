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

const Container = styled.div``;
const Testimonial = styled.div``;
const Author = styled.div``;
const Avatar = styled.img``;
const Info = styled.div``;
const Title = styled.span``;
const Name = styled.span``;
const Snippet = styled.p``;
const Quote = styled.p``;

const DoubleQuote = styled.span``;

function QF() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Testimonial>
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
            time, things actually moved forward. The team was clear, efficient,
            and didn’t waste time overcomplicating simple problems. We need
            someone to do the Quality Assurance on Acme Solution Inc. There
            service was adequate and their product launched successfully.
          </Quote>
          <DoubleQuote>”</DoubleQuote>
        </Testimonial>

        <Testimonial>
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
            compromised. Lets communicate for the further feature to be included
            in Q4. New year resolution is absolutely welcomed in our company. We
            are thrinving in the age of AI. Lets continue with the Codex and
            Copilot in future to solve our problems.
          </Quote>
        </Testimonial>

        <Testimonial>
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
        </Testimonial>

        <Testimonial>
          <Author>
            <Avatar src="https://randomuser.me/api/portraits/men/9.jpg" />
            <Info>
              <Name>John Morrison</Name>
              <Title>Senior Product Manager</Title>
            </Info>
          </Author>
          <Snippet>Low expectations.</Snippet>
          <Quote>
            Clean code, reliable delivery, and no unnecessary complexity. That’s
            rare. Definitely working with them again.
          </Quote>
        </Testimonial>
      </Container>
    </>
  );
}

export default QF;
