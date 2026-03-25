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

const Product = styled.div`
  width: 100%;
  max-width: 600px;
  container-type: inline-size;
`;
const Wrapper = styled.div`
  color: var(--gray);
  display: grid;
  grid-template-columns: 100px auto 100px;
  gap: 20px;
  padding: 10px;
  background: var(--charcoal);
  border-radius: 5px;

  @container (width < 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px auto 50px;
    max-width: 270px;
  }
  @container (width < 200px) {
    align-items: center;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  @container (width < 200px) {
    justify-content: center;
  }
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

  @container (width < 200px) {
    align-items: center;
  }

  > div:nth-of-type(2) {
    color: var(--gray);
    font-weight: 400;
    font-size: 12px;
    max-width: 250px;

    @container (width < 200px) {
      display: none;
      max-width: 350px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @container (width < 200px) {
    justify-content: center;
  }
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
        <Product>
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
        </Product>
        <Product>
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
        </Product>
      </Container>
    </>
  );
}

export default ProductCard;
