import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 706px;
  color: #ffffff;
`;
export const FooterTop = styled.div`
  height: 549px;
  background: #1e1b1b;
  opacity: 0.98;
  display: flex;
`;
export const FooterTopLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    width: 50%;
    font-family: 'Manrope';
    font-weight: bold;
    font-style: normal;
    font-size: 48px;
    line-height: 67px;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin-block-end: 0;
    margin-block-start: 0;
  }
  div {
    display: flex;
    p {
      width: 24px;
      height: 24px;
      padding-left: 20px;
      padding-top: 64px;
    }
  }
`;

export const FooterTopRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    padding: 20px 0;
  }
`;

export const FooterBottom = styled.div`
  height: 157px;
  background: #1e1b1b;
`;

export const FirstP = styled.p`
  margin: 0;
  padding-left: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 31.5px;
  opacity: 0.6;
`;
export const SecondP = styled(FirstP)`
  font-size: 24px;
  line-height: 36px;
  opacity: 1;
  letter-spacing: -0.03;
`;
