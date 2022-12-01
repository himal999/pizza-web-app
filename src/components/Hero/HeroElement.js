import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url('https://www.shutterstock.com/shutterstock/photos/1845185635/display_1500/stock-vector-seamless-pattern-with-burgers-and-fast-food-1845185635.jpg');
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const HeroContent = styled.div`
  height: calc(100vh-80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0rem 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
`;
export const HeroTitle = styled.div`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 0px 5px #e9ba23;
  letter-spacing: 3px;
  color: #f1c40f;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
export const HeroSubTitle = styled.div`
  font-size: clamp(1rem, 10vw, 2rem);
  margin-bottom: 2rem;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  box-shadow: 0px 0px 100px 0px #000;
`;
export const HeroButton = styled.div`
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #e31837;
    transition: 0.2s ease-out;
  }
`;
