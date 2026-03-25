import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    --black: #131313;
    --yellow: #fabf47;
    --gray: #999;
    --charcoal: #2a2a2a;
    --dark-gray: #333;
    }
`;

const Container = styled.div`
  background: var(--black);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 50px;
`;
const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  color: var(--gray);
  display: grid;
  grid-template-columns: 100px auto 100px;
  gap: 20px;
  padding: 10px;
  background: var(--charcoal);
  border-radius: 5px;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 100px;
  border-radius: 5px;
  height: 80px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--yellow);
  font-weight: bold;
  font-size: 15px;

  > div:nth-of-type(2) {
    color: var(--gray);
    font-weight: 400;
    font-size: 12px;
    max-width: 250px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-self: flex-end;
`;
const Button = styled.button`
  width: 20px;
  height: 20px;
  color: var(--yellow);
  background: var(--charcoal);
  border-radius: 50%;
  border: 1px solid var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProductCard() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Wrapper>
          <ImageWrapper>
            <Image
              src="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg"
              alt="beanie"
            />
          </ImageWrapper>
          <Content>
            <div>Product A</div>
            <div>
              Protect your face from this sunlight during daytime, always
              protect you skin in this summer.
            </div>
            <div>$6.50</div>
          </Content>

          <ButtonContainer>
            <Button>-</Button>
            <span>1</span>
            <Button>+</Button>
          </ButtonContainer>
        </Wrapper>

        <Wrapper>
          <ImageWrapper>
            <Image
              src="https://images.pexels.com/photos/3822909/pexels-photo-3822909.jpeg"
              alt="fingerboard"
            />
          </ImageWrapper>
          <Content>
            <div>Product B</div>
            <div>Fill up your empty wall with this painting.</div>
            <div>$10.00</div>
          </Content>

          <ButtonContainer>
            <Button>-</Button>
            <span>1</span>
            <Button>+</Button>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </>
  );
}

export default ProductCard;
