import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
--white: #ffffff;
--orange: #ff7d1a;
--light-orange: #ffede0;
--gary: #68707d;
--dark: #1d2025;
--light-gray: #b6bcc8;
}

body {
display: flex;
width: 100%;
height: 100svh;
justify-content: center;
align-items: center;
background: var(--light-gray);
}

`;

const Container = styled.div`
  width: 600px;
  height: 400px;
  background: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 60px;
  grid-template-areas:
    'image description'
    'thumbnails controls';

  gap: 25px;
  padding: 40px;
  border-radius: 2px;
`;
const ProductDetails = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
const ProductThumbnails = styled.div`
  grid-area: thumbnails;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const PurchaseControls = styled.div`
  grid-area: controls;
  display: flex;
  align-items: center;
`;
const ProductImage = styled.div`
  grid-area: image;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Thumbnail = styled.div`
  width: 45px;
  height: 45px;
`;
const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductPricing = styled.div``;
const ProductBrand = styled.span``;
const ProductTitle = styled.span``;
const ProductDesc = styled.span``;
const PriceRow = styled.div``;

const CurrentPrice = styled.span``;
const DiscountBadge = styled.span``;
const OriginalPrice = styled.span``;
const CartButton = styled.button`
  flex: 1;
  height: 40px;
`;

function SM() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ProductImage>
          <Image
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80"
            alt="air flex 9000s"
          />
        </ProductImage>
        <ProductThumbnails>
          <Thumbnail className="active">
            <ThumbnailImage
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=300&q=60"
              alt="air flex 9000s"
            />
          </Thumbnail>
          <Thumbnail>
            <ThumbnailImage
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=300&q=60"
              alt="air flex 9000s"
            />
          </Thumbnail>
          <Thumbnail>
            <ThumbnailImage
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
              alt="air flex 9000s"
            />
          </Thumbnail>
          <Thumbnail>
            <ThumbnailImage
              src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80"
              alt="air flex 9000s"
            />
          </Thumbnail>
        </ProductThumbnails>
        <ProductDetails>
          <ProductBrand>Hype Beast Inc.</ProductBrand>
          <ProductTitle>Extremely Limited Edition Air Flex 9000s</ProductTitle>
          <ProductDesc>
            Finally Shoe you'll never actually wear. Kepp them in the box, post
            them on Instagram, and feel superior to people who use footwear for
            walking. Made with 100% artificial scarcity.
          </ProductDesc>
          <ProductPricing>
            <PriceRow>
              <CurrentPrice>$867.00</CurrentPrice>
              <DiscountBadge>RESALE</DiscountBadge>
            </PriceRow>
            <OriginalPrice>Retail was $210</OriginalPrice>
          </ProductPricing>
        </ProductDetails>
        <PurchaseControls>
          <CartButton>Add to Cart</CartButton>
        </PurchaseControls>
      </Container>
    </>
  );
}

export default SM;
