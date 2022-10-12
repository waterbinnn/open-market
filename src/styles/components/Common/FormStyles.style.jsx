/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../../constants/colors';

export const TabLinkStyles = {
  position: 'absolute',
  top: '80px',
  marginTop: '70px',
  border: `1px solid ${colors.border}`,
  borderBottom: 'none',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '22px',
  textAlign: 'center',
  cursor: 'pointer',
  color: 'black',
  width: '45%',
  borderRadius: '10px 10px 0 0',
  background: '#f2f2f2',
};

export const FormStyle = styled.form({
  border: `1px solid ${colors.border}`,
  background: `${colors.white}`,
  borderRadius: '0 0 10px 10px',
  width: '90%',
  padding: '36px 10px',
  margin: '128px auto 0',
  zIndex: '50',
});

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 100px auto;
  width: 550px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ImgLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 238px;
  cursor: pointer;
`;

export const Label = styled.label`
  margin: 12px 0 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.dark};
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  padding: 16px 8px;
  font-size: 16px;
  line-height: 1.5;
`;

export const InputPassword = styled.div`
  position: relative;
`;

export const IconCheck = styled.img`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 20px;
  height: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  position: relative;
  gap: 12px;
  span {
    margin-top: 18px;
    color: #767676;
  }
`;

export const CheckGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 34px;
  width: 480px;

  img {
    margin-bottom: 15px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
  }

  strong {
    text-decoration: underline;
    font-weight: 700;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 30px auto;
  width: fit-content;
  color: ${colors.dark};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

// 기능구현에 따른 수정 필요
export const ErrorMsg = styled.strong`
  margin-top: 10px;
  color: ${(props) => props.color};
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
`;
