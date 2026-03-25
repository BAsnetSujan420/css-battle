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

const Container = styled.div``;
const Wrapper = styled.div``;
const ImageWrapper = styled.div``;
const Image = styled.img``;

const Content = styled.div``;

const ButtonContainer = styled.div``;
const Button = styled.button``;

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
